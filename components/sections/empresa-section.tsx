'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Package, Zap, Truck } from 'lucide-react';

const metricData = [
  { target: 1000, display: '+1000', label: 'Clientes', description: 'Satisfechos', icon: Users },
  { target: 50, display: '+50', label: 'Productos', description: 'En catálogo', icon: Package },
  { target: 24, display: '24/7', label: 'Atención', description: 'Continua', icon: Zap },
  { target: 0, display: 'Rápida', label: 'Entrega', description: 'Nacional', icon: Truck },
];

function MetricCard({ target, display, label, description, icon: Icon, delay }: {
  target: number;
  display: string;
  label: string;
  description: string;
  icon: React.ElementType;
  delay: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || target === 0) return;
    let s = 0;
    const step = target / 50;
    const t = setInterval(() => {
      s += step;
      if (s >= target) { setCount(target); clearInterval(t); }
      else setCount(Math.floor(s));
    }, 30);
    return () => clearInterval(t);
  }, [inView, target]);

  const shownValue = target === 0 ? display : (target === 24 ? display : `+${count}`);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="glass-card p-4 rounded-2xl text-center"
    >
      <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-3">
        <Icon className="w-5 h-5 text-gold" />
      </div>
      <div className="text-2xl font-black text-white">{shownValue}</div>
      <div className="text-[11px] text-gold font-semibold mt-0.5">{label}</div>
      <div className="text-[10px] text-white/35 mt-0.5">{description}</div>
    </motion.div>
  );
}

export function EmpresaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="empresa"
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #080808 0%, #0c0c0c 50%, #080808 100%)' }}
    >
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text + Metrics */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-3"
            >
              <span className="text-gold text-xs font-bold tracking-[0.25em] uppercase">NUESTRA EMPRESA</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl md:text-[2.8rem] font-black text-white leading-tight mb-6"
            >
              Pasión por llevar
              <br />
              lo mejor a cada{' '}
              <span className="italic text-gold" style={{ fontFamily: 'Georgia, serif' }}>hogar</span>
              {' '}y negocio.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/50 text-base leading-relaxed mb-8 max-w-md"
            >
              En Pardos Alimentos somos distribuidores comprometidos con la calidad. Llevamos lo mejor de los alimentos directamente a tu hogar o negocio con rapidez y confianza.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              onClick={() => document.querySelector('#productos')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 border border-gold/40 text-gold hover:bg-gold hover:text-[#0a0a0a] text-sm font-bold px-6 py-3 rounded-xl transition-all duration-300 tracking-wide"
            >
              CONOCER NUESTRA HISTORIA
            </motion.button>

            {/* Metrics grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/[0.06]">
              {metricData.map((m, i) => (
                <MetricCard key={i} {...m} delay={0.4 + i * 0.1} />
              ))}
            </div>
          </div>

          {/* Right: Dark truck image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <div
              className="relative rounded-3xl overflow-hidden aspect-[4/3]"
              style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 60px rgba(214,167,88,0.08)' }}
            >
              <img
                src="https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Distribución Pardos"
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0.5) saturate(0.7)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-[#080808]/20 to-transparent" />

              {/* Big P logo overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border-2 border-gold/40 flex items-center justify-center bg-[#0a0a0a]/60 backdrop-blur-sm">
                  <span className="text-5xl font-black text-gold">P</span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-white/40 text-xs uppercase tracking-[0.2em] mb-1">Distribución</div>
                <div className="text-white font-bold text-lg">Cobertura Nacional</div>
              </div>
            </div>

            {/* Floating stat badge */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="absolute -top-4 -right-4 glass-panel px-5 py-3 rounded-2xl"
            >
              <div className="text-2xl font-black text-gold">100%</div>
              <div className="text-white/60 text-xs">Peruana</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
