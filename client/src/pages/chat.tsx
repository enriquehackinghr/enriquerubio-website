import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Send, Loader2, AlertCircle } from "lucide-react";

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  createdAt: string;
}

interface Conversation {
  id: string;
  name: string;
  email: string;
  organization: string;
  escalated: boolean;
  escalationReason?: string;
}

export default function ChatPage() {
  const { id } = useParams<{ id: string }>();
  const [conversation, setConversation] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchConversation();
  }, [id]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const fetchConversation = async () => {
    try {
      const response = await fetch(`/api/conversation/${id}`);
      if (!response.ok) {
        throw new Error('Conversation not found');
      }
      const data = await response.json();
      setConversation(data.conversation);
      setMessages(data.messages);
      setError(null);
    } catch (err: any) {
      setError(err.message || 'Failed to load conversation');
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || sending) return;

    const messageText = newMessage.trim();
    setNewMessage("");
    setSending(true);

    const optimisticMessage: Message = {
      id: `temp-${Date.now()}`,
      role: 'user',
      content: messageText,
      createdAt: new Date().toISOString()
    };
    setMessages(prev => [...prev, optimisticMessage]);

    try {
      const response = await fetch(`/api/conversation/${id}/message`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: messageText })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }

      const data = await response.json();
      
      const assistantMessage: Message = {
        id: `ai-${Date.now()}`,
        role: 'assistant',
        content: data.response,
        createdAt: new Date().toISOString()
      };
      setMessages(prev => [...prev, assistantMessage]);

      if (data.escalated) {
        setConversation(prev => prev ? { ...prev, escalated: true, escalationReason: data.escalationReason } : null);
      }
    } catch (err: any) {
      setError(err.message);
      setMessages(prev => prev.filter(m => m.id !== optimisticMessage.id));
    } finally {
      setSending(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#00E676]" />
      </div>
    );
  }

  if (error && !conversation) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
        <h1 className="text-2xl font-bold mb-2">Conversation Not Found</h1>
        <p className="text-muted-foreground mb-4">{error}</p>
        <Link href="/">
          <Button data-testid="button-back-home">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b-4 border-black bg-white p-4">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link href="/">
            <Button variant="outline" size="icon" className="border-2 border-black" data-testid="button-back">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
          <div>
            <h1 className="font-bold text-lg font-['Space_Grotesk']">Chat with Enrique's AI Assistant</h1>
            <p className="text-sm text-muted-foreground">
              {conversation?.name} • {conversation?.organization}
            </p>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl w-full mx-auto p-4 flex flex-col">
        {conversation?.escalated && (
          <Card className="bg-[#00E676]/10 border-2 border-[#00E676] p-4 mb-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#00E676] mt-0.5" />
              <div>
                <h3 className="font-bold text-sm">Conversation Escalated to Enrique</h3>
                <p className="text-sm text-muted-foreground">
                  Enrique will personally follow up with you via email at {conversation.email}. 
                  {conversation.escalationReason && ` Reason: ${conversation.escalationReason}`}
                </p>
              </div>
            </div>
          </Card>
        )}

        <div className="flex-1 overflow-y-auto space-y-4 mb-4" data-testid="messages-container">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              data-testid={`message-${message.role}-${message.id}`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-lg border-2 border-black ${
                  message.role === 'user'
                    ? 'bg-[#2979FF] text-white'
                    : 'bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          ))}
          {sending && (
            <div className="flex justify-start">
              <div className="bg-white p-4 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Loader2 className="w-5 h-5 animate-spin text-[#00E676]" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {error && conversation && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={sendMessage} className="flex gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder={conversation?.escalated ? "Conversation escalated - Enrique will contact you directly" : "Type your message..."}
            disabled={sending || conversation?.escalated}
            className="flex-1 border-2 border-black"
            data-testid="input-message"
          />
          <Button
            type="submit"
            disabled={!newMessage.trim() || sending || conversation?.escalated}
            className="bg-[#00E676] text-black border-2 border-black hover:bg-[#00E676]/80 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            data-testid="button-send"
          >
            {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
          </Button>
        </form>
      </main>
    </div>
  );
}
