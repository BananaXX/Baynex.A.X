import React, { useState, useEffect, useRef } from 'react';

interface Message {
  text: string;
  type: 'user' | 'ai';
}

export const BaynexaAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: '👋 Hello, I’m Baynexa — your AI trading assistant. Let’s reach your profit goals.', type: 'ai' },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [voiceMode, setVoiceMode] = useState<'silent' | 'smart' | 'full'>('smart');
  const synth = window.speechSynthesis;

  const speak = (text: string) => {
    if (voiceMode === 'silent') return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    synth.speak(utterance);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, type: 'user' }];
    setMessages(newMessages);
    setInput('');

    const response = await fetch('/api/assistant', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });

    const data = await response.json();
    const aiReply = data.reply || '🤖 Baynexa is thinking...';

    const updatedMessages = [...newMessages, { text: aiReply, type: 'ai' }];
    setMessages(updatedMessages);

    if (voiceMode !== 'silent') {
      speak(aiReply);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="bg-black border border-orange-500 rounded-2xl p-4 mt-4 shadow-xl text-white">
      <h2 className="text-lg font-bold text-orange-400 mb-2">🗣️ Baynexa Assistant</h2>
      <div className="mb-2">
        <label className="mr-2">Voice Mode:</label>
        <select
          className="bg-black border border-orange-500 text-white p-1 rounded"
          value={voiceMode}
          onChange={(e) => setVoiceMode(e.target.value as 'silent' | 'smart' | 'full')}
        >
          <option value="silent">Silent</option>
          <option value="smart">Smart</option>
          <option value="full">Full Voice</option>
        </select>
      </div>
      <div className="h-48 overflow-y-auto bg-gray-900 p-2 mb-2 rounded-md">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-1 px-2 py-1 rounded ${
              msg.type === 'ai' ? 'bg-orange-700 text-white' : 'bg-gray-700 text-white'
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>
      <div className="flex">
        <input
          className="flex-1 bg-gray-800 border border-orange-400 text-white p-2 rounded-l"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Baynexa..."
        />
        <button
          onClick={sendMessage}
          className="bg-orange-500 text-white px-4 rounded-r hover:bg-orange-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};
