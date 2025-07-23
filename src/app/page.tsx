'use client'

import { useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'

export default function Home() {
  useEffect(() => {
    // Initialize smooth scrolling
    const initSmoothScroll = async () => {
      try {
        const Lenis = (await import('lenis')).default
        const lenis = new Lenis()

        function raf(time: number) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
      } catch (error) {
        console.log('Lenis not available, using default scroll')
      }
    }

    initSmoothScroll()
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <Hero />
    </main>
  )
}