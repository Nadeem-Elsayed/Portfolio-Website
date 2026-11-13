import React, { useMemo } from 'react';

interface BubbleData {
  id: number;
  leftPct: number; // percentage matching kelp positions
  size: number; // pixels
  duration: number; // vertical rise duration (seconds)
  delay: string; // pre-populated negative delay
  swayDuration: number; // horizontal oscillation period (seconds)
  swayDelay: number; // phase offset (seconds)
  swayDistance: number; // horizontal amplitude (pixels)
  opacity: number; // transparent for small/far, opaque for large/close
  blur?: string; // soft atmospheric depth for distant bubbles
}

export const BubblesBackground: React.FC = () => {
  // Emit bubbles directly from the kelp stalks anchored at the bottom
  const bubbles: BubbleData[] = useMemo(() => {
    // Kelp anchor points across the bottom width
    const kelpPositions = [
      2, 6, 11, 15, 20, 25, 29, 34, 39, 44, 48, 53, 57, 62, 67, 71, 76, 81, 85, 90, 94, 98
    ];

    const minSize = 12;
    const maxSize = 38;

    return Array.from({ length: 24 }, (_, i) => {
      const kelpBase = kelpPositions[i % kelpPositions.length];
      const jitter = ((i * 3) % 4) - 1.5;
      const leftPct = Math.max(1, Math.min(99, kelpBase + jitter));

      // Deterministic size spread (12px to 38px)
      const size = Math.round(minSize + ((i * 7) % (maxSize - minSize + 1)));
      // Normalized depth factor: 0.0 (deep background / small) to 1.0 (foreground / large)
      const depth = (size - minSize) / (maxSize - minSize);

      // Smaller bubbles are made more transparent (0.26 - 0.38) so they recede into the distance,
      // while larger bubbles in the foreground are more prominent (0.80 - 0.90)
      const opacity = Number((0.26 + depth * 0.62).toFixed(2));

      // Smaller bubbles have smaller sway amplitude and slightly slower rise in deep water
      const swayDistance = Math.round(10 + depth * 14); // 10px to 24px
      const swayDuration = Number((2.0 + ((i * 0.35) % 1.6)).toFixed(2)); // 2.0s to 3.6s
      const swayDelay = Number(((i * 0.7) % 3).toFixed(2));
      const duration = Number((14.0 - depth * 4.5 + ((i * 1.3) % 2.5)).toFixed(1)); // 9.5s to 16.5s
      const offsetSeconds = Number(((i * 1.9) % duration).toFixed(1));

      return {
        id: i,
        leftPct,
        size,
        duration,
        delay: `-${offsetSeconds}s`,
        swayDuration,
        swayDelay,
        swayDistance,
        opacity,
        blur: depth < 0.3 ? 'blur(0.4px)' : undefined,
      };
    });
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-[6]"
      aria-hidden="true"
    >
      {bubbles.map((b) => (
        /* Outer container: Pure vertical ascent (accelerates out from kelp, then steady linear rise) */
        <div
          key={b.id}
          className="absolute bottom-0 will-change-transform bubble-vertical"
          style={{
            left: `${b.leftPct}%`,
            width: b.size,
            height: b.size,
            animationDuration: `${b.duration}s`,
            animationDelay: b.delay,
            opacity: b.opacity,
            filter: b.blur,
          }}
        >
          {/* Inner container: Pure horizontal sinusoidal oscillation (smooth continuous wave) */}
          <div
            className="w-full h-full will-change-transform bubble-sway"
            style={{
              animationDuration: `${b.swayDuration}s`,
              animationDelay: `-${b.swayDelay}s`,
              ['--sway-min' as string]: `-${b.swayDistance}px`,
              ['--sway-max' as string]: `${b.swayDistance}px`,
            }}
          >
            <img
              src="/bubble.png"
              alt=""
              className="w-full h-full object-contain select-none"
              draggable={false}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
