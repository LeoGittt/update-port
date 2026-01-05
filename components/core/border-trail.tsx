'use client';

import { cn } from '@/lib/utils';
import { CSSProperties } from 'react';

interface BorderTrailProps {
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
  style?: CSSProperties;
}

export function BorderTrail({
  className,
  size = 60,
  duration = 8,
  delay = 0,
  style,
}: BorderTrailProps) {
  return (
    <>
      <div
        className={cn(
          'pointer-events-none absolute inset-0 rounded-[inherit] z-0',
          className
        )}
        style={{
          ...style,
          animationDuration: `${duration}s`,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          animationDelay: `${delay}s`,
          background: `conic-gradient(
            from 0deg, 
            transparent 0%, 
            transparent 70%, 
            rgba(82, 39, 255, 0.4) 80%, 
            rgba(82, 39, 255, 0.8) 86%, 
            rgba(82, 39, 255, 0.9) 90%, 
            rgba(82, 39, 255, 0.8) 94%, 
            rgba(82, 39, 255, 0.4) 98%, 
            transparent 100%
          )`,
          padding: '1.5px', // Thinner border for elegance
          animation: 'spin 4s linear infinite', 
        } as CSSProperties}
      >
        <div className="w-full h-full rounded-[inherit] bg-black/60 backdrop-blur-xl"></div>
      </div>
      
      {/* Segundo anillo para efecto más rico */}

    </>
  );
}
