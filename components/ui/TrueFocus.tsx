import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface TrueFocusProps {
  sentence?: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
  className?: string;
}

interface FocusRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

const TrueFocus: React.FC<TrueFocusProps> = ({
  sentence = 'True Focus',
  manualMode = false,
  blurAmount = 2,
  borderColor = '#22c55e',
  glowColor = 'rgba(34, 197, 94, 0.6)',
  animationDuration = 0.6,
  pauseBetweenAnimations = 2,
  className = ''
}) => {
  const words = sentence.split(' ');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wordRefs: React.MutableRefObject<(HTMLSpanElement | null)[]> = useRef([]);
  const [focusRect, setFocusRect] = useState<FocusRect>({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });

  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(
        () => {
          setCurrentIndex(prev => (prev + 1) % words.length);
        },
        (animationDuration + pauseBetweenAnimations) * 1000
      );

      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    if (currentIndex === null || currentIndex === -1) return;

    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex]!.getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height
    });
  }, [currentIndex, words.length]);

  const handleMouseEnter = (index: number) => {
    if (manualMode) {
      setLastActiveIndex(index);
      setCurrentIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (manualMode) {
      setCurrentIndex(lastActiveIndex ?? 0);
    }
  };

  return (
    <div 
      className={`relative inline-block overflow-hidden ${className}`} 
      ref={containerRef}
      role="banner"
      style={{ minHeight: '1.5rem' }}
    >
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={index}
            ref={el => {
              if (el) {
                wordRefs.current[index] = el;
              }
            }}
            className={`inline-block transition-all duration-500 relative z-10 ${
              manualMode ? 'cursor-pointer' : ''
            } ${
              index > 0 ? 'ml-2' : ''
            }`}
            style={{
              filter: isActive ? `blur(0px)` : `blur(${blurAmount}px)`,
              transition: `filter ${animationDuration}s ease`,
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {word}
          </span>
        );
      })}

      {currentIndex >= 0 && (
        <motion.div
          className="absolute pointer-events-none z-0"
          animate={{
            x: focusRect.x - 2,
            y: focusRect.y - 1,
            width: focusRect.width + 4,
            height: focusRect.height + 2,
            opacity: 1
          }}
          transition={{
            duration: animationDuration,
            ease: "easeInOut"
          }}
          style={{
            border: `1px solid ${borderColor}`,
            borderRadius: '4px',
            boxShadow: `0 0 4px ${glowColor}`,
          }}
        />
      )}
    </div>
  );
};

export default TrueFocus;
