import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";
import FallingElements from "@/components/FallingElements";
import FloatingHearts from "@/components/FloatingHearts";

const LoveLetter = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/video6.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/80 z-[1]" />

      <FallingElements />
      <FloatingHearts />

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 animate-pulse z-[3]">
        <Sparkles className="w-8 h-8 text-love-pink" />
      </div>
      <div className="absolute top-20 right-16 animate-pulse delay-300 z-[3]">
        <Sparkles className="w-6 h-6 text-rose-glow" />
      </div>
      <div className="absolute bottom-32 left-20 animate-pulse delay-500 z-[3]">
        <Sparkles className="w-7 h-7 text-blush" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className="text-center space-y-8 backdrop-blur-sm bg-background/80 p-8 md:p-12 rounded-3xl border-2 border-love-pink/50 shadow-romantic max-w-2xl animate-scale-in">
          {/* Header Hearts */}
          <div className="flex justify-center gap-3">
            <Heart className="w-8 h-8 text-heart-red fill-heart-red animate-bounce-gentle" />
            <Heart className="w-12 h-12 text-love-pink fill-love-pink animate-glow" />
            <Heart className="w-8 h-8 text-heart-red fill-heart-red animate-bounce-gentle" />
          </div>

          {/* Title */}
          <h1 className="font-romantic text-4xl md:text-6xl text-love-pink drop-shadow-lg animate-fade-in">
            I LOVE U Eman jee
          </h1>

          {/* Love Letter */}
          <div className="space-y-6 text-left">
            <p className="font-body text-lg md:text-xl text-foreground leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
              You're the best thing ever happened to me this year. This year was a mess overall but at the end of the year I got the most splendid gift I could've ever wished for.
            </p>
            
            <p className="font-body text-lg md:text-xl text-foreground leading-relaxed animate-fade-in" style={{ animationDelay: "0.6s" }}>
              You became my home in very short time. Even I couldn't believe that this could've happened to me...
            </p>
            
            <p className="font-body text-lg md:text-xl text-love-pink font-semibold leading-relaxed animate-fade-in" style={{ animationDelay: "0.9s" }}>
              I love u sooooooo much mere jaaaaaaan.... 💕
            </p>
            
            <p className="font-body text-lg md:text-xl text-foreground leading-relaxed animate-fade-in" style={{ animationDelay: "1.2s" }}>
              I want to spend the whole life with you mere jaaaaaaan... Don't ever leave mee huuhh.. Muh tor dounga warna...
            </p>
            
            <p className="font-romantic text-2xl md:text-3xl text-heart-red text-center animate-glow animate-fade-in" style={{ animationDelay: "1.5s" }}>
              ILOVEUUUUUUUUU......MUWWWAAAAHHHH... 💋💋💋
            </p>
          </div>

          {/* Footer Hearts */}
          <div className="flex justify-center gap-2 pt-4">
            {[...Array(7)].map((_, i) => (
              <Heart 
                key={i} 
                className="w-6 h-6 text-love-pink fill-love-pink animate-bounce-gentle"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>

          <Button
            variant="love"
            size="lg"
            onClick={() => navigate("/snowfall-kiss")}
            className="group mt-6"
          >
            Continue Our Story
            <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoveLetter;