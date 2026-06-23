'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart } from 'lucide-react';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#empresa' },
  { label: 'Productos', href: '#productos' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsMobileMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#inicio"
              onClick={e => { e.preventDefault(); scrollTo('#inicio'); }}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-9 h-9 rounded-lg bg-gold flex items-center justify-center shadow-gold">
                <span className="text-[#0a0a0a] font-black text-sm tracking-tight">P</span>
              </div>
              <div className="leading-tight">
                <div className="text-white font-bold text-sm tracking-wider">PARDOS</div>
                <div className="text-gold text-[9px] font-medium tracking-[0.2em] uppercase">Alimentos E.I.R.K.</div>
              </div>
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={e => { e.preventDefault(); scrollTo(link.href); }}
                  className="text-white/60 hover:text-white text-[13px] font-medium tracking-wide transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Right actions */}
            <div className="hidden lg:flex items-center gap-3">
              <button className="w-9 h-9 flex items-center justify-center text-white/50 hover:text-white transition-colors">
                <ShoppingCart className="w-4.5 h-4.5" />
              </button>
              <a
                href="#contacto"
                onClick={e => { e.preventDefault(); scrollTo('#contacto'); }}
                className="bg-gold hover:bg-gold/90 text-[#0a0a0a] font-bold text-[13px] px-5 py-2 rounded-lg transition-all duration-200 hover:shadow-gold tracking-wide"
              >
                CATÁLOGO
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white/70"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-xl lg:hidden flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={e => { e.preventDefault(); scrollTo(link.href); }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="text-white text-2xl font-semibold hover:text-gold transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contacto"
              onClick={e => { e.preventDefault(); scrollTo('#contacto'); }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="bg-gold text-[#0a0a0a] font-bold text-lg px-8 py-3 rounded-xl mt-4"
            >
              CATÁLOGO
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
