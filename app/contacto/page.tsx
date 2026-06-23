'use client';

import { motion } from 'framer-motion';
import { Navigation } from '@/components/ui/navigation';
import { FooterSection } from '@/components/sections/footer-section';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import {
  Send, Phone, Mail, MapPin, MessageCircle,
  Clock, Instagram, Facebook, Youtube, ChevronRight
} from 'lucide-react';

const schema = z.object({
  name: z.string().min(3, 'Mínimo 3 caracteres'),
  company: z.string().optional(),
  email: z.string().email('Email inválido'),
  phone: z.string().min(9, 'Número inválido'),
  subject: z.string().min(1, 'Selecciona un asunto'),
  message: z.string().min(15, 'Mínimo 15 caracteres'),
});
type FormData = z.infer<typeof schema>;

const subjects = [
  'Solicitar catálogo',
  'Cotización de productos',
  'Convertirme en distribuidor',
  'Información de pedidos',
  'Otro',
];

const contactCards = [
  { icon: Phone, title: 'Llámanos', value: '+51 999 999 999', sub: 'Lunes a Sábado, 8am - 6pm', href: 'tel:+51999999999', color: '#D6A758' },
  { icon: Mail, title: 'Escríbenos', value: 'contacto@pardosalimentos.com', sub: 'Respondemos en menos de 24h', href: 'mailto:contacto@pardosalimentos.com', color: '#A8D96B' },
  { icon: MessageCircle, title: 'WhatsApp', value: '+51 999 999 999', sub: 'Respuesta inmediata', href: 'https://wa.me/51999999999?text=Hola%2C+quiero+informaci%C3%B3n', color: '#25D366' },
  { icon: MapPin, title: 'Ubicación', value: 'Lima, Perú', sub: 'Cobertura nacional', href: '#', color: '#E85D04' },
];

const faqItems = [
  { q: '¿Cuál es el pedido mínimo?', a: 'Para pedidos al por mayor el mínimo varía por categoría. Contáctanos y te asesoraremos según tu necesidad.' },
  { q: '¿Hacen distribución a provincias?', a: 'Sí, tenemos cobertura en todo el Perú. Los tiempos de entrega varían según la región.' },
  { q: '¿Cómo puedo convertirme en distribuidor?', a: 'Escríbenos o llámanos y nuestro equipo comercial evaluará tu perfil para integrarte a nuestra red.' },
  { q: '¿Tienen facturación electrónica?', a: 'Sí, emitimos boleta y factura electrónica para todos nuestros pedidos.' },
];

