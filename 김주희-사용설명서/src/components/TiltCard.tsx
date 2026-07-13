import React, { useRef, useState, MouseEvent } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  id?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = "",
  intensity = 15,
  id,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Mouse coordinates relative to the card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation angles
    // Centered around 0 (-0.5 to 0.5)
    const normalizedX = (x / rect.width) - 0.5;
    const normalizedY = (y / rect.height) - 0.5;
    
    // Rotate Y (horizontal mouse moves vertical axis rotate)
    // Rotate X (vertical mouse moves horizontal axis rotate)
    setRotateY(normalizedX * intensity);
    setRotateX(-normalizedY * intensity);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      id={id}
      ref={cardRef}
      className={`relative transition-all duration-300 ease-out preserve-3d cursor-pointer ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        boxShadow: isHovered
          ? "0 20px 40px rgba(0, 0, 0, 0.08)"
          : "0 4px 20px rgba(0, 0, 0, 0.02)",
      }}
    >
      {/* Glossy Reflection Highlight Overlay */}
      <div
        className="absolute inset-0 pointer-events-none rounded-3xl transition-opacity duration-300 overflow-hidden"
        style={{
          opacity: isHovered ? 0.15 : 0,
          background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.8) 0%, transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
};
