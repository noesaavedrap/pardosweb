import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pardosalimentos.com'),
  title: {
    default: 'Pardos Alimentos E.I.R.K. | Calidad que transforma momentos',
    template: '%s | Pardos Alimentos',
  },
  description: 'Empresa peruana especializada en la comercialización y distribución de alimentos y productos de consumo. Calidad premium, distribución nacional y atención 24/7.',
  keywords: [
    'Pardos Alimentos',
    'alimentos peruanos',
    'distribución de alimentos',
    'chifles',
    'papitas',
    'bebidas',
    'alfajores',
    'licores',
    'marcianos',
    'productos premium',
    'distribuidora Peru',
  ],
  authors: [{ name: 'Pardos Alimentos E.I.R.K.' }],
  creator: 'Pardos Alimentos E.I.R.K.',
  publisher: 'Pardos Alimentos E.I.R.K.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: 'https://pardosalimentos.com',
    siteName: 'Pardos Alimentos',
    title: 'Pardos Alimentos E.I.R.K. | Calidad que transforma momentos',
    description: 'Empresa peruana especializada en la comercialización y distribución de alimentos y productos de consumo.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pardos Alimentos - Distribuidora Premium',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pardos Alimentos E.I.R.K.',
    description: 'Calidad que transforma momentos. Empresa peruana especializada en distribución de alimentos.',
    images: ['/og-image.jpg'],
    creator: '@pardosalimentos',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-verification-code',
  },
  alternates: {
    canonical: 'https://pardosalimentos.com',
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: '#060606',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Pardos Alimentos E.I.R.K.',
  url: 'https://pardosalimentos.com',
  logo: 'https://pardosalimentos.com/logo.png',
  description: 'Empresa peruana especializada en la comercialización y distribución de alimentos y productos de consumo.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'PE',
    addressLocality: 'Lima',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+51-945-881-587',
    contactType: 'Ventas',
    availableLanguage: 'Spanish',
  },
  sameAs: [
    'https://www.instagram.com/pardosalimentos',
    'https://www.tiktok.com/@pardosalimentos',
    'https://www.facebook.com/pardosalimentos',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-white antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
