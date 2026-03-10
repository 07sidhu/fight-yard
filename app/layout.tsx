import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import PageTransition from '@/components/PageTransition'
import SmoothScroll from '@/components/SmoothScroll'

export const metadata: Metadata = {
  title: 'Fight Yard — Martial Arts Gym, Durg',
  description: 'Train MMA, Wrestling & Muay Thai with India-level champions at Fight Yard, Durg, Chhattisgarh.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ cursor: 'none' }}>
        <SmoothScroll />
        <CustomCursor />
        <Navbar />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  )
}