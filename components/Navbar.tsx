'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Programs', href: '/programs' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Founders', href: '/founders' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled || menuOpen
          ? 'rgba(10,10,10,0.98)'
          : 'rgba(10,10,10,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid #2a2a2a' : '1px solid rgba(255,255,255,0.05)',
        padding: '0 1.5rem',
      }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px',
        }}>

          {/* Logo */}
          <Link href="/" style={{
            display: 'flex', alignItems: 'center',
            gap: '8px', textDecoration: 'none',
            flexShrink: 0,
          }}>
            <Image src="/logo.jpg" alt="Fight Yard" width={40} height={40}
              style={{ borderRadius: '50%', border: '2px solid var(--accent)' }} />
            <span style={{
              fontFamily: 'Bebas Neue, cursive',
              fontSize: '1.4rem', color: '#F5F0E8',
              letterSpacing: '2px', whiteSpace: 'nowrap',
            }}>Fight Yard</span>
          </Link>

          {/* Desktop Links — hidden on mobile */}
          {!isMobile && (
            <div style={{ display: 'flex', gap: '1.8rem', alignItems: 'center' }}>
              {navLinks.map(link => (
                <Link key={link.href} href={link.href} style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: '1rem', fontWeight: 600,
                  color: '#9a9a8a', textDecoration: 'none',
                  letterSpacing: '1px', textTransform: 'uppercase',
                  transition: 'color 0.2s', whiteSpace: 'nowrap',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#9a9a8a')}
                >{link.label}</Link>
              ))}

              <Link href="/contact" style={{
                backgroundColor: 'var(--accent)',
                color: '#0a0a0a',
                padding: '6px 16px',
                fontFamily: 'Bebas Neue, cursive',
                fontSize: '0.9rem', letterSpacing: '2px',
                textDecoration: 'none',
                border: '1px solid var(--accent)',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = 'var(--accent)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'var(--accent)'
                  e.currentTarget.style.color = '#0a0a0a'
                }}
              >Join Now</Link>
            </div>
          )}

          {/* Hamburger — shown on mobile only */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: 'none', border: 'none',
                cursor: 'pointer', padding: '8px',
                display: 'flex', flexDirection: 'column',
                gap: '5px', flexShrink: 0,
              }}
            >
              {[0, 1, 2].map(i => (
                <span key={i} style={{
                  display: 'block', width: '24px', height: '2px',
                  backgroundColor: 'var(--accent)',
                  transition: 'all 0.3s',
                  transform: menuOpen
                    ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                    : i === 1 ? 'scaleX(0)'
                    : 'rotate(-45deg) translate(5px, -5px)'
                    : 'none',
                }} />
              ))}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && menuOpen && (
          <div style={{
            borderTop: '1px solid #2a2a2a',
            padding: '1.2rem 1.5rem 1.5rem',
            display: 'flex', flexDirection: 'column', gap: '0',
          }}>
            {navLinks.map((link, i) => (
              <Link key={link.href} href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: '1.4rem', fontWeight: 600,
                  color: '#F5F0E8', textDecoration: 'none',
                  letterSpacing: '3px', textTransform: 'uppercase',
                  padding: '0.9rem 0',
                  borderBottom: i < navLinks.length - 1 ? '1px solid #1a1a1a' : 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = '#F5F0E8')}
              >{link.label}</Link>
            ))}

            <Link href="/contact"
              onClick={() => setMenuOpen(false)}
              style={{
                backgroundColor: 'var(--accent)', color: '#0a0a0a',
                padding: '12px 20px',
                fontFamily: 'Bebas Neue, cursive',
                fontSize: '1.1rem', letterSpacing: '3px',
                textDecoration: 'none', textAlign: 'center',
                marginTop: '1rem', display: 'block',
              }}>Join Now</Link>
          </div>
        )}
      </nav>
    </>
  )
}