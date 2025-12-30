import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";
import FloatingHearts from "@/components/FloatingHearts";

const VideoPageTwo = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/video2.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-love-pink/40 via-transparent to-love-pink/60" />

      <FloatingHearts />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-8 backdrop-blur-sm bg-background/20 p-8 rounded-3xl border border-love-pink/30 shadow-romantic max-w-lg">
          <div className="flex justify-center gap-2 animate-bounce-gentle">
            <Heart className="w-8 h-8 text-heart-red fill-heart-red" />
            <Heart className="w-10 h-10 text-love-pink fill-love-pink" />
            <Heart className="w-8 h-8 text-heart-red fill-heart-red" />
          </div>
          
          <h1 className="font-romantic text-4xl md:text-5xl text-foreground drop-shadow-lg">
            You Make Me Complete
          </h1>
          
          <p className="font-body text-lg text-foreground/90">
            With you, every day feels like a fairytale ✨
          </p>

          <Button
            variant="romantic"
            size="lg"
            onClick={() => navigate("/love-letter")}
            className="group"
          >
            Read My Heart
            <Heart className="ml-2 w-5 h-5 fill-current group-hover:scale-125 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VideoPageTwo;
