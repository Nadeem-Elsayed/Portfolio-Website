import React, { useMemo } from 'react';

interface BubbleData {
  id: number;
  leftPct: number; // percentage matching kelp positions
  size: number; // pixels
  duration: number; // seconds
  delay: string; // negative delay so bubbles are already floating on load
  wobbleClass: 'bubble-wobble-1' | 'bubble-wobble-2';
  opacity: number;
}

export const BubblesBackground: React.FC = () => {
  // Emit bubbles directly from the kelp stalks anchored at the bottom
  const bubbles: BubbleData[] = useMemo(() => {
    // Kelp anchor points across the bottom width
    const kelpPositions = [
      2, 6, 11, 15, 20, 25, 29, 34, 39, 44, 48, 53, 57, 62, 67, 71, 76, 81, 85, 90, 94, 98
    ];

    return Array.from({ length: 22 }, (_, i) => {
      const kelpBase = kelpPositions[i % kelpPositions.length];
      // Slight horizontal jitter around the kelp stalk center (-1.5% to +1.5%)
      const jitter = ((i * 3) % 4) - 1.5;
      const leftPct = Math.max(1, Math.min(99, kelpBase + jitter));
      const duration = Number((9.5 + ((i * 1.8) % 7.5)).toFixed(1)); // 9.5s to 17s
      // Negative delay pre-populates bubbles at various heights when the page opens
      const offsetSeconds = Number(((i * 1.7) % duration).toFixed(1));

      return {
        id: i,
        leftPct,
        size: Math.round(14 + ((i * 5) % 24)), // 14px to 38px
        duration,
        delay: `-${offsetSeconds}s`,
        wobbleClass: i % 2 === 0 ? 'bubble-wobble-1' : 'bubble-wobble-2',
        opacity: Number((0.55 + ((i * 0.04) % 0.35)).toFixed(2)),
      };
    });
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-[6]"
      aria-hidden="true"
    >
      {bubbles.map((b) => (
        <div
          key={b.id}
          className={`absolute bottom-0 will-change-transform ${b.wobbleClass}`}
          style={{
            left: `${b.leftPct}%`,
            width: b.size,
            height: b.size,
            animationDuration: `${b.duration}s`,
            animationDelay: b.delay,
            opacity: b.opacity,
          }}
        >
          <img
            src="/bubble.png"
            alt=""
            className="w-full h-full object-contain select-none"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
};
