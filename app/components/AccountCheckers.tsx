'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Grid, List } from 'lucide-react';
import HolofoilCard from './ui/HolofoilCard';

interface Category {
  name: string;
  platforms: string[];
}

interface AccountCheckersProps {
  categories: Category[];
  allPlatforms: string[];
}

export default function AccountCheckers({
  categories,
  allPlatforms,
}: AccountCheckersProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <HolofoilCard>
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2"
          >
            <h3 className="text-xl font-semibold text-text-primary">Account Checkers</h3>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="text-z-glow" size={20} />
            </motion.div>
          </button>

          <div className="flex gap-2 p-1 rounded-lg bg-void/50 border border-z-glow/20">
            <motion.button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${
                viewMode === 'grid'
                  ? 'bg-z-glow/20 text-z-glow'
                  : 'text-text-muted hover:text-z-glow'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Grid size={16} />
            </motion.button>
            <motion.button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${
                viewMode === 'list'
                  ? 'bg-z-glow/20 text-z-glow'
                  : 'text-text-muted hover:text-z-glow'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <List size={16} />
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {categories.map((category, idx) => (
                    <motion.div
                      key={category.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <HolofoilCard hoverEffect={true} className="p-4 text-center">
                        <h4 className="font-semibold text-text-primary mb-2">
                          {category.name}
                        </h4>
                        <p className="text-xs text-text-muted">
                          {category.platforms.length} platforms
                        </p>
                      </HolofoilCard>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="space-y-2">
                  {allPlatforms.map((platform, idx) => (
                    <motion.div
                      key={platform}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.02 }}
                      className="p-3 rounded-lg bg-void/30 border border-z-glow/10 hover:border-z-glow/30 transition-colors"
                    >
                      <span className="text-text-primary">{platform}</span>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </HolofoilCard>
    </motion.div>
  );
}
