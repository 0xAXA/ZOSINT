'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Grid, List } from 'lucide-react';
import ServiceCard from './ServiceCard';

interface Service {
  id: string;
  platform: string;
  status: string;
  data: Record<string, any>;
}

interface ResultsGridProps {
  services: Service[];
}

export default function ResultsGrid({ services }: ResultsGridProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      {/* View Toggle */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-text-primary">Results</h3>
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
            <Grid size={20} />
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
            <List size={20} />
          </motion.button>
        </div>
      </div>

      {/* Services Grid/List */}
      <motion.div
        key={viewMode}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={
          viewMode === 'grid'
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
            : 'space-y-4'
        }
      >
        {services.map((service, idx) => (
          <ServiceCard
            key={service.id}
            platform={service.platform}
            status={service.status}
            data={service.data}
            delay={idx * 0.05}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
