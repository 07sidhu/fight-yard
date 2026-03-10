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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      transition: 'all 0.3s ease',
      backgroundColor: scrolled ? 'rgba(10,10,10,0.98)' : 'rgba(10,10,10,0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: scrolled ? '1px solid #2a2a2a' : '1px solid rgba(255,255,255,0.05)',
      padding: '0 2rem',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        height: '70px',
      }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <Image src="/logo.jpg" alt="Fight Yard" width={48} height={48}
            style={{ borderRadius: '50%', border: '2px solid var(--accent)' }} />
          <span style={{
            fontFamily: 'Bebas Neue, cursive',
            fontSize: '1.6rem', color: '#F5F0E8',
            letterSpacing: '2px',
          }}>Fight Yard</span>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
          className="hidden md:flex">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '1rem', fontWeight: 600,
              color: '#9a9a8a', textDecoration: 'none',
              letterSpacing: '1px', textTransform: 'uppercase',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
              onMouseLeave={e => (e.currentTarget.style.color = '#9a9a8a')}
            >{link.label}</Link>
          ))}

          {/* Join Now */}
          <Link href="/contact" style={{
            backgroundColor: 'var(--accent)',
            color: '#0a0a0a',
            padding: '2px 2px',
            fontFamily: 'Bebas Neue, cursive',
            fontSize: '1rem', letterSpacing: '2px',
            textDecoration: 'none',
            border: '1px solid var(--accent)',
            borderRadius: '5px',
            transition: 'all 0.2s',
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

        {/* Mobile Hamburger */}
        <button
          className="flex md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'none', padding: '8px' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', width: '24px', height: '2px',
                backgroundColor: 'var(--accent)',
                transition: 'all 0.3s',
                transform: menuOpen
                  ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                  : i === 2 ? 'rotate(-45deg) translate(5px, -5px)'
                  : 'scaleX(0)'
                  : 'none',
              }} />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          backgroundColor: 'rgba(10,10,10,0.98)',
          borderTop: '1px solid #2a2a2a',
          padding: '1.5rem 2rem',
          display: 'flex', flexDirection: 'column', gap: '1.2rem',
        }}>
          {navLinks.map(link => (
            <Link key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '1.2rem', fontWeight: 600,
                color: '#F5F0E8', textDecoration: 'none',
                letterSpacing: '2px', textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = '#F5F0E8')}
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
    </nav>
  )
}