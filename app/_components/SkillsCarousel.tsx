'use client';

import { useEffect, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Button } from './ui/button';

interface TechIcon {
  image: StaticImageData;
  name: string;
}

interface TechCarouselProps {
  icons: TechIcon[];
}

const SPEED = 0.8;

export const TechCarousel = ({ icons }: TechCarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(null);
  const pausedRef = useRef(false);
  const items = [...icons, ...icons, ...icons];
  
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const middle = el.scrollWidth / 3;
    el.scrollLeft = middle;
    const loop = () => {
      if (!pausedRef.current) {
        el.scrollLeft += SPEED;
        if (el.scrollLeft >= middle * 2) {
          el.scrollLeft = middle;
        }
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const scrollByOneIcon = (direction: 'left' | 'right') => {
    const el = containerRef.current;
    const item = itemRef.current;
    if (!el || !item) return;
    
    const iconWidth = item.offsetWidth + 24; // width + gap
    const middle = el.scrollWidth / 3;
    
    if (direction === 'left') {
      el.scrollLeft -= iconWidth;
      if (el.scrollLeft < middle) {
        el.scrollLeft = middle * 2 - iconWidth;
      }
    } else {
      el.scrollLeft += iconWidth;
      if (el.scrollLeft >= middle * 2) {
        el.scrollLeft = middle + iconWidth;
      }
    }
  };

  return (
    <div className="relative w-full py-4 overflow-hidden">
      <div className="relative group">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l to-transparent z-10 pointer-events-none" />
        <Button
          onClick={() => scrollByOneIcon('left')}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20
                     w-10 h-10 rounded-full
                     bg-gray-900/80 border border-white/20
                     hover:bg-gray-800 hover:border-purple-400/40
                     transition flex items-center justify-center
                     opacity-0 group-hover:opacity-100 hover:cursor-pointer"
          aria-label="Anterior"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Button>

        <Button
          onClick={() => scrollByOneIcon('right')}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20
                     w-10 h-10 rounded-full
                     bg-gray-900/80 border border-white/20
                     hover:bg-gray-800 hover:border-purple-400/40
                     transition flex items-center justify-center
                     opacity-0 group-hover:opacity-100 hover:cursor-pointer"
          aria-label="Próximo"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
        
        <div
          ref={containerRef}
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
          className="flex gap-6 overflow-hidden px-20"
        >
          {items.map((icon, i) => (
            <div
              key={`${icon.name}-${i}`}
              ref={i === 0 ? itemRef : undefined}
              className="shrink-0"
              title={icon.name}
            >
              <div
                className="flex items-center justify-center
                           w-14 h-14 rounded-xl
                           bg-gray-900/60
                           border border-white/10
                           hover:border-purple-400/40
                           hover:scale-[1.08]
                           transition"
              >
                <Image
                  src={icon.image}
                  alt={icon.name}
                  width={26}
                  height={26}
                  className="object-contain opacity-90"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};