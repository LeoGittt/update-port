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
          'pointer-events-none absolute inset-[-3px] rounded-full',
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
            transparent 75%, 
            rgba(34, 197, 94, 0.4) 82%, 
            rgba(34, 197, 94, 0.8) 88%, 
            rgba(34, 197, 94, 0.9) 90%, 
            rgba(34, 197, 94, 0.8) 92%, 
            rgba(34, 197, 94, 0.4) 96%, 
            transparent 100%
          )`,
          padding: '3px',
          filter: 'blur(0.5px)',
          animation: 'spin 8s linear infinite',
          boxShadow: '0 0 20px rgba(34, 197, 94, 0.25), inset 0 0 15px rgba(34, 197, 94, 0.08)',
        } as CSSProperties}
      >
        <div className="w-full h-full rounded-full bg-zinc-900/95 backdrop-blur-sm"></div>
      </div>
      
      {/* Segundo anillo para efecto más rico */}
      <div
        className={cn(
          'pointer-events-none absolute inset-[-1px] rounded-full',
          className
        )}
        style={{
          animationDuration: `${duration * 1.8}s`,
          animationDirection: 'reverse',
          background: `conic-gradient(
            from 180deg, 
            transparent 0%, 
            transparent 85%, 
            rgba(34, 197, 94, 0.2) 90%, 
            rgba(34, 197, 94, 0.4) 92%, 
            rgba(34, 197, 94, 0.2) 94%, 
            transparent 100%
          )`,
          padding: '1px',
          animation: 'spin 14s linear infinite reverse',
          opacity: 0.6,
        } as CSSProperties}
      >
        <div className="w-full h-full rounded-full bg-transparent"></div>
      </div>
    </>
  );
}
