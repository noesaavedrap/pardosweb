'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Star } from 'lucide-react';
import Link from 'next/link';

const words = ['transforma', 'eleva', 'conecta', 'inspira'];

const products = [
  {
    label: 'CHIFLES',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
    color: '#F4C542',
    top: '8%', left: '52%', size: 'w-40 md:w-52',
    rotate: '-7deg', delay: 0.2, z: 20,
  },
  {
    label: 'PAPITAS',
    image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=500',
    color: '#E85D04',
    top: '2%', left: '72%', size: 'w-32 md:w-44',
    rotate: '8deg', delay: 0.35, z: 10,
  },
  {
    label: 'LICORES',
    image: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=500',
    color: '#C9A227',
    top: '45%', left: '63%', size: 'w-20 md:w-28',
    rotate: '-5deg', delay: 0.5, z: 20,
  },
  {
    label: 'ALFAJORES',
    image: 'https://images.pexels.com/photos/6210870/pexels-photo-6210870.jpeg?auto=compress&cs=tinysrgb&w=500',
    color: '#D4813A',
    top: '58%', left: '50%', size: 'w-36 md:w-44',
    rotate: '10deg', delay: 0.45, z: 10,
  },
];

const ticker = ['CHIFLES', 'PAPITAS', 'BEBIDAS', 'LICORES', 'ALFAJORES', 'MARCIANOS', 'DISTRIBUCIÓN', 'CALIDAD PREMIUM'];

export function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const id = setInterval(() => setWordIndex(i => (i + 1) % words.length), 2400);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 24,
        y: (e.clientY / window.innerHeight - 0.5) * 12,
      });
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);


  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: '#080808' }}
    >
      {/* Background radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y, background: 'radial-gradient(circle, rgba(214,167,88,0.10) 0%, transparent 70%)' }}
          className="absolute top-[-10%] right-[20%] w-[700px] h-[700px] rounded-full"
        />
        <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(168,217,107,0.04) 0%, transparent 70%)' }} />
      </div>

      {/* Grid lines subtle */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Main content */}
      <motion.div style={{ opacity }} className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full pt-28 pb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-7rem)]">

            {/* Left */}
            <div className="flex flex-col justify-center">
              {/* Trust badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="flex -space-x-2">
                  {['https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=80',
                    'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=80',
                    'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=80',
                  ].map((src, i) => (
                    <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 border-[#080808] object-cover" />
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 mb-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-gold text-gold" />)}
                  </div>
                  <div className="text-white/45 text-xs">+1000 clientes satisfechos</div>
                </div>
              </motion.div>

              {/* Headline */}
              <div className="overflow-hidden mb-2">
                <motion.div
                  initial={{ y: 80 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="text-xs font-bold tracking-[0.3em] text-gold/80 uppercase"
                >
                  Bienvenidos a Pardos Alimentos
                </motion.div>
              </div>

              <h1 className="text-[3rem] md:text-[3.8rem] lg:text-[4.2rem] font-black leading-[1.0] text-white tracking-tight mb-2">
                {['Calidad', 'que'].map((word, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.span
                      className="block"
                      initial={{ y: 80 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.8, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {word}
                    </motion.span>
                  </div>
                ))}
                <div className="overflow-hidden">
                  <motion.span
                    className="block italic text-gold"
                    style={{ fontFamily: 'Georgia, serif' }}
                    initial={{ y: 80 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
                    key={wordIndex}
                  >
                    <motion.span
                      key={wordIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      {words[wordIndex]}
                    </motion.span>
                  </motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: 80 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
                  >
                    cada momento.
                  </motion.span>
                </div>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="text-white/50 text-base md:text-lg leading-relaxed mb-10 max-w-[460px]"
              >
                Empresa 100% peruana especializada en la distribución de alimentos de la más alta calidad. Desde Lima para todo el Perú.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Link
                  href="/productos"
                  className="relative overflow-hidden inline-flex items-center gap-2 bg-gold text-[#0a0a0a] font-black text-sm px-7 py-4 rounded-2xl group hover:shadow-[0_0_40px_rgba(214,167,88,0.45)] transition-all duration-300 tracking-wide"
                >
                  <span className="relative z-10">VER CATÁLOGO</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gold-300 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
                </Link>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 border border-white/15 text-white/70 hover:border-white/40 hover:text-white text-sm px-7 py-4 rounded-2xl transition-all duration-200 font-medium tracking-wide hover:bg-white/[0.03]"
                >
                  CONTÁCTANOS
                </Link>
              </motion.div>

              {/* Scroll hint */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="hidden lg:flex items-center gap-3 mt-14 text-white/25"
              >
                <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
                  <ChevronDown className="w-4 h-4 text-gold/40" />
                </motion.div>
                <span className="text-xs tracking-[0.25em] uppercase">Explorar</span>
              </motion.div>
            </div>

            {/* Right: Floating products */}
            <div className="relative h-[480px] lg:h-[580px] hidden md:block">
              {products.map((p, i) => (
                <motion.div
                  key={p.label}
                  className="absolute"
                  style={{ top: p.top, left: p.left, zIndex: p.z }}
                  initial={{ opacity: 0, scale: 0.5, y: 60 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: p.delay, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    animate={{ y: [0, -14, 0], rotate: [parseFloat(p.rotate), parseFloat(p.rotate) + 1.5, parseFloat(p.rotate)] }}
                    transition={{ duration: 4.5 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                    style={{ x: mousePos.x * (i % 2 === 0 ? 0.25 : -0.2), y: mousePos.y * (i % 2 === 0 ? 0.18 : -0.12) }}
                    className={p.size}
                  >
                    <div
                      className="relative rounded-[20px] overflow-hidden"
                      style={{
                        aspectRatio: '2/3',
                        boxShadow: `0 30px 70px rgba(0,0,0,0.55), 0 0 40px ${p.color}25`,
                      }}
                    >
                      <img src={p.image} alt={p.label} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    </div>
                    <motion.div
                      className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full text-[9px] font-black tracking-[0.18em] text-[#0a0a0a]"
                      style={{ background: p.color }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: p.delay + 0.4 }}
                    >
                      {p.label}
                    </motion.div>
                    <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full border-2 border-[#080808]" style={{ background: p.color }} />
                  </motion.div>
                </motion.div>
              ))}

              {/* Ambient glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(214,167,88,0.10) 0%, transparent 70%)' }} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Ticker strip */}
      <div className="relative z-10 border-t border-white/[0.05] overflow-hidden py-3" style={{ background: 'rgba(0,0,0,0.3)' }}>
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="flex gap-8 whitespace-nowrap w-max"
        >
          {[...ticker, ...ticker].map((item, i) => (
            <span key={i} className="text-white/25 text-xs font-bold tracking-[0.25em] uppercase flex items-center gap-8">
              {item}
              <span className="text-gold/40">·</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none z-0" />
    </section>
  );
}
