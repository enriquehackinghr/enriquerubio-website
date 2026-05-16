import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Loader2, Sparkles } from "lucide-react";

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const STORAGE_KEY = 'enrique_chat_conversation_id';

export function AdaChatSection() {
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [loading, setLoading] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedId = localStorage.getItem(STORAGE_KEY);
    if (storedId) {
      setConversationId(storedId);
      loadConversation(storedId);
    }
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

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
      }
    } catch (error) {
      console.error('Failed to send message:', error);
    } finally {
      setSending(false);
    }
  };

  const suggestedQuestions = [
    "What topics does Enrique speak about?",
    "How does Enrique work with organizations?",
    "What makes Enrique's approach different?"
  ];

  const handleSuggestedQuestion = async (question: string) => {
    setNewMessage(question);
  };

  return (
    <section className="py-20 md:py-28 bg-black border-y-4 border-primary" id="ask-ada">
      <div className="container-width">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border-2 border-primary mb-6">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="font-mono text-primary text-sm uppercase tracking-wider">Meet Ada</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase tracking-tight mb-4">
              How Can I <span className="text-primary">Help</span> You?
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Named after Ada Lovelace, the world's first computer programmer. She's here to help you explore how Enrique can support your organization.
            </p>
          </div>

          <div className="bg-white border-4 border-primary shadow-[8px_8px_0px_0px_rgba(0,230,118,0.5)]">
            <div ref={chatContainerRef} className="h-[400px] overflow-y-auto p-6 bg-gray-50" data-testid="ada-chat-messages">
              {loading ? (
                <div className="flex justify-center py-8">
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                </div>
              ) : messages.length === 0 && initialized ? (
                <div className="h-full flex flex-col items-center justify-center text-center px-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 border-4 border-black">
                    <Sparkles className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 font-heading">Hi, I'm Ada!</h3>
                  <p className="text-gray-600 mb-6 max-w-md">
                    I'm inspired by Ada Lovelace, a visionary who believed technology should amplify human creativity. Ask me anything about Enrique's speaking topics and how he can help your organization thrive in the age of AI.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {suggestedQuestions.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => handleSuggestedQuestion(q)}
                        className="px-4 py-2 bg-white border-2 border-black text-sm font-medium hover:bg-primary hover:text-black transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                        data-testid={`suggested-question-${i}`}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-4 ${
                          message.role === 'user'
                            ? 'bg-[#2979FF] text-white rounded-2xl rounded-br-sm'
                            : 'bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rounded-2xl rounded-bl-sm'
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                  {sending && (
                    <div className="flex justify-start">
                      <div className="bg-white p-4 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rounded-2xl rounded-bl-sm">
                        <Loader2 className="w-5 h-5 animate-spin text-primary" />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <form onSubmit={sendMessage} className="p-4 border-t-4 border-black bg-white">
              <div className="flex gap-3">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Ask Ada a question..."
                  disabled={sending}
                  className="flex-1 border-2 border-black h-12 text-base px-4"
                  data-testid="input-ada-message"
                />
                <Button
                  type="submit"
                  disabled={!newMessage.trim() || sending}
                  className="bg-primary text-black border-2 border-black h-12 px-6 hover:bg-primary/80 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-bold"
                  data-testid="button-ada-send"
                >
                  {sending ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
