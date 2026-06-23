'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Navigation } from '@/components/ui/navigation';
import { FooterSection } from '@/components/sections/footer-section';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import {
  ShieldCheck, Users, Truck, Star, Award, Clock,
  Target, Heart, Zap, Package, ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const stats = [
  { val: '+1000', label: 'Clientes activos', icon: Users },
  { val: '+50', label: 'Productos en catálogo', icon: Package },
  { val: '24/7', label: 'Soporte al cliente', icon: Clock },
  { val: '100%', label: 'Empresa peruana', icon: Heart },
];

const values = [
  {
    icon: ShieldCheck,
    title: 'Calidad Sin Compromiso',
    description: 'Cada producto pasa por estrictos controles de calidad antes de llegar a tus manos. Nos negamos a distribuir nada que no sea lo mejor.',
    color: '#D6A758',
  },
  {
    icon: Heart,
    title: 'Pasión por Perú',
    description: 'Somos 100% peruanos y orgullosos de serlo. Apoyamos a productores locales y llevamos lo mejor de nuestra tierra al mundo.',
    color: '#E85D04',
  },
  {
    icon: Target,
    title: 'Compromiso Real',
    description: 'Prometemos lo que podemos cumplir. Cada entrega, cada pedido, cada cliente es tratado con la máxima seriedad y dedicación.',
    color: '#A8D96B',
  },
  {
    icon: Zap,
    title: 'Innovación Constante',
    description: 'El mercado evoluciona y nosotros también. Continuamente renovamos nuestro catálogo para ofrecerte siempre lo más relevante.',
    color: '#00A8E8',
  },
];

const milestones = [
  { year: '2010', title: 'El inicio', description: 'Pardos Alimentos nace en Lima con la visión de democratizar el acceso a productos de calidad en todo el Perú.', color: '#D6A758' },
  { year: '2013', title: 'Expansión regional', description: 'Abrimos operaciones en provincias, llevando nuestros productos a más de 5 regiones del país.', color: '#A8D96B' },
  { year: '2016', title: 'Catálogo premium', description: 'Incorporamos líneas premium de licores y productos artesanales a nuestro portafolio.', color: '#D6A758' },
  { year: '2019', title: '1000 clientes', description: 'Alcanzamos el milestone de 1000 clientes activos, consolidándonos como distribuidora líder.', color: '#A8D96B' },
  { year: '2022', title: 'Modernización digital', description: 'Digitalizamos toda nuestra operación y lanzamos el sistema de pedidos en línea.', color: '#D6A758' },
  { year: '2024', title: 'Cobertura nacional', description: 'Completamos la red de distribución nacional con presencia en todas las regiones del Perú.', color: '#A8D96B' },
];

const team = [
  {
    name: 'Carlos Paredes',
    role: 'Fundador & CEO',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Más de 15 años liderando la distribución de alimentos en el Perú.',
  },
  {
    name: 'María Quispe',
    role: 'Directora Comercial',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Especialista en desarrollo de mercados y relaciones con clientes estratégicos.',
  },
  {
    name: 'Jorge Ríos',
    role: 'Director de Operaciones',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Responsable de la cadena logística y distribución a nivel nacional.',
  },
];

function StatCard({ val, label, icon: Icon, delay }: { val: string; label: string; icon: React.ElementType; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="p-8 rounded-3xl text-center"
      style={{ background: '#111', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-4">
        <Icon className="w-6 h-6 text-gold" />
      </div>
      <div className="text-4xl font-black text-white mb-2">{val}</div>
      <div className="text-white/45 text-sm">{label}</div>
    </motion.div>
  );
}

export default function NosotrosPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen" style={{ background: '#080808' }}>
      <Navigation />

      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[700px] h-[500px] bg-gold/5 rounded-full blur-[130px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/3 rounded-full blur-[100px]" />
        </div>
        <div ref={heroRef} className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-5 block">NUESTRA HISTORIA</span>
              <h1 className="text-4xl md:text-[3.5rem] lg:text-[4rem] font-black text-white leading-[1.0] mb-6">
                Más que una distribuidora,{' '}
                <span className="italic text-gold" style={{ fontFamily: 'Georgia, serif' }}>
                  somos familia.
                </span>
              </h1>
              <p className="text-white/50 text-lg leading-relaxed mb-8 max-w-lg">
                Desde el 2010 llevamos calidad a cada rincón del Perú. Somos una empresa familiar que creció hasta convertirse en la distribuidora de confianza de más de 1000 clientes.
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 bg-gold text-[#0a0a0a] font-black px-7 py-4 rounded-2xl hover:shadow-[0_0_40px_rgba(214,167,88,0.4)] transition-all duration-300 text-sm tracking-wide"
              >
                TRABAJEMOS JUNTOS
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <div
                className="rounded-3xl overflow-hidden aspect-[4/3] relative"
                style={{ boxShadow: '0 40px 100px rgba(0,0,0,0.7)' }}
              >
                <img
                  src="https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Pardos Alimentos"
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0.5)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-[#080808]/30 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full border-2 border-gold/50 flex items-center justify-center bg-[#080808]/70 backdrop-blur-sm">
                    <span className="text-6xl font-black text-gold">P</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-white/40 text-xs uppercase tracking-[0.2em] mb-1">Fundada en</div>
                  <div className="text-white font-black text-3xl">2010</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16" style={{ background: '#0c0c0c' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <StatCard key={i} {...s} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24" style={{ background: '#080808' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: Target,
                title: 'Nuestra Misión',
                text: 'Llevar productos de alta calidad a cada hogar y negocio del Perú, garantizando frescura, variedad y un servicio que supere las expectativas.',
                color: '#D6A758',
              },
              {
                icon: Star,
                title: 'Nuestra Visión',
                text: 'Ser la distribuidora de alimentos más confiable y reconocida del Perú, expandiéndonos a nuevos mercados sin perder la esencia familiar que nos define.',
                color: '#A8D96B',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  className="p-8 rounded-3xl"
                  style={{ background: '#111', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                    <Icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <h3 className="text-white font-black text-2xl mb-4">{item.title}</h3>
                  <p className="text-white/50 leading-relaxed">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6" style={{ background: '#0c0c0c' }}>
        <div className="max-w-7xl mx-auto lg:px-4">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">VALORES</span>
            <h2 className="text-3xl md:text-[2.8rem] font-black text-white">
              Lo que nos{' '}
              <span className="italic text-gold" style={{ fontFamily: 'Georgia, serif' }}>define</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="p-6 rounded-3xl group hover:-translate-y-2 transition-transform duration-300"
                  style={{ background: '#111', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${v.color}15`, border: `1px solid ${v.color}30` }}>
                    <Icon className="w-5 h-5" style={{ color: v.color }} />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{v.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{v.description}</p>
                  <div className="mt-4 w-8 h-0.5 group-hover:w-full transition-all duration-500" style={{ background: v.color }} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6" style={{ background: '#080808' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">HISTORIA</span>
            <h2 className="text-3xl md:text-[2.8rem] font-black text-white">
              Nuestra{' '}
              <span className="italic text-gold" style={{ fontFamily: 'Georgia, serif' }}>trayectoria</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.06] hidden md:block" />
            <div className="space-y-10">
              {milestones.map((m, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative grid md:grid-cols-2 gap-6"
                  >
                    <div
                      className={`p-6 rounded-2xl ${isLeft ? 'md:text-right' : 'md:col-start-2'}`}
                      style={{ background: '#111', border: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      <div className="text-2xl font-black mb-2" style={{ color: m.color }}>{m.year}</div>
                      <h3 className="text-white font-bold text-lg mb-2">{m.title}</h3>
                      <p className="text-white/45 text-sm leading-relaxed">{m.description}</p>
                    </div>
                    <div className="absolute left-1/2 top-6 -translate-x-1/2 hidden md:block">
                      <div className="w-4 h-4 rounded-full border-2 border-[#080808]" style={{ background: m.color }} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6" style={{ background: '#0c0c0c' }}>
        <div className="max-w-7xl mx-auto lg:px-4">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">EQUIPO</span>
            <h2 className="text-3xl md:text-[2.8rem] font-black text-white">
              Las personas{' '}
              <span className="italic text-gold" style={{ fontFamily: 'Georgia, serif' }}>detrás</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="rounded-3xl overflow-hidden group"
                style={{ background: '#111', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={{ filter: 'brightness(0.65) saturate(0.8)' }}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent" />
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold/60" />
                </div>
                <div className="p-6">
                  <h3 className="text-white font-black text-xl">{member.name}</h3>
                  <div className="text-gold text-sm font-semibold mb-3">{member.role}</div>
                  <p className="text-white/40 text-sm leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: '#080808' }}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-14"
            style={{ background: 'linear-gradient(135deg, rgba(214,167,88,0.10) 0%, rgba(214,167,88,0.04) 100%)', border: '1px solid rgba(214,167,88,0.18)' }}
          >
            <Award className="w-10 h-10 text-gold mx-auto mb-6" />
            <h2 className="text-3xl font-black text-white mb-4">Sé parte de nuestra historia</h2>
            <p className="text-white/45 mb-8 max-w-md mx-auto leading-relaxed">
              Únete a los más de 1000 clientes que ya confían en Pardos Alimentos para su negocio o familia.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-gold text-[#0a0a0a] font-black px-8 py-4 rounded-2xl hover:shadow-[0_0_40px_rgba(214,167,88,0.4)] transition-all duration-300 text-sm tracking-wide"
            >
              CONTÁCTANOS HOY
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
}
