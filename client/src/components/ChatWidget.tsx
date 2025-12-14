import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Loader2, User } from "lucide-react";

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const STORAGE_KEY = 'enrique_chat_conversation_id';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedId = localStorage.getItem(STORAGE_KEY);
    if (storedId) {
      setConversationId(storedId);
      loadConversation(storedId);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (messages.length > 6 && !showEmailCapture) {
      setShowEmailCapture(true);
    }
  }, [messages.length, showEmailCapture]);

  const loadConversation = async (id: string) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/conversation/${id}`);
      if (response.ok) {
        const data = await response.json();
        setMessages(data.messages.map((m: any) => ({
          id: m.id,
          role: m.role,
          content: m.content
        })));
      } else {
        localStorage.removeItem(STORAGE_KEY);
        setConversationId(null);
      }
    } catch (error) {
      console.error('Failed to load conversation:', error);
    } finally {
      setLoading(false);
    }
  };

  const startConversation = async (): Promise<string | null> => {
    try {
      const response = await fetch('/api/conversations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source: 'widget' })
      });
      
      if (!response.ok) {
        console.error('Failed to create conversation:', response.status);
        setMessages([{
          id: 'error',
          role: 'assistant',
          content: "Sorry, I'm having trouble connecting right now. Please try again in a moment or use the contact form below."
        }]);
        return null;
      }
      
      const data = await response.json();
      localStorage.setItem(STORAGE_KEY, data.conversationId);
      setConversationId(data.conversationId);
      setMessages([{
        id: 'greeting',
        role: 'assistant',
        content: data.greeting
      }]);
      return data.conversationId;
    } catch (error) {
      console.error('Failed to start conversation:', error);
      setMessages([{
        id: 'error',
        role: 'assistant',
        content: "Sorry, I'm having trouble connecting right now. Please try again in a moment or use the contact form below."
      }]);
      return null;
    }
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || sending) return;

    const messageText = newMessage.trim();
    setNewMessage("");
    setSending(true);

    let currentConversationId = conversationId;
    if (!currentConversationId) {
      currentConversationId = await startConversation();
      if (!currentConversationId) {
        setSending(false);
        return;
      }
    }

    const optimisticMessage: Message = {
      id: `temp-${Date.now()}`,
      role: 'user',
      content: messageText
    };
    setMessages(prev => [...prev, optimisticMessage]);

    try {
      const response = await fetch(`/api/conversation/${currentConversationId}/message`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: messageText })
      });

      const data = await response.json();
      
      if (response.ok) {
        const assistantMessage: Message = {
          id: `ai-${Date.now()}`,
          role: 'assistant',
          content: data.response
        };
        setMessages(prev => [...prev, assistantMessage]);

        if (data.escalated) {
          setShowEmailCapture(true);
        }
      }
    } catch (error) {
      console.error('Failed to send message:', error);
    } finally {
      setSending(false);
    }
  };

  const submitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !conversationId) return;

    try {
      const contactData: { email: string; name?: string } = { email: email.trim() };
      if (name.trim()) {
        contactData.name = name.trim();
      }
      
      const response = await fetch(`/api/conversation/${conversationId}/contact`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactData)
      });
      
      if (response.ok) {
        setShowEmailCapture(false);
      }
    } catch (error) {
      console.error('Failed to save email:', error);
    }
  };

  const handleOpen = async () => {
    setIsOpen(true);
    if (!conversationId && messages.length === 0) {
      await startConversation();
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={handleOpen}
          className="fixed bottom-6 right-6 w-16 h-16 bg-[#00E676] text-black rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex items-center justify-center z-50"
          data-testid="button-chat-widget"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[380px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-6rem)] bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none flex flex-col z-50" data-testid="chat-widget-panel">
          <div className="bg-black text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#00E676] rounded-full flex items-center justify-center border-2 border-[#00E676]">
                <User className="w-5 h-5 text-black" />
              </div>
              <div>
                <h3 className="font-bold text-sm font-['Space_Grotesk']">Enrique's AI Assistant</h3>
                <p className="text-xs text-gray-300">Ask me anything!</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 bg-[#00E676] text-black flex items-center justify-center hover:bg-white transition-colors"
              data-testid="button-close-chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50" data-testid="chat-messages">
            {loading ? (
              <div className="flex justify-center py-4">
                <Loader2 className="w-6 h-6 animate-spin text-[#00E676]" />
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 text-sm ${
                      message.role === 'user'
                        ? 'bg-[#2979FF] text-white rounded-lg rounded-br-none'
                        : 'bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-lg rounded-bl-none'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))
            )}
            {sending && (
              <div className="flex justify-start">
                <div className="bg-white p-3 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-lg rounded-bl-none">
                  <Loader2 className="w-4 h-4 animate-spin text-[#00E676]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {showEmailCapture && (
            <form onSubmit={submitEmail} className="p-3 bg-[#00E676]/10 border-t-2 border-black">
              <p className="text-xs text-gray-700 mb-2">Want Enrique to follow up? Leave your email:</p>
              <div className="flex gap-2">
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  type="email"
                  className="flex-1 text-sm border-2 border-black h-9"
                  data-testid="input-email-capture"
                />
                <Button
                  type="submit"
                  className="bg-[#00E676] text-black border-2 border-black h-9 px-3 hover:bg-[#00E676]/80"
                  data-testid="button-submit-email"
                >
                  Save
                </Button>
              </div>
            </form>
          )}

          <form onSubmit={sendMessage} className="p-3 border-t-2 border-black bg-white">
            <div className="flex gap-2">
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                disabled={sending}
                className="flex-1 border-2 border-black"
                data-testid="input-chat-message"
              />
              <Button
                type="submit"
                disabled={!newMessage.trim() || sending}
                className="bg-[#00E676] text-black border-2 border-black hover:bg-[#00E676]/80 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                data-testid="button-send-message"
              >
                {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
