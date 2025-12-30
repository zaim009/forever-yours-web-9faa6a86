import { Heart, Sparkles, Star, Volume2, VolumeX } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import FallingElements from '@/components/FallingElements';
import FloatingHearts from '@/components/FloatingHearts';

const Celebration = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const targetDate = new Date('2025-01-01T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(() => {});
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/video7.mp4" type="video/mp4" />
      </video>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/70 z-[1]" />

      <audio ref={audioRef} loop>
        <source src="/audio/song1.mp3" type="audio/mpeg" />
      </audio>
      
      {/* Music control */}
      <button 
        onClick={toggleMute}
        className="fixed top-6 right-6 z-50 bg-card/80 backdrop-blur-sm p-3 rounded-full shadow-romantic border border-primary/20 hover:scale-110 transition-transform"
      >
        {isMuted ? <VolumeX className="text-primary" size={24} /> : <Volume2 className="text-primary" size={24} />}
      </button>

      <FallingElements />
      <FloatingHearts />
      
      {/* Multiple glow effects */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-gradient-glow opacity-30 z-[2]" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-glow opacity-20 z-[2]" />
      
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Celebration header */}
        <div className="flex justify-center gap-2 mb-6 animate-bounce-soft">
          <Star size={32} className="text-accent fill-accent" />
          <Sparkles size={40} className="text-primary" />
          <Heart size={48} className="text-heart-red fill-heart-red" />
          <Sparkles size={40} className="text-primary" />
          <Star size={32} className="text-accent fill-accent" />
        </div>

        {/* Main message */}
        <h1 
          className="font-display text-5xl md:text-7xl text-foreground mb-4 animate-fade-in-up"
          style={{ textShadow: '0 4px 30px hsl(340 85% 65% / 0.4)' }}
        >
          Happy New Year!
        </h1>

        {/* Countdown Timer */}
        <div className="animate-fade-in-up animation-delay-200 mb-8">
          <p className="text-muted-foreground text-sm mb-4 font-body">Countdown to 2025</p>
          <div className="flex justify-center gap-3 md:gap-6">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((item) => (
              <div key={item.label} className="bg-card/80 backdrop-blur-sm rounded-xl px-4 py-3 md:px-6 md:py-4 shadow-romantic border border-primary/20">
                <p className="font-display text-3xl md:text-5xl text-primary animate-pulse-glow">
                  {String(item.value).padStart(2, '0')}
                </p>
                <p className="text-muted-foreground text-xs md:text-sm font-body mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3 animate-fade-in-up animation-delay-300">
          <p className="font-display text-2xl md:text-3xl text-primary">
            My Love ❤️
          </p>
          
          <p className="text-muted-foreground text-base md:text-lg font-body max-w-xl mx-auto leading-relaxed">
            Here's to another year of love, laughter, and endless adventures together. 
            You make every moment magical! ✨
          </p>
        </div>

        {/* Year display */}
        <div className="mt-8 animate-scale-in animation-delay-400">
          <div className="inline-block bg-card/90 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-romantic border border-primary/20">
            <p className="font-display text-5xl md:text-6xl text-primary animate-pulse-glow" style={{ display: 'inline-block' }}>
              2025
            </p>
          </div>
        </div>

        {/* Love message */}
        <div className="mt-6 animate-fade-in-up animation-delay-500">
          <div className="flex justify-center gap-3 items-center">
            <Heart size={20} className="text-primary fill-primary" />
            <span className="font-body text-foreground/80">Forever Yours</span>
            <Heart size={20} className="text-primary fill-primary" />
          </div>
        </div>

        {/* Decorative hearts row */}
        <div className="mt-6 flex justify-center gap-4 animate-bounce-soft animation-delay-300">
          {[...Array(5)].map((_, i) => (
            <Heart 
              key={i} 
              size={24 + i * 4} 
              className="text-primary fill-primary opacity-60"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Celebration;