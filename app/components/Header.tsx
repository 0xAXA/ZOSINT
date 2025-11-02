'use client';

import { motion } from 'framer-motion';
import { User, List } from 'lucide-react';
import HolofoilCard from './ui/HolofoilCard';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-void/80 border-b border-z-glow/10"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="text-3xl font-bold text-z-glow tracking-tight"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          ZOSINT
        </motion.div>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-6">
          {['Industries', 'Products', 'Pricing', 'Resources'].map((link, idx) => (
            <motion.a
              key={link}
              href="#"
              className="text-text-muted hover:text-z-glow transition-colors"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx, duration: 0.3 }}
              whileHover={{ scale: 1.1 }}
            >
              {link}
            </motion.a>
          ))}
        </nav>

        {/* Right Side Buttons */}
        <div className="flex gap-3">
          <motion.button
            className="px-4 py-2 text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HolofoilCard hoverEffect={true} className="p-2">
              <div className="flex items-center gap-2 text-text-primary">
                <User size={16} className="text-z-glow" />
                <span className="text-xs">Account</span>
              </div>
            </HolofoilCard>
          </motion.button>
          
          <motion.button
            className="px-4 py-2 text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HolofoilCard hoverEffect={true} className="p-2">
              <div className="flex items-center gap-2 text-text-primary">
                <List size={16} className="text-z-glow" />
                <span className="text-xs">Combo List</span>
              </div>
            </HolofoilCard>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}
