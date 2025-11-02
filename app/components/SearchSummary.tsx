'use client';

import { motion } from 'framer-motion';
import { FileText, Download, FileSpreadsheet, FileCode } from 'lucide-react';
import { useState } from 'react';
import HolofoilCard from './ui/HolofoilCard';

interface SearchSummaryProps {
  query: string;
}

export default function SearchSummary({ query }: SearchSummaryProps) {
  const [hoveredExport, setHoveredExport] = useState<string | null>(null);

  const exportButtons = [
    { icon: FileText, label: 'PDF', format: 'pdf' },
    { icon: FileSpreadsheet, label: 'CSV', format: 'csv' },
    { icon: FileText, label: 'DOCX', format: 'docx' },
    { icon: FileCode, label: 'JSON', format: 'json' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <p className="text-text-muted text-sm mb-1">Results for:</p>
          <h2 className="text-2xl font-bold text-text-primary font-mono">{query}</h2>
        </div>

        <div className="flex gap-2">
          {exportButtons.map((btn) => {
            const Icon = btn.icon;
            return (
              <motion.button
                key={btn.format}
                className="relative"
                onHoverStart={() => setHoveredExport(btn.format)}
                onHoverEnd={() => setHoveredExport(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <HolofoilCard className="p-3" hoverEffect={true}>
                  <Icon
                    size={20}
                    className={`transition-colors ${
                      hoveredExport === btn.format ? 'text-z-glow' : 'text-text-muted'
                    }`}
                  />
                </HolofoilCard>
                
                {hoveredExport === btn.format && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 z-50"
                  >
                    <HolofoilCard className="px-3 py-2 text-xs whitespace-nowrap">
                      <span className="text-text-primary">{btn.label}</span>
                    </HolofoilCard>
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
