import { Heart, Sparkles, Star } from 'lucide-react';
import FallingElements from '@/components/FallingElements';
import FloatingHearts from '@/components/FloatingHearts';

const Celebration = () => {
  return (
    <main className="min-h-screen bg-gradient-romantic flex items-center justify-center relative overflow-hidden">
      <FallingElements />
      <FloatingHearts />
      
      {/* Multiple glow effects */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-gradient-glow opacity-40" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-glow opacity-30" />
      
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
          className="font-display text-6xl md:text-8xl text-foreground mb-6 animate-fade-in-up"
          style={{ textShadow: '0 4px 30px hsl(340 85% 65% / 0.4)' }}
        >
          Happy New Year!
        </h1>

        <div className="space-y-4 animate-fade-in-up animation-delay-200">
          <p className="font-display text-3xl md:text-4xl text-primary">
            My Love ❤️
          </p>
          
          <p className="text-muted-foreground text-lg md:text-xl font-body max-w-xl mx-auto leading-relaxed">
            Here's to another year of love, laughter, and endless adventures together. 
            You make every moment magical! ✨
          </p>
        </div>

        {/* Year display */}
        <div className="mt-12 animate-scale-in animation-delay-300">
          <div className="inline-block bg-card/90 backdrop-blur-sm rounded-2xl px-10 py-6 shadow-romantic border border-primary/20">
            <p className="font-display text-7xl md:text-8xl text-primary animate-pulse-glow" style={{ display: 'inline-block' }}>
              2025
            </p>
          </div>
        </div>

        {/* Love message */}
        <div className="mt-10 animate-fade-in-up animation-delay-500">
          <div className="flex justify-center gap-3 items-center">
            <Heart size={20} className="text-primary fill-primary" />
            <span className="font-body text-foreground/80">Forever Yours</span>
            <Heart size={20} className="text-primary fill-primary" />
          </div>
        </div>

        {/* Decorative hearts row */}
        <div className="mt-8 flex justify-center gap-4 animate-bounce-soft animation-delay-300">
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
