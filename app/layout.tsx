import Nav from '@/components/Nav'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import ProgressProvider from '@/components/ProgressProvider'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <Nav />
        <ProgressProvider>
          {children}
        </ProgressProvider>
        <Footer />
      </body>
    </html>
  )
}
