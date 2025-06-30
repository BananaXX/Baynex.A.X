import React, { useEffect, useRef } from 'react';

interface Props {
  feedback: string;
}

const Baynexa: React.FC<Props> = ({ feedback }) => {
  const synthRef = useRef(window.speechSynthesis);
  const voiceMode = localStorage.getItem('voiceMode') || 'smart'; // smart, full, silent
  const lastSpoken = useRef<string | null>(null);

  const speak = (text: string) => {
    if (voiceMode === 'silent') return;
    if (voiceMode === 'smart' && !/goal|warning|profit|error|switched/i.test(text)) return;
    if (text === lastSpoken.current) return;
    lastSpoken.current = text;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 1;
    synthRef.current.speak(utterance);
  };

  useEffect(() => {
    if (feedback) speak(feedback);
  }, [feedback]);

  return (
    <div className="fixed bottom-4 right-4 bg-gradient-to-br from-orange-600 to-red-700 text-white px-4 py-3 rounded-2xl shadow-xl max-w-sm w-full border border-red-300">
      <div className="font-bold mb-1">🤖 Baynexa</div>
      <div className="text-sm">{feedback || 'Awaiting updates...'}</div>
    </div>
  );
};

export default Baynexa;
