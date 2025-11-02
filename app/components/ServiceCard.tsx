'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import HolofoilCard from './ui/HolofoilCard';

interface ServiceData {
  [key: string]: any;
}

interface ServiceCardProps {
  platform: string;
  status: string;
  data: ServiceData;
  delay?: number;
}

export default function ServiceCard({ platform, status, data, delay = 0 }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
    >
      <HolofoilCard hoverEffect={true}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-z-glow/10 flex items-center justify-center">
              <span className="text-z-glow font-bold text-sm">
                {platform.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h4 className="font-semibold text-text-primary">{platform}</h4>
              <span
                className={`text-xs px-2 py-0.5 rounded ${
                  status === 'Found'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                    : 'bg-text-muted/20 text-text-muted border border-text-muted/50'
                }`}
              >
                {status}
              </span>
            </div>
          </div>

          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight
              className={`text-z-glow transition-transform ${isExpanded ? 'rotate-90' : ''}`}
              size={20}
            />
          </motion.button>
        </div>

        {status === 'Found' && Object.keys(data).length > 0 && (
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="space-y-2 pt-4 border-t border-z-glow/10">
              {Object.entries(data).slice(0, isExpanded ? undefined : 2).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="text-sm text-text-muted capitalize">{key}:</span>
                  <span className="text-sm text-text-primary font-mono">{String(value)}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </HolofoilCard>
    </motion.div>
  );
}
