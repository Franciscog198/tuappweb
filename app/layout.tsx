import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { site } from '@/lib/site'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-jakarta',
  display: 'swap',
})

const title = 'TuApp | Software, equipamiento y soporte que se adaptan a tu negocio'
const description =
  'Gestioná, automatizá y hacé crecer tu negocio con una solución que se adapta a tus procesos. Software, PC, impresoras térmicas, instalación, soporte técnico y mantenimiento en un solo lugar.'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  applicationName: 'TuApp',
  keywords: [
    'software de gestión',
    'sistema para negocios',
    'automatización de procesos',
    'sistema para rotisería',
    'impresora térmica',
    'soporte técnico',
    'digitalizar mi negocio',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: '/',
    siteName: 'TuApp',
    title,
    description,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'TuApp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0b0a1f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-AR" className={jakarta.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
