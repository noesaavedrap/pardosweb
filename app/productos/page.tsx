'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Navigation } from '@/components/ui/navigation';
import { FooterSection } from '@/components/sections/footer-section';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { Search, X, ArrowRight, Filter, Star, Package } from 'lucide-react';
import Link from 'next/link';

type Category = 'todos' | 'snacks' | 'bebidas' | 'dulces' | 'licores' | 'helados';

interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  features: string[];
  color: string;
  image: string;
  badge?: string;
  rating: number;
  unit: string;
}

const products: Product[] = [
  {
    id: 'chifles-clasicos',
    name: 'Chifles Clásicos',
    category: 'snacks',
    description: 'Deliciosas láminas de plátano verde crujientes, elaboradas con plátanos seleccionados del norte del Perú.',
    features: ['Sin conservantes', 'Artesanal', 'Empaque sellado', 'Familiar'],
    color: '#F4C542',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=700',
    badge: 'TOP',
    rating: 5,
    unit: 'Caja x 24 uni',
  },
  {
    id: 'chifles-picantes',
    name: 'Chifles Picantes',
    category: 'snacks',
    description: 'La versión picante de nuestros famosos chifles, con el toque perfecto de ají para los amantes del sabor intenso.',
    features: ['Sabor intenso', 'Sin glutamato', 'Empaque resellable', 'Picante natural'],
    color: '#E85D04',
    image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=700',
    rating: 4.8,
    unit: 'Caja x 24 uni',
  },
  {
    id: 'papitas-sal',
    name: 'Papitas con Sal',
    category: 'snacks',
    description: 'Papas fritas doradas con sal de mar. El clásico snack peruano que nunca falla.',
    features: ['Sal de mar', 'Crujiente', 'Variedad familiar', 'Sin artificial'],
    color: '#D4813A',
    image: 'https://images.pexels.com/photos/4040066/pexels-photo-4040066.jpeg?auto=compress&cs=tinysrgb&w=700',
    badge: 'POPULAR',
    rating: 4.9,
    unit: 'Caja x 30 uni',
  },
  {
    id: 'papitas-limon',
    name: 'Papitas al Limón',
    category: 'snacks',
    description: 'Nuestras papitas crujientes con un toque de limón fresco que las hace irresistibles.',
    features: ['Limón natural', 'Baja en grasa', 'Tostadas', 'Snack ligero'],
    color: '#A8D96B',
    image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=700',
    rating: 4.7,
    unit: 'Caja x 30 uni',
  },
  {
    id: 'gaseosa-cola',
    name: 'Gaseosa Cola',
    category: 'bebidas',
    description: 'Refrescante bebida gaseosa de cola con el sabor que todos conocen y aman.',
    features: ['Carbonatada', 'Sabor intenso', 'Personal y familiar', 'Fría perfecta'],
    color: '#CC0000',
    image: 'https://images.pexels.com/photos/5052875/pexels-photo-5052875.jpeg?auto=compress&cs=tinysrgb&w=700',
    badge: 'NUEVO',
    rating: 4.5,
    unit: 'Caja x 12 bot',
  },
  {
    id: 'agua-mineral',
    name: 'Agua Mineral',
    category: 'bebidas',
    description: 'Agua mineral natural de manantial peruano, pura y cristalina.',
    features: ['Natural', 'Sin gas', 'Pureza certificada', 'Origen Perú'],
    color: '#00A8E8',
    image: 'https://images.pexels.com/photos/1292294/pexels-photo-1292294.jpeg?auto=compress&cs=tinysrgb&w=700',
    rating: 4.6,
    unit: 'Caja x 24 bot',
  },
  {
    id: 'chicha-morada',
    name: 'Chicha Morada',
    category: 'bebidas',
    description: 'La tradicional bebida peruana de maíz morado con notas de canela y clavo.',
    features: ['Tradicional', 'Maíz morado', 'Receta ancestral', 'Natural'],
    color: '#7B2D8B',
    image: 'https://images.pexels.com/photos/3407777/pexels-photo-3407777.jpeg?auto=compress&cs=tinysrgb&w=700',
    badge: 'PERUANO',
    rating: 4.9,
    unit: 'Caja x 12 bot',
  },
  {
    id: 'pisco-quebranta',
    name: 'Pisco Quebranta',
    category: 'licores',
    description: 'Pisco peruano premium de uva quebranta, destilado en los valles más selectos.',
    features: ['DOC Perú', 'Añejo en roble', 'Uva quebranta', 'Premium'],
    color: '#C9A227',
    image: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=700',
    badge: 'PREMIUM',
    rating: 5,
    unit: 'Caja x 6 bot',
  },
  {
    id: 'ron-añejo',
    name: 'Ron Añejo',
    category: 'licores',
    description: 'Ron nacional añejado con el proceso tradicional que le da un sabor único.',
    features: ['Añejo 3 años', 'Proceso artesanal', 'Notas caramelizadas', 'Élite'],
    color: '#8B4513',
    image: 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=700',
    rating: 4.8,
    unit: 'Caja x 6 bot',
  },
  {
    id: 'alfajores-manjar',
    name: 'Alfajores de Manjar',
    category: 'dulces',
    description: 'Los auténticos alfajores peruanos rellenos de manjar blanco cremoso.',
    features: ['Manjar premium', 'Masa artesanal', 'Bañado en azúcar', 'Caja regalo'],
    color: '#D4813A',
    image: 'https://images.pexels.com/photos/6210870/pexels-photo-6210870.jpeg?auto=compress&cs=tinysrgb&w=700',
    badge: 'CLÁSICO',
    rating: 5,
    unit: 'Caja x 12 uni',
  },
  {
    id: 'alfajores-chocolate',
    name: 'Alfajores de Chocolate',
    category: 'dulces',
    description: 'Nuestros clásicos alfajores cubiertos en chocolate oscuro de primera calidad.',
    features: ['Chocolate oscuro', 'Manjar relleno', 'Tamaño premium', 'Empaque elegante'],
    color: '#3E1A00',
    image: 'https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=700',
    rating: 4.9,
    unit: 'Caja x 12 uni',
  },
  {
    id: 'marcianos-fresa',
    name: 'Marcianos de Fresa',
    category: 'helados',
    description: 'Refrescantes helados de fresa con el color rosa que los hace únicos.',
    features: ['Fresa natural', 'Sin colorantes', 'Familiar', 'Fresco'],
    color: '#FF69B4',
    image: 'https://images.pexels.com/photos/1352274/pexels-photo-1352274.jpeg?auto=compress&cs=tinysrgb&w=700',
    badge: 'VERANO',
    rating: 4.7,
    unit: 'Caja x 24 uni',
  },
];

