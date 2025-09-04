'use client';

import { cn } from '@/lib/utils';

interface ProgressiveBlurProps {
  className?: string;
  direction: 'left' | 'right';
  blurIntensity?: number;
}

export function ProgressiveBlur({
  className,
  direction,
  blurIntensity = 1,
}: ProgressiveBlurProps) {
  const gradientDirection = direction === 'left' ? 'to right' : 'to left';
  
  return (
    <div
      className={cn(
        'bg-gradient-to-r from-black via-black/50 to-transparent',
        direction === 'right' && 'bg-gradient-to-l from-black via-black/50 to-transparent',
        className
      )}
      style={{
        background: direction === 'left' 
          ? `linear-gradient(to right, black 0%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.4) 60%, transparent 100%)`
          : `linear-gradient(to left, black 0%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.4) 60%, transparent 100%)`,
      }}
    />
  );
}
