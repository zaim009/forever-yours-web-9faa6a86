import { Heart } from 'lucide-react';

const FloatingHearts = () => {
  const hearts = [
    { size: 40, top: '10%', left: '5%', delay: '0s', opacity: 0.3 },
    { size: 25, top: '20%', right: '10%', delay: '0.5s', opacity: 0.4 },
    { size: 35, bottom: '15%', left: '8%', delay: '1s', opacity: 0.25 },
    { size: 30, top: '40%', right: '5%', delay: '1.5s', opacity: 0.35 },
    { size: 20, bottom: '30%', right: '15%', delay: '2s', opacity: 0.3 },
    { size: 45, top: '60%', left: '3%', delay: '0.8s', opacity: 0.2 },
    { size: 28, bottom: '10%', right: '8%', delay: '1.2s', opacity: 0.4 },
    { size: 22, top: '75%', left: '12%', delay: '0.3s', opacity: 0.35 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {hearts.map((heart, index) => (
        <Heart
          key={index}
          size={heart.size}
          className="absolute text-primary fill-primary animate-float-heart"
          style={{
            top: heart.top,
            left: heart.left,
            right: heart.right,
            bottom: heart.bottom,
            animationDelay: heart.delay,
            opacity: heart.opacity,
            filter: 'drop-shadow(0 0 12px hsl(340 85% 65% / 0.4))',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingHearts;
