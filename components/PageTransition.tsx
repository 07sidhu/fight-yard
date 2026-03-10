'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const [firstLoad, setFirstLoad] = useState(true)

const firstLoadRef = useRef(true)

  // ── Initial page load reveal ──
  useEffect(() => {
    if (!firstLoadRef.current) return
    firstLoadRef.current = false

    const timers: ReturnType<typeof setTimeout>[] = []
    const steps = [20, 45, 70, 90, 100]

    steps.forEach((step, i) => {
      const t = setTimeout(() => {
        setProgress(step)
        if (step === 100) {
          setTimeout(() => setLoading(false), 500)
        }
      }, i * 300)
      timers.push(t)
    })

    return () => timers.forEach(clearTimeout)
  }, [])

  // ── Route change transition ──
  useEffect(() => {
    if (firstLoadRef.current) return
    const t0 = setTimeout(() => setLeaving(true), 0)
    const t1 = setTimeout(() => setLeaving(false), 600)
    return () => {
      clearTimeout(t0)
      clearTimeout(t1)
    }
  }, [pathname])

  return (
    <>
      {/* ── INITIAL LOAD SCREEN ── */}
      {loading && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 999999,
          backgroundColor: '#0a0a0a',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: '2rem',
        }}>
          {/* Logo mark */}
          <div style={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: '0.5rem',
            animation: 'fadeIn 0.5s ease both',
          }}>
            {/* Bull SVG simplified mark */}
            <div style={{
              width: '80px', height: '80px',
              border: '2px solid #C9A84C',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '0.5rem',
              animation: 'pulse 1.5s ease infinite',
            }}>
              <span style={{
                fontFamily: 'Bebas Neue, cursive',
                fontSize: '2rem', color: '#C9A84C',
                letterSpacing: '2px',
              }}>FY</span>
            </div>

            <div style={{
              fontFamily: 'Bebas Neue, cursive',
              fontSize: '2.5rem', color: '#F5F0E8',
              letterSpacing: '8px',
            }}>FIGHT YARD</div>

            <div style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '0.75rem', color: '#9a9a8a',
              letterSpacing: '5px', textTransform: 'uppercase',
            }}>Martial Arts Gym · Durg</div>
          </div>

          {/* Progress bar */}
          <div style={{
            width: '200px',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: '8px',
          }}>
            <div style={{
              width: '100%', height: '1px',
              backgroundColor: '#1a1a1a',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 0,
                height: '100%',
                width: `${progress}%`,
                backgroundColor: '#C9A84C',
                transition: 'width 0.4s ease',
                boxShadow: '0 0 8px rgba(201,168,76,0.6)',
              }} />
            </div>
            <span style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '0.7rem', color: '#555',
              letterSpacing: '3px',
            }}>{progress}%</span>
          </div>
        </div>
      )}

      {/* ── ROUTE CHANGE OVERLAY ── */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 99998,
        backgroundColor: '#0a0a0a',
        pointerEvents: leaving ? 'all' : 'none',
        opacity: leaving ? 1 : 0,
        transition: 'opacity 0.3s ease',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{
          fontFamily: 'Bebas Neue, cursive',
          fontSize: '2rem', color: '#C9A84C',
          letterSpacing: '6px',
          opacity: leaving ? 1 : 0,
          transition: 'opacity 0.2s ease 0.1s',
        }}>FIGHT YARD</div>
      </div>

      {/* ── PAGE CONTENT ── */}
      <div style={{
        opacity: loading ? 0 : 1,
        transition: 'opacity 0.6s ease',
      }}>
        {children}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(201,168,76,0.3); }
          50% { box-shadow: 0 0 0 12px rgba(201,168,76,0); }
        }
      `}</style>
    </>
  )
}