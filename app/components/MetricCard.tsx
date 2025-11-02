'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import HolofoilCard from './ui/HolofoilCard';

interface MetricCardProps {
  title: string;
  value: string | number;
  delay?: number;
}

function AnimatedNumber({ value, delay = 0 }: { value: number; delay?: number }) {
  const spring = useSpring(0, { stiffness: 100, damping: 30 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      spring.set(value);
    }, delay * 100);

    const unsubscribe = spring.on('change', (latest) => {
      setDisplay(Math.floor(latest));
    });

    return () => {
      clearTimeout(timer);
      unsubscribe();
    };
  }, [value, delay, spring]);

  return <span>{display}</span>;
}

export default function MetricCard({ title, value, delay = 0 }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <HolofoilCard hoverEffect={true}>
        <h3 className="text-sm text-text-muted mb-2">{title}</h3>
        <div className="text-3xl font-bold text-z-glow font-mono">
          {typeof value === 'number' ? (
            <AnimatedNumber value={value} delay={delay} />
          ) : (
            value
          )}
        </div>
      </HolofoilCard>
    </motion.div>
  );
}
