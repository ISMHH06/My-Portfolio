import type { ReactNode } from 'react';
import { useRef } from 'react';

type MagnetProps = {
  children: ReactNode;
  className?: string;
  padding?: number;
  strength?: number;
};

export function Magnet({ children, className, padding = 150, strength = 3 }: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(event: React.MouseEvent<HTMLDivElement>) {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = event.clientX - centerX;
    const distanceY = event.clientY - centerY;

    if (Math.abs(distanceX) > rect.width / 2 + padding || Math.abs(distanceY) > rect.height / 2 + padding) {
      return;
    }

    element.style.transition = 'transform 0.3s ease-out';
    element.style.transform = `translate3d(${distanceX / strength}px, ${distanceY / strength}px, 0)`;
  }

  function handleLeave() {
    const element = ref.current;
    if (!element) return;

    element.style.transition = 'transform 0.6s ease-in-out';
    element.style.transform = 'translate3d(0, 0, 0)';
  }

  return (
    <div ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
}
