import React from 'react';

interface KelpConfig {
  id: number;
  src: string;
  leftPct: number; // 0 to 100%
  heightClass: string;
  swayClass: 'kelp-sway-left' | 'kelp-sway-right';
  delay: string;
  scaleX: number;
  zIndex?: number;
}

// 24 background kelps evenly spanning from -2% to 102% of any viewport width
const BACK_KELP_LIST: KelpConfig[] = [
  { id: 1, src: '/kelps/kelp_4.png', leftPct: -2, heightClass: 'h-64 sm:h-80 md:h-96', swayClass: 'kelp-sway-left', delay: '0.2s', scaleX: 1 },
  { id: 2, src: '/kelps/kelp_1.png', leftPct: 2, heightClass: 'h-52 sm:h-68 md:h-80', swayClass: 'kelp-sway-right', delay: '1.4s', scaleX: -1 },
  { id: 3, src: '/kelps/kelp_5.png', leftPct: 7, heightClass: 'h-60 sm:h-76 md:h-88', swayClass: 'kelp-sway-left', delay: '2.8s', scaleX: 1 },
  { id: 4, src: '/kelps/kelp_2.png', leftPct: 11, heightClass: 'h-56 sm:h-72 md:h-84', swayClass: 'kelp-sway-right', delay: '0.8s', scaleX: -1 },
  { id: 5, src: '/kelps/kelp_6.png', leftPct: 16, heightClass: 'h-64 sm:h-80 md:h-96', swayClass: 'kelp-sway-left', delay: '2.1s', scaleX: 1 },
  { id: 6, src: '/kelps/kelp_3.png', leftPct: 20, heightClass: 'h-52 sm:h-68 md:h-80', swayClass: 'kelp-sway-right', delay: '3.3s', scaleX: -1 },
  { id: 7, src: '/kelps/kelp_4.png', leftPct: 25, heightClass: 'h-60 sm:h-76 md:h-92', swayClass: 'kelp-sway-left', delay: '0.5s', scaleX: 1 },
  { id: 8, src: '/kelps/kelp_5.png', leftPct: 29, heightClass: 'h-56 sm:h-72 md:h-84', swayClass: 'kelp-sway-right', delay: '1.9s', scaleX: -1 },
  { id: 9, src: '/kelps/kelp_1.png', leftPct: 34, heightClass: 'h-64 sm:h-80 md:h-96', swayClass: 'kelp-sway-left', delay: '2.5s', scaleX: 1 },
  { id: 10, src: '/kelps/kelp_2.png', leftPct: 39, heightClass: 'h-52 sm:h-68 md:h-80', swayClass: 'kelp-sway-right', delay: '0.9s', scaleX: -1 },
  { id: 11, src: '/kelps/kelp_6.png', leftPct: 43, heightClass: 'h-60 sm:h-76 md:h-92', swayClass: 'kelp-sway-left', delay: '2.0s', scaleX: 1 },
  { id: 12, src: '/kelps/kelp_3.png', leftPct: 48, heightClass: 'h-64 sm:h-80 md:h-96', swayClass: 'kelp-sway-right', delay: '3.1s', scaleX: -1 },
  { id: 13, src: '/kelps/kelp_4.png', leftPct: 52, heightClass: 'h-56 sm:h-72 md:h-84', swayClass: 'kelp-sway-left', delay: '0.3s', scaleX: 1 },
  { id: 14, src: '/kelps/kelp_5.png', leftPct: 57, heightClass: 'h-64 sm:h-80 md:h-96', swayClass: 'kelp-sway-right', delay: '1.6s', scaleX: -1 },
  { id: 15, src: '/kelps/kelp_1.png', leftPct: 61, heightClass: 'h-52 sm:h-68 md:h-80', swayClass: 'kelp-sway-left', delay: '2.7s', scaleX: 1 },
  { id: 16, src: '/kelps/kelp_2.png', leftPct: 66, heightClass: 'h-60 sm:h-76 md:h-92', swayClass: 'kelp-sway-right', delay: '1.1s', scaleX: -1 },
  { id: 17, src: '/kelps/kelp_6.png', leftPct: 70, heightClass: 'h-64 sm:h-80 md:h-96', swayClass: 'kelp-sway-left', delay: '2.4s', scaleX: 1 },
  { id: 18, src: '/kelps/kelp_3.png', leftPct: 75, heightClass: 'h-56 sm:h-72 md:h-84', swayClass: 'kelp-sway-right', delay: '0.7s', scaleX: -1 },
  { id: 19, src: '/kelps/kelp_4.png', leftPct: 80, heightClass: 'h-64 sm:h-80 md:h-96', swayClass: 'kelp-sway-left', delay: '1.8s', scaleX: 1 },
  { id: 20, src: '/kelps/kelp_5.png', leftPct: 84, heightClass: 'h-52 sm:h-68 md:h-80', swayClass: 'kelp-sway-right', delay: '3.0s', scaleX: -1 },
  { id: 21, src: '/kelps/kelp_1.png', leftPct: 89, heightClass: 'h-60 sm:h-76 md:h-92', swayClass: 'kelp-sway-left', delay: '1.3s', scaleX: 1 },
  { id: 22, src: '/kelps/kelp_2.png', leftPct: 93, heightClass: 'h-56 sm:h-72 md:h-84', swayClass: 'kelp-sway-right', delay: '2.6s', scaleX: -1 },
  { id: 23, src: '/kelps/kelp_6.png', leftPct: 98, heightClass: 'h-64 sm:h-80 md:h-96', swayClass: 'kelp-sway-left', delay: '0.4s', scaleX: 1 },
  { id: 24, src: '/kelps/kelp_3.png', leftPct: 102, heightClass: 'h-52 sm:h-68 md:h-80', swayClass: 'kelp-sway-right', delay: '1.7s', scaleX: -1 },
];

