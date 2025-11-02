'use client';

import { motion } from 'framer-motion';
import { Download, AlertTriangle } from 'lucide-react';
import HolofoilCard from './ui/HolofoilCard';

interface Breach {
  id: string;
  service: string;
  breachDate: string;
  usersAffected: string;
  dataTypes: string[];
}

interface ProfilePic {
  id: string;
  url: string;
  source: string;
  timestamp: string;
}

interface DataGalleriesProps {
  breaches: Breach[];
  profilePictures: ProfilePic[];
}

export default function DataGalleries({ breaches, profilePictures }: DataGalleriesProps) {
  return (
    <div className="mb-8 space-y-6">
      {/* Breached Accounts Carousel */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-lg font-semibold text-text-primary mb-4">Breached Accounts</h3>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {breaches.map((breach, idx) => (
            <motion.div
              key={breach.id}
              drag="x"
              dragConstraints={{ left: -100, right: 100 }}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <HolofoilCard className="min-w-[300px]">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-data-breached/20">
                    <AlertTriangle className="text-data-breached" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-text-primary mb-1">{breach.service}</h4>
                    <p className="text-xs text-text-muted mb-2">
                      Breached: {new Date(breach.breachDate).toLocaleDateString()}
                    </p>
                    <span className="inline-block px-2 py-1 text-xs rounded bg-data-breached/20 text-data-breached border border-data-breached/50 mb-2">
                      {breach.usersAffected} USERS
                    </span>
                    <div className="mt-2">
                      <p className="text-xs text-text-muted">Data Types:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {breach.dataTypes.map((type, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-0.5 rounded bg-z-glow/10 text-z-glow"
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </HolofoilCard>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Profile Pictures Carousel */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-lg font-semibold text-text-primary mb-4">Profile Pictures</h3>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {profilePictures.map((pic, idx) => (
            <motion.div
              key={pic.id}
              drag="x"
              dragConstraints={{ left: -100, right: 100 }}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <HolofoilCard className="min-w-[200px]">
                <div className="relative">
                  <div className="w-full h-48 bg-z-glow/10 rounded mb-3 flex items-center justify-center">
                    <span className="text-text-muted text-sm">Image Preview</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-text-muted">Source:</p>
                      <p className="text-sm text-text-primary font-semibold">{pic.source}</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded hover:bg-z-glow/10"
                    >
                      <Download className="text-z-glow" size={18} />
                    </motion.button>
                  </div>
                </div>
              </HolofoilCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
