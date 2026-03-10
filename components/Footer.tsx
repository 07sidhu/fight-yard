'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#1a1a1a',
      borderTop: '1px solid #2a2a2a',
      padding: '3rem 2rem 1.5rem',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '2.5rem',
        marginBottom: '2rem',
      }}>
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
            <Image src="/logo.jpg" alt="Fight Yard" width={44} height={44}
              style={{ borderRadius: '50%', border: '2px solid #C9A84C' }} />
            <span style={{ fontFamily: 'Bebas Neue, cursive', fontSize: '1.4rem', color: '#E8E0D0', letterSpacing: '2px' }}>
              Fight Yard
            </span>
          </div>
          <p style={{ color: '#9a9a8a', fontSize: '0.95rem', lineHeight: 1.6, fontFamily: 'Barlow Condensed, sans-serif' }}>
            Martial Arts Gym in Durg, Chhattisgarh. Train with champions. Represent India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: '1.1rem', color: '#C9A84C', letterSpacing: '2px', marginBottom: '1rem' }}>
            Quick Links
          </h4>
          {['Programs', 'Pricing', 'Founders', 'Contact'].map(item => (
            <div key={item} style={{ marginBottom: '0.5rem' }}>
              <Link href={`/${item.toLowerCase()}`} style={{
                color: '#9a9a8a', textDecoration: 'none',
                fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.95rem',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
                onMouseLeave={e => (e.currentTarget.style.color = '#9a9a8a')}
              >→ {item}</Link>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: '1.1rem', color: '#C9A84C', letterSpacing: '2px', marginBottom: '1rem' }}>
            Contact
          </h4>
          <p style={{ color: '#9a9a8a', fontSize: '0.95rem', fontFamily: 'Barlow Condensed, sans-serif', marginBottom: '0.5rem' }}>
            📍 Malviya Nagar, Durg, CG 491001
          </p>
          <p style={{ color: '#9a9a8a', fontSize: '0.95rem', fontFamily: 'Barlow Condensed, sans-serif', marginBottom: '0.5rem' }}>
            📞 8224800078 / 9981996291
          </p>
          <a href="https://www.instagram.com/fightyard_durg/" target="_blank" rel="noopener noreferrer"
            style={{ color: '#C9A84C', fontSize: '0.95rem', fontFamily: 'Barlow Condensed, sans-serif', textDecoration: 'none' }}>
            📸 @fightyard_durg
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid #2a2a2a', paddingTop: '1.2rem',
        display: 'flex', justifyContent: 'center',
      }}>
        <p style={{ color: '#555', fontSize: '0.85rem', fontFamily: 'Barlow Condensed, sans-serif' }}>
          © 2025 Fight Yard Martial Arts Gym. All rights reserved.
        </p>
      </div>
    </footer>
  )
}