export default function ContactoPage() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (_data: FormData) => {
    await new Promise(r => setTimeout(r, 1000));
    toast.success('Mensaje enviado', { description: 'Nuestro equipo se pondrá en contacto en menos de 24 horas.' });
    reset();
  };

  return (
    <div className="min-h-screen" style={{ background: '#080808' }}>
      <Navigation />

      {/* Hero */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/6 rounded-full blur-[130px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center relative">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-5 block">CONTACTO</span>
            <h1 className="text-4xl md:text-[3.5rem] lg:text-[4.5rem] font-black text-white leading-tight mb-5">
              Estamos para{' '}
              <span className="italic text-gold" style={{ fontFamily: 'Georgia, serif' }}>atenderte</span>
            </h1>
            <p className="text-white/45 text-lg max-w-lg mx-auto">
              Cuéntanos qué necesitas y nuestro equipo se pondrá en contacto contigo a la brevedad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="pb-16 px-6">
        <div className="max-w-7xl mx-auto lg:px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.a
                  key={i}
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.09 }}
                  className="p-6 rounded-2xl group hover:-translate-y-1.5 transition-all duration-300 block"
                  style={{ background: '#111', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${card.color}15`, border: `1px solid ${card.color}25` }}>
                    <Icon className="w-5 h-5" style={{ color: card.color }} />
                  </div>
                  <div className="text-white/40 text-xs uppercase tracking-wide mb-1">{card.title}</div>
                  <div className="text-white font-semibold text-sm mb-1 group-hover:text-gold transition-colors break-all">{card.value}</div>
                  <div className="text-white/30 text-xs">{card.sub}</div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto lg:px-4">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3"
            >
              <div className="p-8 md:p-10 rounded-3xl" style={{ background: '#111', border: '1px solid rgba(255,255,255,0.06)' }}>
                <h2 className="text-2xl font-black text-white mb-8">Envíanos un mensaje</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-white/45 text-xs font-semibold uppercase tracking-wider mb-2 block">Nombre completo *</label>
                      <input {...register('name')} placeholder="Tu nombre"
                        className="w-full px-4 py-3.5 rounded-xl text-white placeholder:text-white/20 text-sm focus:outline-none transition-all"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }} />
                      {errors.name && <span className="text-red-400/80 text-xs mt-1.5 block">{errors.name.message}</span>}
                    </div>
                    <div>
                      <label className="text-white/45 text-xs font-semibold uppercase tracking-wider mb-2 block">Empresa (opcional)</label>
                      <input {...register('company')} placeholder="Nombre de tu empresa"
                        className="w-full px-4 py-3.5 rounded-xl text-white placeholder:text-white/20 text-sm focus:outline-none transition-all"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }} />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-white/45 text-xs font-semibold uppercase tracking-wider mb-2 block">Email *</label>
                      <input {...register('email')} placeholder="correo@ejemplo.com"
                        className="w-full px-4 py-3.5 rounded-xl text-white placeholder:text-white/20 text-sm focus:outline-none transition-all"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }} />
                      {errors.email && <span className="text-red-400/80 text-xs mt-1.5 block">{errors.email.message}</span>}
                    </div>
                    <div>
                      <label className="text-white/45 text-xs font-semibold uppercase tracking-wider mb-2 block">Teléfono *</label>
                      <input {...register('phone')} placeholder="999 999 999"
                        className="w-full px-4 py-3.5 rounded-xl text-white placeholder:text-white/20 text-sm focus:outline-none transition-all"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }} />
                      {errors.phone && <span className="text-red-400/80 text-xs mt-1.5 block">{errors.phone.message}</span>}
                    </div>
                  </div>
                  <div>
                    <label className="text-white/45 text-xs font-semibold uppercase tracking-wider mb-2 block">Asunto *</label>
                    <select {...register('subject')}
                      className="w-full px-4 py-3.5 rounded-xl text-white text-sm focus:outline-none transition-all appearance-none"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <option value="" style={{ background: '#111' }}>Selecciona un asunto</option>
                      {subjects.map((s, i) => <option key={i} value={s} style={{ background: '#111' }}>{s}</option>)}
                    </select>
                    {errors.subject && <span className="text-red-400/80 text-xs mt-1.5 block">{errors.subject.message}</span>}
                  </div>
                  <div>
                    <label className="text-white/45 text-xs font-semibold uppercase tracking-wider mb-2 block">Mensaje *</label>
                    <textarea {...register('message')} rows={5} placeholder="Cuéntanos en qué podemos ayudarte..."
                      className="w-full px-4 py-3.5 rounded-xl text-white placeholder:text-white/20 text-sm focus:outline-none transition-all resize-none"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }} />
                    {errors.message && <span className="text-red-400/80 text-xs mt-1.5 block">{errors.message.message}</span>}
                  </div>
                  <button type="submit" disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-black text-[#0a0a0a] text-sm tracking-wide bg-gold hover:bg-gold/90 transition-all duration-200 hover:shadow-[0_0_40px_rgba(214,167,88,0.35)] disabled:opacity-50">
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[#0a0a0a]/40 border-t-[#0a0a0a] rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>ENVIAR MENSAJE <Send className="w-4 h-4" /></>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-2 flex flex-col gap-5"
            >
              {/* Hours */}
              <div className="p-6 rounded-2xl" style={{ background: '#111', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="text-white font-bold">Horarios de atención</h3>
                </div>
                {[
                  { day: 'Lunes – Viernes', hours: '8:00 am – 6:00 pm' },
                  { day: 'Sábado', hours: '8:00 am – 2:00 pm' },
                  { day: 'Domingo', hours: 'Solo WhatsApp' },
                ].map((row, i) => (
                  <div key={i} className={`flex items-center justify-between py-2.5 ${i < 2 ? 'border-b border-white/[0.05]' : ''}`}>
                    <span className="text-white/50 text-sm">{row.day}</span>
                    <span className="text-white text-sm font-medium">{row.hours}</span>
                  </div>
                ))}
              </div>

              {/* Peru map */}
              <div
                className="flex-1 rounded-2xl overflow-hidden relative min-h-[220px]"
                style={{ background: '#111', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="absolute inset-0 p-6 flex flex-col">
                  <div className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-1">COBERTURA</div>
                  <div className="text-white font-black text-xl mb-1">Todo el Perú</div>
                  <div className="text-white/35 text-sm mb-auto">Distribución nacional</div>
                  <div className="flex items-center justify-center py-4">
                    <svg viewBox="0 0 200 280" className="w-32 h-auto" fill="none">
                      <path
                        d="M70,20 L85,15 L100,20 L115,18 L130,25 L140,35 L145,50 L150,65 L145,80 L155,95 L150,110 L145,125 L140,140 L145,155 L140,170 L130,185 L120,200 L110,215 L100,225 L90,235 L80,245 L70,255 L65,245 L60,230 L55,215 L50,200 L45,185 L50,170 L45,155 L40,140 L35,125 L40,110 L35,95 L40,80 L35,65 L40,50 L45,35 L55,25 Z"
                        stroke="#D6A758" strokeWidth="1.5" fill="rgba(214,167,88,0.06)"
                      />
                      <circle cx="85" cy="155" r="5" fill="#D6A758" />
                      <circle cx="85" cy="155" r="10" fill="none" stroke="#D6A758" strokeWidth="1" opacity="0.5">
                        <animate attributeName="r" values="5;16;5" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="100" cy="60" r="3" fill="#D6A758" opacity="0.5" />
                      <circle cx="130" cy="80" r="3" fill="#D6A758" opacity="0.4" />
                      <circle cx="80" cy="200" r="3" fill="#D6A758" opacity="0.4" />
                    </svg>
                  </div>
                  <div className="text-white/25 text-xs">Lima, Arequipa, Trujillo y más...</div>
                </div>
              </div>

              {/* Social */}
              <div className="p-5 rounded-2xl" style={{ background: '#111', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="text-white/35 text-xs uppercase tracking-wider mb-3">Síguenos</div>
                <div className="flex gap-3">
                  {[
                    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
                    { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
                    { icon: Youtube, label: 'YouTube', href: 'https://youtube.com' },
                  ].map(({ icon: Icon, label, href }, i) => (
                    <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                      className="flex-1 flex flex-col items-center gap-1.5 py-3 rounded-xl text-white/40 hover:text-gold transition-all duration-200 hover:-translate-y-1"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <Icon className="w-5 h-5" />
                      <span className="text-[10px] font-medium">{label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6" style={{ background: '#0c0c0c' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">FAQ</span>
            <h2 className="text-3xl font-black text-white">
              Preguntas{' '}
              <span className="italic text-gold" style={{ fontFamily: 'Georgia, serif' }}>frecuentes</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 rounded-2xl"
                style={{ background: '#111', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ChevronRight className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <div className="text-white font-bold mb-2">{item.q}</div>
                    <div className="text-white/45 text-sm leading-relaxed">{item.a}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
}
