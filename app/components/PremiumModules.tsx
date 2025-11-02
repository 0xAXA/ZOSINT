'use client';

import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import HolofoilCard from './ui/HolofoilCard';

export default function PremiumModules({ available = 3 }: { available?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <HolofoilCard className="relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-1">
              Premium Modules Available
            </h3>
            <p className="text-sm text-text-muted">
              Unlock advanced OSINT capabilities
            </p>
          </div>
          
          <motion.button
            className="px-6 py-3 rounded-lg font-semibold text-white relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #DA00FF 0%, #8B00CC 100%)',
              boxShadow: '0 0 20px rgba(218, 0, 255, 0.5)',
            }}
            animate={{
              boxShadow: [
                '0 0 20px rgba(218, 0, 255, 0.5)',
                '0 0 40px rgba(218, 0, 255, 0.8)',
                '0 0 20px rgba(218, 0, 255, 0.5)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Zap size={18} />
              Run Premium Modules ({available} credits)
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </motion.button>
        </div>
      </HolofoilCard>
    </motion.div>
  );
}
