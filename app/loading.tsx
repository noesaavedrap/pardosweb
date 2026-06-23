'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-[100]">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center relative">
            <span className="text-3xl font-bold text-background">PA</span>
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-gold"
              animate={{ scale: [1, 1.5], opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeOut' }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-2"
        >
          <h2 className="text-xl font-bold text-white">PARDOS ALIMENTOS</h2>
          <p className="text-white/50 text-sm">Cargando experiencia premium...</p>
        </motion.div>

        <motion.div
          className="mt-8 w-48 h-1 mx-auto rounded-full bg-white/10 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-gold to-gold-light"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          />
        </motion.div>
      </div>
    </div>
  );
}
