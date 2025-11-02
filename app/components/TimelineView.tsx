'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, AlertCircle } from 'lucide-react';
import HolofoilCard from './ui/HolofoilCard';

interface TimelineEvent {
  platform: string;
  description: string;
  timestamp: string;
  status: 'active' | 'breached';
}

interface TimelineViewProps {
  events: TimelineEvent[];
}

export default function TimelineView({ events }: TimelineViewProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <HolofoilCard>
        {/* Header */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between mb-4"
        >
          <h3 className="text-xl font-semibold text-text-primary">Timeline View</h3>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="text-z-glow" size={24} />
          </motion.div>
        </button>

        {/* Timeline Graph */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {/* Timeline Line */}
              <div className="relative mb-8">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-z-glow/30" />
                <div className="space-y-8">
                  {sortedEvents.map((event, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="relative flex items-start gap-4 pl-12"
                    >
                      {/* Dot */}
                      <div className="absolute left-3 top-1">
                        <motion.div
                          className={`w-3 h-3 rounded-full ${
                            event.status === 'breached'
                              ? 'bg-data-breached'
                              : 'bg-z-glow'
                          }`}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [1, 0.7, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                          style={{
                            boxShadow: `0 0 10px ${
                              event.status === 'breached'
                                ? 'rgba(255, 69, 69, 0.8)'
                                : 'rgba(0, 255, 238, 0.8)'
                            }`,
                          }}
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-text-primary">
                            {event.platform}
                          </span>
                          {event.status === 'breached' && (
                            <span className="px-2 py-0.5 text-xs rounded bg-data-breached/20 text-data-breached border border-data-breached/50">
                              BREACHED
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-text-muted mb-1">{event.description}</p>
                        <p className="text-xs text-text-muted font-mono">
                          {new Date(event.timestamp).toLocaleString()}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Timeline Table */}
              <div className="mt-8 overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-z-glow/20">
                      <th className="pb-2 text-sm text-text-muted font-semibold">Platform</th>
                      <th className="pb-2 text-sm text-text-muted font-semibold">Description</th>
                      <th className="pb-2 text-sm text-text-muted font-semibold font-mono">
                        Timestamp
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedEvents.map((event, idx) => (
                      <motion.tr
                        key={idx}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="border-b border-z-glow/10 hover:bg-z-glow/5"
                      >
                        <td className="py-3 text-text-primary">{event.platform}</td>
                        <td className="py-3 text-text-muted text-sm">{event.description}</td>
                        <td className="py-3 text-text-muted text-sm font-mono">
                          {new Date(event.timestamp).toLocaleString()}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </HolofoilCard>
    </motion.div>
  );
}
