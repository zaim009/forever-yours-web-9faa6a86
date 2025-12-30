import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface FallingElement {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  type: 'heart' | 'snow';
}

const FallingElements = () => {
  const [elements, setElements] = useState<FallingElement[]>([]);

  useEffect(() => {
    const hearts: FallingElement[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 8,
      size: 16 + Math.random() * 24,
      type: 'heart',
    }));

    const snowflakes: FallingElement[] = Array.from({ length: 40 }, (_, i) => ({
      id: i + 15,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: 10 + Math.random() * 10,
      size: 4 + Math.random() * 8,
      type: 'snow',
    }));

    setElements([...hearts, ...snowflakes]);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((el) => (
        <div
          key={el.id}
          className={el.type === 'heart' ? 'animate-fall' : 'animate-snow'}
          style={{
            position: 'absolute',
            left: `${el.left}%`,
            top: '-50px',
            animationDelay: `${el.delay}s`,
            animationDuration: `${el.duration}s`,
          }}
        >
          {el.type === 'heart' ? (
            <Heart
              size={el.size}
              className="text-primary fill-primary opacity-60"
              style={{ filter: 'drop-shadow(0 0 8px hsl(340 85% 65% / 0.5))' }}
            />
          ) : (
            <div
              className="rounded-full bg-primary-foreground opacity-70"
              style={{
                width: el.size,
                height: el.size,
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FallingElements;
