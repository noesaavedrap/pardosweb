'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, Star, Headphones, Truck } from 'lucide-react';

const experienceCards = [
  {
    icon: ShieldCheck,
    title: 'Calidad Garantizada',
    description: 'Seleccionamos los mejores productos con estrictos controles de calidad en cada etapa.',
    color: '#D6A758',
  },
  {
    icon: Star,
    title: 'Productos Seleccionados',
    description: 'Curación cuidadosa del catálogo con las marcas y productos más reconocidos.',
    color: '#A8D96B',
  },
  {
    icon: Headphones,
    title: 'Atención Personalizada',
    description: 'Equipo dedicado 24/7 para atender tus pedidos y consultas en tiempo real.',
    color: '#D6A758',
  },
  {
    icon: Truck,
    title: 'Distribución Eficiente',
    description: 'Red logística optimizada para entregas puntuales a todo el Perú.',
    color: '#A8D96B',
  },
];

export function ExperienciaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });
  const galleryRef = useRef<HTMLDivElement>(null);

  const galleryImages = [
    { src: 'https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Almacén' },
    { src: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Distribución' },
    { src: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Productos' },
    { src: 'https://images.pexels.com/photos/4228862/pexels-photo-4228862.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Entrega' },
  ];

  return (
    <>
      {/* Experience cards section */}
      <section
        id="experiencia"
        ref={sectionRef}
        className="relative py-24 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #0d0d0d 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/4 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Big headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-4 block">EXPERIENCIA</span>
            <h2 className="text-4xl md:text-[3.5rem] font-black text-white leading-tight">
              Creamos experiencias{' '}
              <span className="italic text-gold" style={{ fontFamily: 'Georgia, serif' }}>
                inolvidables.
              </span>
            </h2>
          </motion.div>

          {/* 4 Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {experienceCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="group p-6 rounded-3xl transition-all duration-300 hover:-translate-y-2"
                  style={{ background: '#111', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: `${card.color}15`, border: `1px solid ${card.color}30` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: card.color }} />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{card.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{card.description}</p>
                  <div className="mt-5 w-8 h-0.5 transition-all duration-300 group-hover:w-full" style={{ background: card.color }} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery photo strip section */}
      <section className="relative py-16 overflow-hidden" style={{ background: '#0d0d0d' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3 block">GALERÍA</span>
            <h2 className="text-3xl md:text-[2.5rem] font-black text-white">
              Conoce más de{' '}
              <span className="italic text-gold" style={{ fontFamily: 'Georgia, serif' }}>
                nuestro mundo.
              </span>
            </h2>
          </motion.div>
        </div>

        <div
          ref={galleryRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-6 lg:px-8"
          style={{ scrollbarWidth: 'none' }}
        >
          {[...galleryImages, ...galleryImages].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % galleryImages.length) * 0.07 }}
              className="flex-shrink-0 relative group"
            >
              <div className="w-[280px] md:w-[340px] h-[220px] rounded-2xl overflow-hidden">
                <motion.img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0.65)' }}
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white font-semibold text-sm">{img.label}</div>
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
