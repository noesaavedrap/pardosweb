'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.2 }}
          className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-red-500/10 flex items-center justify-center"
        >
          <AlertTriangle className="w-10 h-10 text-red-500" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-white mb-4"
        >
          Algo salió mal
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-white/60 mb-8"
        >
          Ha ocurrido un error inesperado. Por favor, intenta de nuevo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={reset}
            className="btn-gold flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Intentar de nuevo
          </button>

          <button
            onClick={() => (window.location.href = '/')}
            className="btn-outline flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            Volver al inicio
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
