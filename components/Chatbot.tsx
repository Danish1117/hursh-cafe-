import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Hello! I'm Haru, your virtual barista. Looking for a recommendation or have a question about our menu?"
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input.trim()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const botMessageId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, { id: botMessageId, role: 'model', text: '', isStreaming: true }]);

    try {
      await sendMessageToGemini(userMessage.text, (chunkText) => {
        setMessages(prev => prev.map(msg => 
          msg.id === botMessageId ? { ...msg, text: chunkText } : msg
        ));
      });
      setMessages(prev => prev.map(msg => 
        msg.id === botMessageId ? { ...msg, isStreaming: false } : msg
      ));
    } catch (error) {
      setMessages(prev => prev.map(msg => 
        msg.id === botMessageId ? { ...msg, text: "I'm having a little trouble connecting to the coffee spirits right now. Please try again later.", isStreaming: false } : msg
      ));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center ${
          isOpen ? 'bg-coffee-200 text-coffee-900 rotate-90' : 'bg-coffee-800 text-white'
        }`}
        aria-label="Open chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-2xl shadow-2xl z-40 flex flex-col overflow-hidden border border-coffee-100 animate-fade-in-up" style={{ maxHeight: '600px', height: '80vh' }}>
          {/* Header */}
          <div className="bg-coffee-800 p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-coffee-100 flex items-center justify-center text-coffee-800">
              <Sparkles size={20} />
            </div>
            <div>
              <h3 className="text-white font-serif font-bold">Ask Haru</h3>
              <p className="text-coffee-200 text-xs">Virtual AI Barista</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-coffee-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-coffee-800 text-white rounded-br-none'
                      : 'bg-white text-coffee-900 shadow-sm border border-coffee-100 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                  {msg.isStreaming && <span className="inline-block w-1.5 h-3 ml-1 bg-coffee-400 animate-pulse"/>}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-coffee-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Suggest a drink for a rainy day..."
              className="flex-1 bg-coffee-50 border-transparent rounded-xl px-4 py-2 text-sm focus:bg-white focus:ring-2 focus:ring-coffee-200 outline-none transition-all placeholder:text-coffee-300"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="p-2 bg-coffee-800 text-white rounded-xl hover:bg-coffee-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};