// 22 foreground kelps evenly spanning from -1% to 101% of any viewport width
const FRONT_KELP_LIST: KelpConfig[] = [
  { id: 1, src: '/kelps/kelp_1.png', leftPct: -1, heightClass: 'h-40 sm:h-52 md:h-64', swayClass: 'kelp-sway-right', delay: '0.1s', scaleX: 1 },
  { id: 2, src: '/kelps/kelp_5.png', leftPct: 4, heightClass: 'h-36 sm:h-48 md:h-56', swayClass: 'kelp-sway-left', delay: '1.5s', scaleX: -1 },
  { id: 3, src: '/kelps/kelp_2.png', leftPct: 9, heightClass: 'h-44 sm:h-56 md:h-68', swayClass: 'kelp-sway-right', delay: '2.7s', scaleX: 1 },
  { id: 4, src: '/kelps/kelp_6.png', leftPct: 14, heightClass: 'h-36 sm:h-44 md:h-52', swayClass: 'kelp-sway-left', delay: '0.6s', scaleX: -1 },
  { id: 5, src: '/kelps/kelp_3.png', leftPct: 19, heightClass: 'h-40 sm:h-52 md:h-60', swayClass: 'kelp-sway-right', delay: '1.8s', scaleX: 1 },
  { id: 6, src: '/kelps/kelp_4.png', leftPct: 24, heightClass: 'h-44 sm:h-56 md:h-68', swayClass: 'kelp-sway-left', delay: '2.9s', scaleX: -1 },
  { id: 7, src: '/kelps/kelp_1.png', leftPct: 29, heightClass: 'h-36 sm:h-48 md:h-56', swayClass: 'kelp-sway-right', delay: '0.8s', scaleX: 1 },
  { id: 8, src: '/kelps/kelp_5.png', leftPct: 34, heightClass: 'h-40 sm:h-52 md:h-64', swayClass: 'kelp-sway-left', delay: '2.1s', scaleX: -1 },
  { id: 9, src: '/kelps/kelp_2.png', leftPct: 39, heightClass: 'h-36 sm:h-44 md:h-52', swayClass: 'kelp-sway-right', delay: '1.2s', scaleX: 1 },
  { id: 10, src: '/kelps/kelp_6.png', leftPct: 44, heightClass: 'h-44 sm:h-56 md:h-68', swayClass: 'kelp-sway-left', delay: '2.5s', scaleX: -1 },
  { id: 11, src: '/kelps/kelp_3.png', leftPct: 49, heightClass: 'h-40 sm:h-52 md:h-60', swayClass: 'kelp-sway-right', delay: '0.4s', scaleX: 1 },
  { id: 12, src: '/kelps/kelp_4.png', leftPct: 54, heightClass: 'h-36 sm:h-48 md:h-56', swayClass: 'kelp-sway-left', delay: '1.7s', scaleX: -1 },
  { id: 13, src: '/kelps/kelp_1.png', leftPct: 59, heightClass: 'h-44 sm:h-56 md:h-68', swayClass: 'kelp-sway-right', delay: '3.0s', scaleX: 1 },
  { id: 14, src: '/kelps/kelp_5.png', leftPct: 64, heightClass: 'h-36 sm:h-44 md:h-52', swayClass: 'kelp-sway-left', delay: '0.9s', scaleX: -1 },
  { id: 15, src: '/kelps/kelp_2.png', leftPct: 69, heightClass: 'h-40 sm:h-52 md:h-64', swayClass: 'kelp-sway-right', delay: '2.2s', scaleX: 1 },
  { id: 16, src: '/kelps/kelp_6.png', leftPct: 74, heightClass: 'h-44 sm:h-56 md:h-68', swayClass: 'kelp-sway-left', delay: '1.3s', scaleX: -1 },
  { id: 17, src: '/kelps/kelp_3.png', leftPct: 79, heightClass: 'h-36 sm:h-48 md:h-56', swayClass: 'kelp-sway-right', delay: '2.6s', scaleX: 1 },
  { id: 18, src: '/kelps/kelp_4.png', leftPct: 84, heightClass: 'h-40 sm:h-52 md:h-60', swayClass: 'kelp-sway-left', delay: '0.7s', scaleX: -1 },
  { id: 19, src: '/kelps/kelp_1.png', leftPct: 89, heightClass: 'h-44 sm:h-56 md:h-68', swayClass: 'kelp-sway-right', delay: '1.9s', scaleX: 1 },
  { id: 20, src: '/kelps/kelp_5.png', leftPct: 93, heightClass: 'h-36 sm:h-44 md:h-52', swayClass: 'kelp-sway-left', delay: '3.1s', scaleX: -1 },
  { id: 21, src: '/kelps/kelp_2.png', leftPct: 97, heightClass: 'h-40 sm:h-52 md:h-64', swayClass: 'kelp-sway-right', delay: '1.0s', scaleX: 1 },
  { id: 22, src: '/kelps/kelp_6.png', leftPct: 101, heightClass: 'h-44 sm:h-56 md:h-68', swayClass: 'kelp-sway-left', delay: '2.3s', scaleX: -1 },
];

