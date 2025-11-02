'use client';

import { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';

interface HolofoilCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
}

export default function HolofoilCard({
  children,
  className = '',
  hoverEffect = true,
  onClick,
}: HolofoilCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`
        relative
        rounded-lg
        p-6
        overflow-hidden
        ${hoverEffect ? 'cursor-pointer' : ''}
        transition-all duration-300
        ${className}
      `}
      style={{
        background: `
          radial-gradient(at 70% 30%, rgba(255, 255, 255, 0.03), transparent 70%),
          radial-gradient(at 30% 70%, rgba(0, 255, 238, 0.02), transparent 70%),
          rgba(10, 0, 26, 0.5)
        `,
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(0, 255, 238, 0.1)',
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={hoverEffect ? {
        borderColor: 'rgba(0, 255, 238, 0.5)',
        boxShadow: '0 0 20px rgba(0, 255, 238, 0.2)',
      } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      onClick={onClick}
    >
      {/* Glowing corner brackets - Top Left */}
      {hoverEffect && (
        <>
          <motion.div
            className="absolute top-0 left-0 w-10 h-10 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-z-glow" 
              style={{ boxShadow: '0 0 8px rgba(0, 255, 238, 0.6)' }} />
          </motion.div>
          
          {/* Top Right */}
          <motion.div
            className="absolute top-0 right-0 w-10 h-10 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-z-glow"
              style={{ boxShadow: '0 0 8px rgba(0, 255, 238, 0.6)' }} />
          </motion.div>
          
          {/* Bottom Left */}
          <motion.div
            className="absolute bottom-0 left-0 w-10 h-10 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-z-glow"
              style={{ boxShadow: '0 0 8px rgba(0, 255, 238, 0.6)' }} />
          </motion.div>
          
          {/* Bottom Right */}
          <motion.div
            className="absolute bottom-0 right-0 w-10 h-10 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-z-glow"
              style={{ boxShadow: '0 0 8px rgba(0, 255, 238, 0.6)' }} />
          </motion.div>
        </>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Subtle inner glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 238, 0.1), transparent 70%)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
