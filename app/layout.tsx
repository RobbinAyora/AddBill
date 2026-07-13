import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import FloatingActions from '@/components/FloatingActions'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ subsets: ['latin'], weight: ['400','500','600','700','800'], variable: '--font-poppins' })

export const metadata: Metadata = {
  title: 'Addbill Construction Solutions Limited',
  description: 'Engineering excellence and construction solutions delivered on time. Building tomorrow\'s infrastructure today.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${poppins.variable}`} style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
      <body className="antialiased bg-background font-sans" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
        {children}
        <FloatingActions />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
