'use client';

import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface InfiniteSliderProps {
  children: ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  className?: string;
  reverse?: boolean;
}

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  className,
  reverse = false,
}: InfiniteSliderProps) {
  return (
    <div
      className={cn(
        'group relative flex overflow-hidden p-2 [--gap:16px] [--duration:25s]',
        className
      )}
      style={{
        '--gap': `${gap}px`,
        '--duration': `${duration}s`,
      } as React.CSSProperties}
    >
      <div
        className={cn(
          'flex w-max animate-slide items-center justify-center gap-[--gap]',
          reverse && '[animation-direction:reverse]',
          durationOnHover && 'group-hover:[animation-play-state:paused]'
        )}
        style={{
          '--duration-on-hover': `${durationOnHover}s`,
        } as React.CSSProperties}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
