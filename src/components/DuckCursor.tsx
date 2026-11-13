import React, { useEffect, useState, useRef } from 'react';

interface ClickRipple {
  id: number;
  x: number;
  y: number;
}

export const DuckCursor: React.FC = () => {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [tilt, setTilt] = useState(0);
  const [ripples, setRipples] = useState<ClickRipple[]>([]);
  const rippleIdRef = useRef(0);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
      return;
    }

    let prevX = 0;
    let tiltTimeout: ReturnType<typeof setTimeout>;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const deltaX = e.clientX - prevX;
      prevX = e.clientX;

      // Subtle swimming tilt based on mouse velocity
      const targetTilt = Math.max(-18, Math.min(18, deltaX * 1.2));
      setTilt(targetTilt);

      clearTimeout(tiltTimeout);
      tiltTimeout = setTimeout(() => {
        setTilt(0);
      }, 120);
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsMouseDown(true);
      // Generate a guaranteed unique ripple ID
      const newId = ++rippleIdRef.current;
      setRipples((prev) => [...prev.slice(-5), { id: newId, x: e.clientX, y: e.clientY }]);
    };

    const handleMouseUp = () => {
      setIsMouseDown(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      clearTimeout(tiltTimeout);
    };
  }, []);

  const handleRippleEnd = (id: number) => {
    setRipples((prev) => prev.filter((r) => r.id !== id));
  };

  if (!pos || !isVisible) return null;

  return (
    <>
      {/* Click ripples: One-shot pop that automatically unmounts on animation end */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="fixed pointer-events-none z-[99] rounded-full border border-cyan-400/80 ripple-effect shadow-[0_0_8px_rgba(56,189,248,0.4)]"
          style={{
            left: ripple.x - 14,
            top: ripple.y - 14,
            width: 28,
            height: 28,
          }}
          onAnimationEnd={() => handleRippleEnd(ripple.id)}
        />
      ))}

      {/* Rubber Ducky Cursor */}
      <div
        className="fixed pointer-events-none z-[100] transition-transform duration-150 ease-out will-change-transform"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-35%, -35%) rotate(${tilt}deg) scale(${isMouseDown ? 1.55 : 1})`,
        }}
        aria-hidden="true"
      >
        <img
          src="/rubber_ducky.png"
          alt="Rubber Duck Cursor"
          className="w-9 h-9 sm:w-10 sm:h-10 object-contain drop-shadow-[0_4px_10px_rgba(250,204,21,0.35)] select-none"
          draggable={false}
        />
      </div>
    </>
  );
};
