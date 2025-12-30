import { useNavigate } from 'react-router-dom';
import { Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FallingElements from '@/components/FallingElements';
import FloatingHearts from '@/components/FloatingHearts';

const Index = () => {
  const navigate = useNavigate();

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
        <source src="/videos/video1.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/70 z-[1]" />
      
      <FallingElements />
      <FloatingHearts />
      
      {/* Central glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-glow opacity-40 z-[2]" />
      
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        {/* Decorative top */}
        <div className="flex justify-center gap-3 mb-8 animate-bounce-soft">
          <Sparkles size={28} className="text-accent" />
          <Heart size={40} className="text-primary fill-primary" />
          <Heart size={56} className="text-heart-red fill-heart-red" />
          <Heart size={40} className="text-primary fill-primary" />
          <Sparkles size={28} className="text-accent" />
        </div>

        {/* Main title */}
        <h1 
          className="font-display text-5xl md:text-7xl text-foreground mb-4 animate-fade-in-up"
          style={{ textShadow: '0 4px 20px hsl(340 85% 65% / 0.3)' }}
        >
          A Special Message
        </h1>
        
        <p className="font-display text-2xl md:text-3xl text-primary mb-2 animate-fade-in-up animation-delay-100">
          For Someone Special
        </p>

        <p className="text-muted-foreground text-lg mb-12 animate-fade-in-up animation-delay-200 font-body">
          I have something important to ask you... 💕
        </p>

        {/* Start button */}
        <div className="animate-scale-in animation-delay-300">
          <Button 
            variant="romantic" 
            size="xl"
            onClick={() => navigate('/love')}
            className="min-w-[250px] group text-xl py-7"
          >
            <Heart className="w-6 h-6 group-hover:scale-125 transition-transform fill-current" />
            Open My Heart
            <Heart className="w-6 h-6 group-hover:scale-125 transition-transform fill-current" />
          </Button>
        </div>

        {/* Year badge */}
        <div className="mt-12 animate-fade-in-up animation-delay-500">
          <div className="inline-block bg-card/70 backdrop-blur-sm rounded-full px-8 py-3 shadow-romantic border border-primary/20">
            <span className="font-display text-3xl text-primary">2025</span>
          </div>
        </div>

        {/* Hint */}
        <p className="mt-8 text-muted-foreground/70 text-sm font-body animate-fade-in-up animation-delay-500 italic">
          Click to begin our journey ✨
        </p>
      </div>
    </main>
  );
};

export default Index;