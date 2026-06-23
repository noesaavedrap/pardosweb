'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'María González',
    role: 'Dueña de Restaurante',
    company: 'La Perla Restaurant',
    content: 'Pardos Alimentos ha transformado completamente nuestra cadena de suministro. La calidad de sus productos es excepcional y el servicio al cliente es impecable. Los recomiendo completamente.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=200',
    initials: 'MG',
  },
  {
    id: 2,
    name: 'Carlos Pacheco',
    role: 'Gerente de Compras',
    company: 'Supermercados El Sol',
    content: 'La variedad de productos y los tiempos de entrega son justamente lo que necesitamos. Trabajar con Pardos ha sido una experiencia increíble para nuestro negocio.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200',
    initials: 'CP',
  },
  {
    id: 3,
    name: 'Lucía Fernández',
    role: 'Propietaria',
    company: 'Minimarket Lucía',
    content: 'Desde que trabajo con Pardos Alimentos, mis clientes siempre encuentran productos frescos y de calidad. Son socios estratégicos de mi negocio hace más de 2 años.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=200',
    initials: 'LF',
  },
];

export function TestimoniosSection() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const prev = () => setCurrent(c => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent(c => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section
      id="testimonios"
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0d0d0d 0%, #0a0a0a 100%)' }}
    >
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-gold/4 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-4 block">TESTIMONIOS</span>
            <h2 className="text-3xl md:text-[2.8rem] font-black text-white leading-tight mb-6">
              Lo que dicen{' '}
              <span className="italic text-gold" style={{ fontFamily: 'Georgia, serif' }}>
                nuestros clientes.
              </span>
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-10 max-w-sm">
              La confianza de más de 1000 clientes respalda la calidad de nuestros productos y servicio.
            </p>

            {/* Navigation arrows */}
            <div className="flex items-center gap-4">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-[#0a0a0a] hover:bg-gold/80 transition-all duration-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <span className="text-white/30 text-sm ml-2">
                {current + 1} / {testimonials.length}
              </span>
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 rounded-full ${i === current ? 'w-8 h-2 bg-gold' : 'w-2 h-2 bg-white/20'}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right: Testimonial card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="p-8 rounded-3xl relative"
                style={{ background: '#111', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-gold/15" />

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                <p className="text-white/75 text-lg leading-relaxed mb-8 font-light">
                  "{testimonials[current].content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={testimonials[current].avatar}
                      alt={testimonials[current].name}
                      className="w-14 h-14 rounded-2xl object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-gold flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#0a0a0a]" />
                    </div>
                  </div>
                  <div>
                    <div className="text-white font-bold text-base">{testimonials[current].name}</div>
                    <div className="text-white/40 text-sm">{testimonials[current].role}</div>
                    <div className="text-gold/70 text-xs font-medium mt-0.5">{testimonials[current].company}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Ghost cards behind */}
            <div
              className="absolute -bottom-3 left-4 right-4 h-full rounded-3xl -z-10 opacity-40"
              style={{ background: '#0e0e0e', border: '1px solid rgba(255,255,255,0.04)' }}
            />
            <div
              className="absolute -bottom-6 left-8 right-8 h-full rounded-3xl -z-20 opacity-20"
              style={{ background: '#0c0c0c' }}
            />
          </motion.div>
        </div>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-px"
          style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '20px', overflow: 'hidden' }}
        >
          {[
            { val: '4.9', label: 'Calificación promedio' },
            { val: '1000+', label: 'Clientes satisfechos' },
            { val: '98%', label: 'Tasa de satisfacción' },
          ].map((stat, i) => (
            <div key={i} className="flex-1 min-w-[140px] px-8 py-6 text-center" style={{ background: '#0f0f0f' }}>
              <div className="text-3xl font-black text-gold">{stat.val}</div>
              <div className="text-white/40 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
