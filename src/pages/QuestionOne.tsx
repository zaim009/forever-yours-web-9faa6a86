import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FallingElements from '@/components/FallingElements';
import FloatingHearts from '@/components/FloatingHearts';

const QuestionOne = () => {
  const navigate = useNavigate();

  const handleAnswer = () => {
    navigate('/together');
  };

  return (
    <main className="min-h-screen bg-gradient-romantic flex items-center justify-center relative overflow-hidden">
      <FallingElements />
      <FloatingHearts />
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-glow opacity-50" />
      
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        {/* Decorative hearts */}
        <div className="flex justify-center gap-4 mb-8 animate-bounce-soft">
          <Heart size={32} className="text-primary fill-primary" />
          <Heart size={48} className="text-heart-red fill-heart-red" />
          <Heart size={32} className="text-primary fill-primary" />
        </div>

        {/* Question */}
        <h1 
          className="font-display text-5xl md:text-7xl text-foreground mb-4 animate-fade-in-up"
          style={{ textShadow: '0 4px 20px hsl(340 85% 65% / 0.3)' }}
        >
          Do you love me?
        </h1>
        
        <p className="text-muted-foreground text-lg md:text-xl mb-12 animate-fade-in-up animation-delay-200 font-body">
          Answer honestly... 💕
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in animation-delay-300">
          <Button 
            variant="romantic" 
            size="xl"
            onClick={handleAnswer}
            className="min-w-[200px] group"
          >
            <Heart className="w-5 h-5 group-hover:scale-125 transition-transform fill-current" />
            Yes
          </Button>
          
          <Button 
            variant="love" 
            size="xl"
            onClick={handleAnswer}
            className="min-w-[200px] group"
          >
            <Heart className="w-5 h-5 group-hover:scale-125 transition-transform fill-current" />
            Definitely Yes
          </Button>
        </div>

        {/* Hint text */}
        <p className="mt-12 text-muted-foreground/70 text-sm animate-fade-in-up animation-delay-500 font-body italic">
          (Both answers are correct 😉)
        </p>
      </div>
    </main>
  );
};

export default QuestionOne;
