import { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioContextType {
  isMuted: boolean;
  toggleMute: () => void;
}

const AudioContext = createContext<AudioContextType | null>(null);

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) throw new Error('useAudio must be used within AudioProvider');
  return context;
};

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element once
    const audio = new Audio('/audio/background.mp3');
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted && audioRef.current) {
        audioRef.current.play().catch(() => {});
        setHasInteracted(true);
      }
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [hasInteracted]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <AudioContext.Provider value={{ isMuted, toggleMute }}>
      {children}
      <button 
        onClick={toggleMute}
        className="fixed top-6 right-6 z-50 bg-card/80 backdrop-blur-sm p-3 rounded-full shadow-romantic border border-primary/20 hover:scale-110 transition-transform"
        aria-label={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? <VolumeX className="text-primary" size={24} /> : <Volume2 className="text-primary" size={24} />}
      </button>
    </AudioContext.Provider>
  );
};

export default AudioProvider;