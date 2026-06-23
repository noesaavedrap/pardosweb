'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const floatingProducts = [
  {
    id: 'chifles',
    label: 'CHIFLES',
    brand: 'PARDOS',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
    top: '10%', left: '52%',
    size: 'w-36 md:w-44',
    rotate: '-8deg',
    delay: 0.2,
    z: 'z-20',
    accent: '#F4C542',
  },
  {
    id: 'papitas',
    label: 'PAPITAS',
    brand: 'PARDOS',
    image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=400',
    top: '5%', left: '72%',
    size: 'w-32 md:w-40',
    rotate: '6deg',
    delay: 0.35,
    z: 'z-10',
    accent: '#E85D04',
  },
  {
    id: 'licores',
    label: 'LICORES',
    brand: 'PARDOS',
    image: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=400',
    top: '42%', left: '65%',
    size: 'w-20 md:w-28',
    rotate: '-4deg',
    delay: 0.5,
    z: 'z-20',
    accent: '#4A0E4E',
  },
  {
    id: 'alfajores',
    label: 'ALFAJORES',
    brand: 'PARDOS',
    image: 'https://images.pexels.com/photos/6210870/pexels-photo-6210870.jpeg?auto=compress&cs=tinysrgb&w=400',
    top: '55%', left: '50%',
    size: 'w-28 md:w-36',
    rotate: '10deg',
    delay: 0.45,
    z: 'z-10',
    accent: '#8B4513',
  },
];

const goldDots = [
  { top: '25%', left: '48%', size: 'w-3 h-3' },
  { top: '60%', left: '80%', size: 'w-2 h-2' },
  { top: '80%', left: '60%', size: 'w-4 h-4' },
  { top: '15%', left: '85%', size: 'w-2 h-2' },
  { top: '70%', left: '45%', size: 'w-3 h-3' },
];

export function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(214,167,88,0.12) 0%, transparent 60%), #080808',
      }}
    >
      {/* Golden ambient glow behind products */}
      <div className="absolute top-1/4 right-[30%] w-[500px] h-[500px] rounded-full bg-gold/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-[20%] w-[300px] h-[300px] rounded-full bg-yellow-500/8 blur-[80px] pointer-events-none" />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
      }} />

      {/* Gold dots */}
      {goldDots.map((dot, i) => (
        <motion.div
          key={i}
          className={`absolute ${dot.size} rounded-full bg-gold/60 pointer-events-none`}
          style={{ top: dot.top, left: dot.left }}
          animate={{ y: [0, -8, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">

          {/* Left: Text content */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-2 mb-8"
            >
              <div className="flex items-center gap-2 text-gold/90 text-xs font-semibold tracking-[0.2em] uppercase">
                <div className="w-8 h-px bg-gold/60" />
                BIENVENIDOS A PARDOS ALIMENTOS
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[3.2rem] md:text-[4rem] lg:text-[4.5rem] font-black leading-[1.0] tracking-tight text-white mb-6"
            >
              Calidad que{' '}
              <span className="italic text-gold" style={{ fontFamily: 'Georgia, serif' }}>
                transforma
              </span>
              <br />
              cada momento.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-white/55 text-base md:text-lg leading-relaxed mb-10 max-w-[480px]"
            >
              Somos una empresa 100% peruana especializada en la comercialización y distribución de alimentos de la más alta calidad.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => document.querySelector('#productos')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 bg-gold hover:bg-gold/90 text-[#0a0a0a] font-bold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-[0_0_30px_rgba(214,167,88,0.4)] tracking-wide"
              >
                EXPLORAR CATÁLOGO
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 border border-white/20 text-white hover:border-gold/40 hover:text-gold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 font-medium tracking-wide"
              >
                CONTÁCTANOS
              </button>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="hidden lg:flex items-center gap-3 mt-16 text-white/30"
            >
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ChevronDown className="w-4 h-4 text-gold/50" />
              </motion.div>
              <span className="text-xs tracking-[0.2em] uppercase">Scroll para explorar</span>
            </motion.div>
          </div>

          {/* Right: Floating product images */}
          <div className="relative h-[500px] lg:h-[600px] hidden md:block">
            {floatingProducts.map((product, i) => (
              <motion.div
                key={product.id}
                className={`absolute ${product.size} ${product.z}`}
                style={{ top: product.top, left: product.left }}
                initial={{ opacity: 0, scale: 0.7, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: product.delay, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  animate={{
                    y: [0, -12, 0],
                    rotate: [
                      parseFloat(product.rotate),
                      parseFloat(product.rotate) + 2,
                      parseFloat(product.rotate)
                    ],
                  }}
                  transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                  style={{
                    x: mousePos.x * (i % 2 === 0 ? 0.3 : -0.2),
                    y: mousePos.y * (i % 2 === 0 ? 0.2 : -0.15),
                  }}
                  className="relative"
                >
                  <div
                    className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
                    style={{
                      boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 30px ${product.accent}30`,
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.label}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  {/* Label badge */}
                  <div
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full text-[9px] font-black tracking-widest text-[#0a0a0a]"
                    style={{ background: product.accent }}
                  >
                    {product.label}
                  </div>
                  {/* Gold dot accent */}
                  <div
                    className="absolute -top-2 -right-2 w-5 h-5 rounded-full border-2 border-[#0a0a0a]"
                    style={{ background: product.accent }}
                  />
                </motion.div>
              </motion.div>
            ))}

            {/* Central glow orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gold/8 blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
    </section>
  );
}
