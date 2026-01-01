import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Moon, Star } from "lucide-react";
import FloatingHearts from "@/components/FloatingHearts";

const NightWalk = () => {
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
        <source src="/videos/video5.mp4" type="video/mp4" />
      </video>

      {/* Dark night overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900/80 z-[1]" />

      <FloatingHearts />

      {/* Stars */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Star
            key={i}
            className="absolute text-yellow-200 fill-yellow-200 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 40}%`,
              width: `${8 + Math.random() * 8}px`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Moon */}
      <div className="absolute top-10 right-10 z-[2]">
        <Moon className="w-16 h-16 text-yellow-100 fill-yellow-50 animate-glow" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Title */}
        <h1 className="font-romantic text-4xl md:text-6xl text-love-pink drop-shadow-lg mb-8 animate-fade-in text-center">
          Walking Together
        </h1>

        {/* Street Scene */}
        <div className="relative w-full max-w-lg h-80 md:h-96 flex items-end justify-center">
          {/* Street/Ground */}
          <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-gray-800 to-gray-700 rounded-t-lg" />

          {/* Street lamp left */}
          <div className="absolute bottom-20 left-8 md:left-16">
            <div className="w-2 h-32 bg-gray-600 rounded-full" />
            <div className="w-8 h-8 bg-yellow-300/80 rounded-full -ml-3 -mt-2 blur-sm animate-pulse" />
            <div className="w-4 h-4 bg-yellow-100 rounded-full -ml-1 -mt-6" />
          </div>

          {/* Street lamp right */}
          <div className="absolute bottom-20 right-8 md:right-16">
            <div className="w-2 h-32 bg-gray-600 rounded-full" />
            <div className="w-8 h-8 bg-yellow-300/80 rounded-full -ml-3 -mt-2 blur-sm animate-pulse" />
            <div className="w-4 h-4 bg-yellow-100 rounded-full -ml-1 -mt-6" />
          </div>

          {/* Walking Couple */}
          <div className="relative flex items-end justify-center animate-walk mb-20">
            {/* Zaeem */}
            <div className="relative">
              {/* Head */}
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-b from-amber-200 to-amber-300 rounded-full relative">
                <div className="absolute -top-1 left-1 right-1 h-5 bg-gray-900 rounded-t-full" />
              </div>
              {/* Body */}
              <div className="w-16 h-24 md:w-20 md:h-28 bg-gradient-to-b from-blue-700 to-blue-800 rounded-t-2xl -mt-2">
                {/* Holding hands arm */}
                <div className="absolute right-0 top-6 w-8 h-3 bg-amber-200 rounded-full" />
              </div>
              {/* Legs walking animation */}
              <div className="flex justify-center gap-1 -mt-1">
                <div className="w-4 h-12 bg-gray-700 rounded-b-lg animate-leg-left" />
                <div className="w-4 h-12 bg-gray-700 rounded-b-lg animate-leg-right" />
              </div>
              {/* Name */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="font-romantic text-love-pink text-sm">Zaeem</span>
              </div>
            </div>

            {/* Holding hands - heart */}
            <div className="mx-2 mb-20">
              <Heart className="w-6 h-6 text-heart-red fill-heart-red animate-glow" />
            </div>

            {/* Eman jee */}
            <div className="relative">
              {/* Head */}
              <div className="w-11 h-11 md:w-13 md:h-13 bg-gradient-to-b from-pink-200 to-pink-300 rounded-full relative" style={{ width: '2.75rem', height: '2.75rem' }}>
                <div className="absolute -top-3 -left-1 -right-1 h-10 bg-gray-900 rounded-t-full rounded-b-2xl" />
              </div>
              {/* Body/Dress */}
              <div className="w-16 h-28 md:w-20 md:h-32 bg-gradient-to-b from-love-pink to-rose-glow rounded-t-2xl rounded-b-3xl -mt-2 relative">
                {/* Holding hands arm */}
                <div className="absolute left-0 top-6 w-6 h-3 bg-pink-200 rounded-full" />
              </div>
              {/* Name */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="font-romantic text-heart-red text-sm">Eman jee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Romantic text */}
        <p className="font-romantic text-2xl md:text-3xl text-white text-center mt-8 animate-fade-in drop-shadow-lg" style={{ animationDelay: "0.5s" }}>
          Hand in hand, under the stars... ✨
        </p>

        <Button
          variant="love"
          size="lg"
          onClick={() => navigate("/celebration")}
          className="group mt-8"
        >
          Celebrate Together
          <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default NightWalk;