const categories: { id: Category; label: string; count: number }[] = [
  { id: 'todos', label: 'Todos', count: products.length },
  { id: 'snacks', label: 'Snacks', count: products.filter(p => p.category === 'snacks').length },
  { id: 'bebidas', label: 'Bebidas', count: products.filter(p => p.category === 'bebidas').length },
  { id: 'licores', label: 'Licores', count: products.filter(p => p.category === 'licores').length },
  { id: 'dulces', label: 'Dulces', count: products.filter(p => p.category === 'dulces').length },
  { id: 'helados', label: 'Helados', count: products.filter(p => p.category === 'helados').length },
];

function ProductCard({ product, onClick }: { product: Product; onClick: () => void }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.88 }}
      transition={{ duration: 0.35 }}
      onClick={onClick}
      className="group cursor-pointer rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
      style={{ background: '#111', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="relative h-52 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 z-10" style={{ background: product.color }} />
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5 }}
          style={{ filter: 'brightness(0.75)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
        {product.badge && (
          <div
            className="absolute top-3 right-3 px-2.5 py-1 rounded-lg text-[10px] font-black tracking-widest text-[#0a0a0a]"
            style={{ background: product.color }}
          >
            {product.badge}
          </div>
        )}
        <div className="absolute bottom-3 left-3 flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-white/20'}`}
            />
          ))}
        </div>
      </div>
      <div className="p-5">
        <div className="text-[10px] font-bold tracking-[0.2em] uppercase mb-1.5 capitalize" style={{ color: product.color }}>
          {product.category}
        </div>
        <h3 className="text-white font-black text-xl mb-2 group-hover:text-gold transition-colors duration-200">
          {product.name}
        </h3>
        <p className="text-white/40 text-xs line-clamp-2 leading-relaxed mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-white/25 text-[11px]">{product.unit}</span>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-2 group-hover:translate-x-0"
            style={{ background: product.color }}
          >
            <ArrowRight className="w-3.5 h-3.5 text-[#0a0a0a]" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{ background: 'rgba(0,0,0,0.92)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.85, y: 50 }}
        transition={{ type: 'spring', damping: 24, stiffness: 200 }}
        onClick={e => e.stopPropagation()}
        className="w-full max-w-3xl rounded-3xl overflow-hidden"
        style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.08)' }}
      >
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[250px] md:min-h-[400px]">
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: product.color }} />
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" style={{ filter: 'brightness(0.6)' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0f0f0f]/60 hidden md:block" />
            {product.badge && (
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl text-xs font-black tracking-wider text-[#0a0a0a]" style={{ background: product.color }}>
                {product.badge}
              </div>
            )}
          </div>
          <div className="p-8 flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="text-[11px] font-bold tracking-[0.2em] uppercase mb-1.5 capitalize" style={{ color: product.color }}>
                  {product.category}
                </div>
                <h2 className="text-2xl font-black text-white">{product.name}</h2>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all flex-shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex gap-0.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-white/20'}`} />
              ))}
              <span className="text-white/40 text-sm ml-1">{product.rating}/5</span>
            </div>

            <p className="text-white/60 leading-relaxed text-sm mb-6">{product.description}</p>

            <div className="mb-6">
              <div className="text-white/30 text-xs uppercase tracking-wider mb-3">Características</div>
              <div className="grid grid-cols-2 gap-2">
                {product.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/60 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: product.color }} />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6 p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="text-white/30 text-[11px] uppercase tracking-wider mb-0.5">Presentación</div>
              <div className="text-white font-semibold text-sm">{product.unit}</div>
            </div>

            <div className="mt-auto flex gap-3">
              <Link
                href="/contacto"
                className="flex-1 py-3.5 rounded-xl font-bold text-[#0a0a0a] text-sm flex items-center justify-center gap-2"
                style={{ background: product.color }}
              >
                Solicitar cotización
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProductosPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('todos');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Product | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const filtered = products.filter(p => {
    const matchCat = activeCategory === 'todos' || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen" style={{ background: '#080808' }}>
      <Navigation />

      {/* Hero banner */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #0c0c0c 0%, #080808 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-gold/6 rounded-full blur-[120px]" />
          <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-gold/4 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">CATÁLOGO COMPLETO</span>
            <h1 className="text-4xl md:text-[3.5rem] lg:text-[4.5rem] font-black text-white leading-tight mb-4">
              Nuestros{' '}
              <span className="italic text-gold" style={{ fontFamily: 'Georgia, serif' }}>Productos</span>
            </h1>
            <p className="text-white/45 text-lg max-w-xl mx-auto">
              Más de 50 productos seleccionados con los más altos estándares de calidad para tu hogar y negocio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters + Search */}
      <section className="sticky top-[68px] z-30 border-b border-white/[0.05]" style={{ background: 'rgba(8,8,8,0.95)', backdropFilter: 'blur(20px)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category pills */}
            <div className="flex gap-2 flex-wrap">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all duration-200 ${
                    activeCategory === cat.id
                      ? 'bg-gold text-[#0a0a0a]'
                      : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white border border-white/8'
                  }`}
                >
                  {cat.label}
                  <span className={`ml-1.5 text-[10px] ${activeCategory === cat.id ? 'text-[#0a0a0a]/60' : 'text-white/30'}`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Buscar productos..."
                className="w-full pl-9 pr-9 py-2.5 rounded-xl text-white placeholder:text-white/25 text-sm focus:outline-none transition-all"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between mb-8">
            <span className="text-white/35 text-sm">
              {filtered.length} producto{filtered.length !== 1 ? 's' : ''} encontrado{filtered.length !== 1 ? 's' : ''}
            </span>
            {(search || activeCategory !== 'todos') && (
              <button
                onClick={() => { setSearch(''); setActiveCategory('todos'); }}
                className="flex items-center gap-1.5 text-gold/70 hover:text-gold text-xs transition-colors"
              >
                <X className="w-3.5 h-3.5" />
                Limpiar filtros
              </button>
            )}
          </div>

          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} onClick={() => setSelected(product)} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-24"
              >
                <Package className="w-12 h-12 text-white/15 mx-auto mb-4" />
                <div className="text-white/30 text-lg font-semibold mb-1">Sin resultados</div>
                <div className="text-white/20 text-sm">Intenta con otra búsqueda o categoría</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="rounded-3xl p-12"
            style={{ background: 'linear-gradient(135deg, rgba(214,167,88,0.12) 0%, rgba(214,167,88,0.04) 100%)', border: '1px solid rgba(214,167,88,0.2)' }}
          >
            <h2 className="text-3xl font-black text-white mb-4">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-white/50 mb-8">
              Contáctanos y te ayudamos a encontrar el producto que necesitas. Tenemos más de 50 productos disponibles.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-gold text-[#0a0a0a] font-black px-8 py-4 rounded-2xl hover:shadow-[0_0_40px_rgba(214,167,88,0.4)] transition-all duration-300 text-sm tracking-wide"
            >
              CONTACTAR AHORA
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
      <WhatsAppButton />

      <AnimatePresence>
        {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </div>
  );
}
