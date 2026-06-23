'use client';

import { motion } from 'framer-motion';
import { Instagram, Facebook, Youtube, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const productLinks = [
  { label: 'Chifles', href: '/productos' },
  { label: 'Papitas', href: '/productos' },
  { label: 'Bebidas', href: '/productos' },
  { label: 'Licores', href: '/productos' },
  { label: 'Alfajores', href: '/productos' },
  { label: 'Marcianos', href: '/productos' },
];
const companyLinks = [
  { label: 'Sobre nosotros', href: '/nosotros' },
  { label: 'Distribución', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
  { label: 'Catálogo', href: '/productos' },
];
const legalLinks = ['Términos y condiciones', 'Política de privacidad', 'Cookies'];

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden" style={{ background: '#080808', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gold/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 mb-14">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link
                href="/"
                className="flex items-center gap-3 mb-5"
              >
                <div className="w-11 h-11 rounded-xl bg-gold flex items-center justify-center">
                  <span className="text-[#0a0a0a] font-black text-lg">P</span>
                </div>
                <div>
                  <div className="text-white font-bold text-base tracking-wider">PARDOS</div>
                  <div className="text-gold text-[10px] font-medium tracking-[0.2em] uppercase">Alimentos E.I.R.K.</div>
                </div>
              </Link>

              <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-[280px]">
                Empresa 100% peruana especializada en la comercialización y distribución de alimentos de alta calidad.
              </p>

              <div className="flex gap-3">
                {[
                  { icon: Instagram, href: 'https://instagram.com' },
                  { icon: Facebook, href: 'https://facebook.com' },
                  { icon: Youtube, href: 'https://youtube.com' },
                  { icon: Mail, href: 'mailto:contacto@pardosalimentos.com' },
                ].map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white/35 hover:text-gold transition-all duration-200 hover:-translate-y-1"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Productos</h4>
            <ul className="space-y-3">
              {productLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-white/40 hover:text-gold text-sm transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Empresa</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-white/40 hover:text-gold text-sm transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/40 text-sm">
                <Phone className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                +51 999 999 999
              </li>
              <li className="flex items-center gap-2 text-white/40 text-sm">
                <Mail className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <span className="break-all">contacto@pardosalimentos.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.06] mb-7" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {year} Pardos Alimentos E.I.R.K. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap gap-5 justify-center">
            {legalLinks.map((link, i) => (
              <a key={i} href="#" className="text-white/25 text-xs hover:text-white/50 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