export const KelpParallax: React.FC<{ layer: 'back' | 'front' }> = ({ layer }) => {
  if (layer === 'back') {
    // Fainter, taller kelp layer placed behind UI elements (anchored solidly at bottom 0, full width)
    return (
      <div
        className="fixed bottom-0 inset-x-0 w-full pointer-events-none z-0 overflow-hidden h-96 opacity-35"
        style={{
          filter: 'brightness(0.7) blur(0.3px)',
        }}
        aria-hidden="true"
      >
        <div className="relative w-full h-full">
          {BACK_KELP_LIST.map((k) => (
            <div
              key={k.id}
              className={`absolute bottom-0 ${k.swayClass} will-change-transform flex items-end`}
              style={{
                left: `${k.leftPct}%`,
                animationDelay: k.delay,
              }}
            >
              <img
                src={k.src}
                alt=""
                className={`${k.heightClass} w-auto block select-none pointer-events-none`}
                style={{
                  transform: `scaleX(${k.scaleX})`,
                  verticalAlign: 'bottom',
                }}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Foreground kelp layer placed in front of UI elements along the bottom edges across 100% of the screen
  return (
    <div
      className="fixed bottom-0 inset-x-0 w-full pointer-events-none z-30 overflow-hidden h-72 opacity-85"
      style={{
        filter: 'drop-shadow(0 -4px 14px rgba(16, 185, 129, 0.18))',
      }}
      aria-hidden="true"
    >
      <div className="relative w-full h-full">
        {FRONT_KELP_LIST.map((k) => (
          <div
            key={k.id}
            className={`absolute bottom-0 ${k.swayClass} will-change-transform flex items-end`}
            style={{
              left: `${k.leftPct}%`,
              animationDelay: k.delay,
            }}
          >
            <img
              src={k.src}
              alt=""
              className={`${k.heightClass} w-auto block select-none pointer-events-none`}
              style={{
                transform: `scaleX(${k.scaleX})`,
                verticalAlign: 'bottom',
              }}
              draggable={false}
            />
          </div>
        ))}
        {/* Soft bottom grounding gradient to anchor all kelp roots into the seabed */}
        <div className="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-[#06090e] to-transparent pointer-events-none" />
      </div>
    </div>
  );
};
