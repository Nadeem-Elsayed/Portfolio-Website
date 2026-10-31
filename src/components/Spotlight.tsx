import React, { useEffect, useState } from 'react';

export const Spotlight: React.FC = () => {
  const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      setCoords(null);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!coords) return null;

  return (
    <div
      className="spotlight-overlay"
      style={{
        background: `radial-gradient(700px circle at ${coords.x}px ${coords.y}px, rgba(14, 165, 233, 0.12), transparent 80%)`,
      }}
      aria-hidden="true"
    />
  );
};

