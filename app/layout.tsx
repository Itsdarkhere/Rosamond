import Nav from '@/components/Nav'
import './globals.css'
import type { Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif } from 'next/font/google'
import Footer from '@/components/Footer'
import ProgressProvider from '@/components/ProgressProvider'

const sans = Instrument_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const serif = Instrument_Serif({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Rosamond construction',
  description: 'Rosamond construction',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable}`}>
        <Nav />
        <ProgressProvider>
          {children}
        </ProgressProvider>
        <Footer />
      </body>
    </html>
  )
}
