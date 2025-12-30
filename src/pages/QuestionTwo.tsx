import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Sparkles, PartyPopper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FallingElements from '@/components/FallingElements';
import FloatingHearts from '@/components/FloatingHearts';

const QuestionTwo = () => {
  const navigate = useNavigate();
  const [showCelebration, setShowCelebration] = useState(false);

  const handleYes = () => {
    setShowCelebration(true);
    setTimeout(() => {
      navigate('/memories-one');
    }, 1500);
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
        <source src="/videos/video3.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/70 z-[1]" />
      
      <FallingElements />
      <FloatingHearts />
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-glow opacity-40 z-[2]" />
      
      {/* Celebration overlay */}
      {showCelebration && (
        <div className="fixed inset-0 bg-primary/20 backdrop-blur-sm z-50 flex items-center justify-center animate-scale-in">
          <div className="text-center">
            <PartyPopper size={80} className="text-primary mx-auto mb-4 animate-bounce-soft" />
            <h2 className="font-display text-4xl text-foreground">Yay! 🎉</h2>
          </div>
        </div>
      )}

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        {/* Decorative sparkles and hearts */}
        <div className="flex justify-center gap-3 mb-8 animate-bounce-soft">
          <Sparkles size={28} className="text-accent" />
          <Heart size={40} className="text-primary fill-primary" />
          <span className="text-4xl">✨</span>
          <Heart size={40} className="text-heart-red fill-heart-red" />
          <Sparkles size={28} className="text-accent" />
        </div>

        {/* Year badge */}
        <div className="inline-block bg-card/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6 shadow-romantic animate-fade-in-up border border-primary/20">
          <span className="font-display text-2xl text-primary">2025</span>
        </div>

        {/* Question */}
        <h1 
          className="font-display text-5xl md:text-7xl text-foreground mb-4 animate-fade-in-up animation-delay-100"
          style={{ textShadow: '0 4px 20px hsl(340 85% 65% / 0.3)' }}
        >
          Let's start the new year together
        </h1>
        
        <p className="text-muted-foreground text-lg md:text-xl mb-12 animate-fade-in-up animation-delay-200 font-body">
          Will you be mine in 2025? 💗
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in animation-delay-300">
          <Button 
            variant="romantic" 
            size="xl"
            onClick={handleYes}
            className="min-w-[220px] group"
          >
            <Heart className="w-5 h-5 group-hover:scale-125 transition-transform fill-current" />
            Yes, Forever!
          </Button>
          
          <Button 
            variant="love" 
            size="xl"
            onClick={handleYes}
            className="min-w-[220px] group"
          >
            <Sparkles className="w-5 h-5 group-hover:scale-125 transition-transform" />
            Always & Forever
          </Button>
        </div>

        {/* Countdown hint */}
        <div className="mt-12 animate-fade-in-up animation-delay-500">
          <p className="text-muted-foreground text-sm font-body">
            Let's make 2025 our best year yet! 🌟
          </p>
        </div>
      </div>
    </main>
  );
};

export default QuestionTwo;