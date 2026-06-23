'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { X, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  color: string;
  bg: string;
  image: string;
  features: string[];
}

const products: Product[] = [
  {
    id: 'chifles',
    name: 'Chifles',
    category: 'Snacks',
    tagline: 'VER MÁS',
    description: 'Deliciosas láminas de plátano crujientes elaboradas con plátanos seleccionados de la mejor calidad.',
    color: '#F4C542',
    bg: 'rgba(244,197,66,0.08)',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    features: ['Artesanal', 'Sin conservantes', 'Empaque sellado', 'Familiar'],
  },
  {
    id: 'papitas',
    name: 'Papitas',
    category: 'Snacks',
    tagline: 'VER MÁS',
    description: 'Papas fritas con el sabor auténtico que te encanta. Crujientes, doradas y preparadas con aceite vegetal.',
    color: '#E85D04',
    bg: 'rgba(232,93,4,0.08)',
    image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=600',
    features: ['Sabor intenso', 'Crujiente', 'Variedad', 'Familiar'],
  },
  {
    id: 'bebidas',
    name: 'Bebidas',
    category: 'Bebidas',
    tagline: 'VER MÁS',
    description: 'Línea completa de bebidas gaseosas y refrescos con los sabores más populares.',
    color: '#00A8E8',
    bg: 'rgba(0,168,232,0.08)',
    image: 'https://images.pexels.com/photos/5052875/pexels-photo-5052875.jpeg?auto=compress&cs=tinysrgb&w=600',
    features: ['Varios sabores', 'Individual', 'Familiar', 'Premium'],
  },
  {
    id: 'licores',
    name: 'Licores',
    category: 'Bebidas',
    tagline: 'VER MÁS',
    description: 'Selección exclusiva de licores para los momentos especiales. Calidad y sabor que marcan la diferencia.',
    color: '#C9A227',
    bg: 'rgba(201,162,39,0.08)',
    image: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=600',
    features: ['Premium', 'Variedad', 'Eventos', 'Elegante'],
  },
  {
    id: 'alfajores',
    name: 'Alfajores',
    category: 'Dulces',
    tagline: 'VER MÁS',
    description: 'Auténticos alfajores con el sabor tradicional peruano. Rellenos con manjar blanco de primera calidad.',
    color: '#D4813A',
    bg: 'rgba(212,129,58,0.08)',
    image: 'https://images.pexels.com/photos/6210870/pexels-photo-6210870.jpeg?auto=compress&cs=tinysrgb&w=600',
    features: ['Manjar premium', 'Artesanal', 'Chocolate', 'Caja'],
  },
  {
    id: 'marcianos',
    name: 'Marcianos',
    category: 'Helados',
    tagline: 'VER MÁS',
    description: 'Refrescantes helados de colores con sabores únicos para toda la familia.',
    color: '#FF6B6B',
    bg: 'rgba(255,107,107,0.08)',
    image: 'https://images.pexels.com/photos/1352274/pexels-photo-1352274.jpeg?auto=compress&cs=tinysrgb&w=600',
    features: ['Sabores únicos', 'Fresco', 'Colorido', 'Familiar'],
  },
];

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.88, y: 40 }}
        transition={{ type: 'spring', damping: 22 }}
        onClick={e => e.stopPropagation()}
        className="max-w-3xl w-full rounded-3xl overflow-hidden"
        style={{ background: '#111', border: '1px solid rgba(255,255,255,0.08)' }}
      >
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-square md:aspect-auto">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111]/60 hidden md:block" />
          </div>
          <div className="p-8 flex flex-col">
            <button onClick={onClose} className="self-end w-9 h-9 rounded-full bg-white/8 hover:bg-white/15 flex items-center justify-center mb-4 transition-colors">
              <X className="w-4 h-4 text-white" />
            </button>
            <span className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: product.color }}>
              {product.category}
            </span>
            <h2 className="text-3xl font-black text-white mb-3">{product.name}</h2>
            <p className="text-white/55 leading-relaxed mb-6 text-sm">{product.description}</p>
            <div className="grid grid-cols-2 gap-2 mb-8">
              {product.features.map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-white/60 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: product.color }} />
                  {f}
                </div>
              ))}
            </div>
            <button
              onClick={() => { document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' }); onClose(); }}
              className="w-full py-3 rounded-xl font-bold text-[#0a0a0a] flex items-center justify-center gap-2 text-sm"
              style={{ background: product.color }}
            >
              Solicitar información
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProductosSection() {
  const [selected, setSelected] = useState<Product | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'right' ? 340 : -340, behavior: 'smooth' });
    }
  };

  return (
    <section id="productos" ref={sectionRef} className="relative py-24 overflow-hidden" style={{ background: '#0a0a0a' }}>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-14">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3 block">NUESTROS PRODUCTOS</span>
            <h2 className="text-3xl md:text-[2.8rem] font-black text-white leading-tight">
              Variedad que{' '}
              <span className="italic text-gold" style={{ fontFamily: 'Georgia, serif' }}>satisface</span>
              <br />
              todos los gustos.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:text-right"
          >
            <p className="text-white/45 text-base max-w-sm lg:ml-auto">
              Distribución de alimentos de alta calidad con más de 50 productos para cada momento.
            </p>
          </motion.div>
        </div>

        {/* Scrollable product cards */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide flex gap-5 pb-4"
            style={{ scrollbarWidth: 'none' }}
          >
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex-shrink-0 w-[260px] md:w-[280px] group cursor-pointer"
                onClick={() => setSelected(product)}
              >
                <div
                  className="rounded-3xl overflow-hidden transition-all duration-300 group-hover:-translate-y-2"
                  style={{ background: '#111', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  {/* Image */}
                  <div className="relative h-[200px] overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent" />
                    {/* Color accent top border */}
                    <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: product.color }} />
                  </div>
                  {/* Info */}
                  <div className="p-5">
                    <div className="text-[10px] font-bold tracking-[0.2em] uppercase mb-1" style={{ color: product.color }}>
                      {product.category}
                    </div>
                    <h3 className="text-xl font-black text-white mb-2">{product.name}</h3>
                    <p className="text-white/40 text-xs line-clamp-2 mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold tracking-widest text-white/30 uppercase">VER MÁS</span>
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ background: product.color }}
                      >
                        <ArrowRight className="w-3.5 h-3.5 text-[#0a0a0a]" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll arrows */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-11 h-11 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center hover:border-gold/30 hover:text-gold text-white/60 transition-all shadow-xl z-10 hidden md:flex"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-11 h-11 rounded-full bg-gold flex items-center justify-center hover:bg-gold/80 text-[#0a0a0a] transition-all shadow-xl z-10 hidden md:flex"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
