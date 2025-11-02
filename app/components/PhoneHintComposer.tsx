'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Phone } from 'lucide-react';
import HolofoilCard from './ui/HolofoilCard';

interface PhoneHintComposerProps {
  possibleNumbers?: string[];
  carriers?: string[];
  locations?: string[];
}

export default function PhoneHintComposer({
  possibleNumbers = [],
  carriers = [],
  locations = [],
}: PhoneHintComposerProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [phoneInput, setPhoneInput] = useState('');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <HolofoilCard>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between mb-4"
        >
          <div className="flex items-center gap-2">
            <Phone className="text-z-glow" size={20} />
            <h3 className="text-xl font-semibold text-text-primary">Phone Hint Composer</h3>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="text-z-glow" size={24} />
          </motion.div>
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden space-y-4"
            >
              <div>
                <label className="block text-sm text-text-muted mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={phoneInput}
                  onChange={(e) => setPhoneInput(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-void/50 border border-z-glow/20 focus:border-z-glow focus:outline-none focus:ring-2 focus:ring-z-glow/20 text-text-primary font-mono"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              {possibleNumbers.length > 0 && (
                <div>
                  <p className="text-sm text-text-muted mb-2">Possible Numbers:</p>
                  <div className="flex flex-wrap gap-2">
                    {possibleNumbers.map((num, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded bg-z-glow/10 text-z-glow text-sm font-mono"
                      >
                        {num}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                {carriers.length > 0 && (
                  <div>
                    <p className="text-sm text-text-muted mb-2">Carriers:</p>
                    <div className="flex flex-wrap gap-2">
                      {carriers.map((carrier, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded bg-z-glow/10 text-z-glow text-sm"
                        >
                          {carrier}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {locations.length > 0 && (
                  <div>
                    <p className="text-sm text-text-muted mb-2">Locations:</p>
                    <div className="flex flex-wrap gap-2">
                      {locations.map((loc, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded bg-z-glow/10 text-z-glow text-sm"
                        >
                          {loc}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </HolofoilCard>
    </motion.div>
  );
}
