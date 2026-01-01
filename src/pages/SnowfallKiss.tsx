import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";
import FallingElements from "@/components/FallingElements";

const SnowfallKiss = () => {
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
        <source src="/videos/video4.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/70 z-[1]" />

      <FallingElements />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Title */}
        <h1 className="font-romantic text-4xl md:text-6xl text-love-pink drop-shadow-lg mb-8 animate-fade-in text-center">
          Zaeem & Eman jee
        </h1>

        {/* Couple Animation Container */}
        <div className="relative w-80 h-96 md:w-96 md:h-[450px] flex items-center justify-center">
          {/* Snowfall effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-80 animate-snow"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                }}
              />
            ))}
          </div>

          {/* Couple Silhouettes */}
          <div className="relative flex items-end justify-center animate-scale-in">
            {/* Zaeem (Boy) */}
            <div className="relative">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-b from-gray-700 to-gray-800 rounded-full relative">
                {/* Hair */}
                <div className="absolute -top-2 left-2 right-2 h-8 bg-gray-900 rounded-t-full" />
              </div>
              {/* Body */}
              <div className="w-28 h-40 md:w-32 md:h-48 bg-gradient-to-b from-gray-700 to-gray-800 rounded-t-3xl -mt-4 relative">
                {/* Arm reaching to girl */}
                <div className="absolute -right-8 top-8 w-12 h-4 bg-gray-700 rounded-full transform rotate-12" />
              </div>
              {/* Name tag */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-love-pink/80 px-3 py-1 rounded-full">
                <span className="font-romantic text-white text-sm">Zaeem</span>
              </div>
            </div>

            {/* Heart between them */}
            <div className="absolute top-16 left-1/2 -translate-x-1/2 z-20">
              <Heart className="w-10 h-10 text-heart-red fill-heart-red animate-glow" />
            </div>

            {/* Eman jee (Girl) */}
            <div className="relative -ml-6">
              <div className="w-18 h-18 md:w-22 md:h-22 bg-gradient-to-b from-pink-300 to-pink-400 rounded-full relative" style={{ width: '5rem', height: '5rem' }}>
                {/* Hair */}
                <div className="absolute -top-4 -left-2 -right-2 h-16 bg-gray-900 rounded-t-full rounded-b-3xl" />
              </div>
              {/* Body/Dress */}
              <div className="w-28 h-44 md:w-32 md:h-52 bg-gradient-to-b from-love-pink to-rose-glow rounded-t-3xl -mt-2 relative">
                {/* Arm reaching to boy */}
                <div className="absolute -left-6 top-10 w-10 h-3 bg-pink-300 rounded-full transform -rotate-12" />
              </div>
              {/* Name tag */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-heart-red/80 px-3 py-1 rounded-full">
                <span className="font-romantic text-white text-sm">Eman jee</span>
              </div>
            </div>
          </div>

          {/* Kiss hearts floating */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                className="w-4 h-4 text-love-pink fill-love-pink animate-float-heart"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </div>
        </div>

        {/* Romantic text */}
        <p className="font-romantic text-2xl md:text-3xl text-white text-center mt-12 animate-fade-in drop-shadow-lg" style={{ animationDelay: "0.5s" }}>
          A kiss in the snowfall... 💋
        </p>

        <Button
          variant="love"
          size="lg"
          onClick={() => navigate("/night-walk")}
          className="group mt-8"
        >
          Continue Our Journey
          <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default SnowfallKiss;
