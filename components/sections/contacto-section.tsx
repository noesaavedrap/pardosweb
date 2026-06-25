'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import * as z from 'zod';
import { Send, Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
import { toast } from 'sonner';

const schema = z.object({
  name: z.string().min(3, 'Mínimo 3 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(9, 'Número inválido'),
  message: z.string().min(10, 'Mínimo 10 caracteres'),
});
type FormData = z.infer<typeof schema>;

export function ContactoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (_data: FormData) => {
    await new Promise(r => setTimeout(r, 900));
    toast.success('Mensaje enviado', { description: 'Nos contactaremos pronto.' });
    reset();
  };

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{ background: '#0a0a0a' }}
    >
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[400px] bg-gold/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-4 block">CONTACTO</span>
          <h2 className="text-3xl md:text-[2.8rem] font-black text-white leading-tight">
            Estamos para{' '}
            <span className="italic text-gold" style={{ fontFamily: 'Georgia, serif' }}>
              atenderte.
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form - 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="p-8 rounded-3xl h-full" style={{ background: '#111', border: '1px solid rgba(255,255,255,0.06)' }}>
              <h3 className="text-white font-bold text-xl mb-8">Envíanos un mensaje</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/50 text-xs font-medium mb-2 block uppercase tracking-wide">Nombre completo</label>
                    <input
                      {...register('name')}
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3.5 rounded-xl text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                    />
                    {errors.name && <span className="text-red-400 text-xs mt-1 block">{errors.name.message}</span>}
                  </div>
                  <div>
                    <label className="text-white/50 text-xs font-medium mb-2 block uppercase tracking-wide">Teléfono</label>
                    <input
                      {...register('phone')}
                      placeholder="945 881 587"
                      className="w-full px-4 py-3.5 rounded-xl text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                    />
                    {errors.phone && <span className="text-red-400 text-xs mt-1 block">{errors.phone.message}</span>}
                  </div>
                </div>

                <div>
                  <label className="text-white/50 text-xs font-medium mb-2 block uppercase tracking-wide">Correo electrónico</label>
                  <input
                    {...register('email')}
                    placeholder="correo@ejemplo.com"
                    className="w-full px-4 py-3.5 rounded-xl text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                  />
                  {errors.email && <span className="text-red-400 text-xs mt-1 block">{errors.email.message}</span>}
                </div>

                <div>
                  <label className="text-white/50 text-xs font-medium mb-2 block uppercase tracking-wide">Mensaje</label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    placeholder="¿Cómo podemos ayudarte?"
                    className="w-full px-4 py-3.5 rounded-xl text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-gold/50 transition-colors resize-none"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                  />
                  {errors.message && <span className="text-red-400 text-xs mt-1 block">{errors.message.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-[#0a0a0a] text-sm tracking-wide bg-gold hover:bg-gold/90 transition-all disabled:opacity-50 hover:shadow-[0_0_30px_rgba(214,167,88,0.3)]"
                >
                  {isSubmitting ? 'Enviando...' : 'ENVIAR MENSAJE'}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right side: Info + Peru map - 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Contact info */}
            <div className="p-6 rounded-3xl" style={{ background: '#111', border: '1px solid rgba(255,255,255,0.06)' }}>
              <h3 className="text-white font-bold text-lg mb-5">Información</h3>
              <div className="space-y-4">
                {[
                  { icon: Phone, label: '+51 945 881 587', href: 'tel:+51945881587' },
                  { icon: Mail, label: 'contacto@pardosalimentos.com', href: 'mailto:contacto@pardosalimentos.com' },
                  { icon: MapPin, label: 'Lima, Perú — Cobertura Nacional', href: '#' },
                ].map(({ icon: Icon, label, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="flex items-center gap-3 text-white/55 hover:text-gold transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <Icon className="w-4 h-4 text-gold" />
                    </div>
                    <span className="text-sm">{label}</span>
                  </a>
                ))}
              </div>
              {/* Social */}
              <div className="mt-5 pt-5 border-t border-white/[0.06]">
                <p className="text-white/30 text-xs mb-3 uppercase tracking-wide">Síguenos</p>
                <div className="flex gap-3">
                  {[
                    { icon: Instagram, href: 'https://instagram.com' },
                    { icon: Facebook, href: 'https://facebook.com' },
                    { icon: Youtube, href: 'https://youtube.com' },
                  ].map(({ icon: Icon, href }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/30 transition-all"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Peru map card */}
            <div
              className="flex-1 min-h-[200px] rounded-3xl overflow-hidden relative"
              style={{ background: '#111', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <div className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-2">Estamos en Perú</div>
                  <div className="text-white font-bold text-lg">Cobertura Nacional</div>
                  <div className="text-white/40 text-sm mt-1">Distribuimos a todo el país</div>
                </div>

                {/* SVG Peru map outline */}
                <div className="flex items-center justify-center flex-1 py-4">
                  <svg viewBox="0 0 200 280" className="w-32 h-auto opacity-60" fill="none" stroke="#D6A758" strokeWidth="1.5">
                    <path d="M70,20 L85,15 L100,20 L115,18 L130,25 L140,35 L145,50 L150,65 L145,80 L155,95 L150,110 L145,125 L140,140 L145,155 L140,170 L130,185 L120,200 L110,215 L100,225 L90,235 L80,245 L70,255 L65,245 L60,230 L55,215 L50,200 L45,185 L50,170 L45,155 L40,140 L35,125 L40,110 L35,95 L40,80 L35,65 L40,50 L45,35 L55,25 Z" />
                    <circle cx="100" cy="140" r="6" fill="#D6A758" opacity="0.8" />
                    <circle cx="100" cy="140" r="12" fill="none" stroke="#D6A758" strokeWidth="0.8" opacity="0.4">
                      <animate attributeName="r" values="6;14;6" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" repeatCount="indefinite" />
                    </circle>
                  </svg>
                </div>

                <div className="text-white/30 text-xs">+51 945 881 587</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
