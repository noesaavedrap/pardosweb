'use client';

import dynamic from 'next/dynamic';
import { Navigation } from '@/components/ui/navigation';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';

const HeroSection = dynamic(
  () => import('@/components/sections/hero-section').then(m => m.HeroSection),
  { ssr: false }
);
const EmpresaSection = dynamic(
  () => import('@/components/sections/empresa-section').then(m => m.EmpresaSection),
  { ssr: false }
);
const ProductosSection = dynamic(
  () => import('@/components/sections/productos-section').then(m => m.ProductosSection),
  { ssr: false }
);
const ExperienciaSection = dynamic(
  () => import('@/components/sections/experiencia-section').then(m => m.ExperienciaSection),
  { ssr: false }
);
const TestimoniosSection = dynamic(
  () => import('@/components/sections/testimonios-section').then(m => m.TestimoniosSection),
  { ssr: false }
);
const ContactoSection = dynamic(
  () => import('@/components/sections/contacto-section').then(m => m.ContactoSection),
  { ssr: false }
);
const FooterSection = dynamic(
  () => import('@/components/sections/footer-section').then(m => m.FooterSection),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="relative overflow-x-hidden" style={{ background: '#080808' }}>
      <Navigation />
      <HeroSection />
      <EmpresaSection />
      <ProductosSection />
      <ExperienciaSection />
      <TestimoniosSection />
      <ContactoSection />
      <FooterSection />
      <WhatsAppButton />
    </main>
  );
}
