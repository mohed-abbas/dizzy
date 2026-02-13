import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Cpu, Loader2 } from 'lucide-react';
import { streamTechnicalResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

interface AIChatProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AIChat: React.FC<AIChatProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'System Online. Ask me about the stack, services, or architecture.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const stream = streamTechnicalResponse(userMsg, "User is exploring the Portfolio.");
      let fullResponse = '';
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      for await (const chunk of stream) {
        fullResponse += chunk;
        setMessages(prev => {
          const newMsgs = [...prev];
          newMsgs[newMsgs.length - 1].text = fullResponse;
          return newMsgs;
        });
      }
    } catch (e) {
      setMessages(prev => [...prev, { role: 'model', text: 'Error connecting to core.', isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg h-[600px] bg-brand-purple border-4 border-white rounded-3xl shadow-[10px_10px_0px_#CCFF00] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-brand-purple border-b-2 border-white/20">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-brand-lime rounded-lg border-2 border-black">
              <Cpu size={24} className="text-black" />
            </div>
            <div>
              <h3 className="font-display text-2xl text-white uppercase tracking-wide">AI Assistant</h3>
              <p className="text-[10px] text-white/70 font-mono uppercase">Gemini 2.5 Flash</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-brand-dark">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`
                  max-w-[80%] p-4 rounded-2xl text-sm font-medium leading-relaxed
                  ${msg.role === 'user' 
                    ? 'bg-brand-lime text-black rounded-tr-none' 
                    : 'bg-brand-gray text-white border border-white/10 rounded-tl-none'}
                `}
              >
                {msg.text || <Loader2 className="animate-spin w-4 h-4" />}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t-2 border-white/20 bg-brand-purple">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your question..."
              className="flex-1 bg-black/20 border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-lime transition-colors placeholder:text-white/30"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-3 bg-brand-lime text-black rounded-xl font-bold hover:bg-white transition-colors disabled:opacity-50"
            >
              {isLoading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};