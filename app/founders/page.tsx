'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const founders = [
  {
    id: 'founder1',
    name: 'Arjun Singh Thakur',
    role: 'Co-Founder & Head Coach',
    discipline: 'MMA / Wrestling',
    bio: 'Arjun represented India at international MMA competitions, competing against athletes from across Asia. With over a decade of training experience, he brings world-class technique and championship mentality to every session at Fight Yard.',
    achievements: [
      'Represented India at International MMA Championship',
      'Gold Medalist — State Wrestling Championship',
      'Certified MMA Coach — Level 2',
      '10+ years competitive experience',
    ],
    photo: '/awardclear.jpeg',
    number: '01',
  },
  {
    id: 'founder2',
    name: 'Rahul Deshmukh',
    role: 'Co-Founder & Striking Coach',
    discipline: 'Muay Thai / MMA',
    bio: 'Rahul is one of Chhattisgarh\'s most decorated Muay Thai practitioners. Having trained in Thailand and competed internationally under the Indian flag, he brings authentic striking knowledge that is rarely found outside elite fight camps.',
    achievements: [
      'Represented India at Southeast Asia MMA Tournament',
      'Trained at renowned Muay Thai camps in Thailand',
      'State Muay Thai Champion — 3 consecutive years',
      'Licensed Combat Sports Coach',
    ],
    photo: '/award.jpeg',
    number: '02',
  },
]

export default function FoundersPage() {
  const [active, setActive] = useState('founder1')
  const founder = founders.find(f => f.id === active)!

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>

      {/* ── HERO ── */}
      <section style={{
        paddingTop: '120px', paddingBottom: '4rem',
        paddingLeft: '2rem', paddingRight: '2rem',
        borderBottom: '1px solid var(--border)',
        background: 'radial-gradient(ellipse at top, var(--bg-secondary) 0%, var(--bg-primary) 70%)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="accent-line" />
          <h1 className="heading-xl" style={{ marginBottom: '1rem' }}>
            The<br />
            <span style={{ color: 'var(--accent)' }}>Founders</span>
          </h1>
          <p className="body-text" style={{ maxWidth: '520px' }}>
            Fight Yard was built by fighters who represented India on the
            international stage. They came back home with one goal — to build
            something that did not exist in Chhattisgarh.
          </p>
        </div>
      </section>

      {/* ── FOUNDER SELECTOR ── */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Selector tabs */}
          <div style={{
            display: 'flex', gap: '1px',
            backgroundColor: 'var(--border)',
            marginBottom: '3rem',
            width: 'fit-content',
          }}>
            {founders.map(f => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                style={{
                  backgroundColor: active === f.id ? 'var(--accent)' : 'var(--bg-secondary)',
                  border: 'none', cursor: 'none',
                  padding: '0.9rem 2.5rem',
                  fontFamily: 'Bebas Neue, cursive',
                  fontSize: '1.2rem', letterSpacing: '3px',
                  color: active === f.id ? 'var(--bg-dark)' : 'var(--text-muted)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  if (active !== f.id) e.currentTarget.style.color = 'var(--text-primary)'
                }}
                onMouseLeave={e => {
                  if (active !== f.id) e.currentTarget.style.color = 'var(--text-muted)'
                }}
              >{f.name.split(' ')[0]}</button>
            ))}
          </div>

          {/* Founder Content */}
          <div key={active} style={{ animation: 'fadeUp 0.4s ease both' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.2fr',
              gap: '4rem', alignItems: 'start',
            }} className="founder-grid">

              {/* Left — Photo */}
              <div style={{ position: 'relative' }}>
                {/* Number watermark */}
                <div style={{
                  position: 'absolute', top: '-2rem', left: '-1rem',
                  fontFamily: 'Bebas Neue, cursive',
                  fontSize: '8rem', color: 'var(--watermark)',
                  lineHeight: 1, zIndex: 0,
                  userSelect: 'none', pointerEvents: 'none',
                }}>{founder.number}</div>

                {/* Gold corners */}
                <div style={{
                  position: 'absolute', top: '-10px', left: '-10px',
                  width: '50px', height: '50px',
                  borderTop: '2px solid var(--accent)',
                  borderLeft: '2px solid var(--accent)',
                  zIndex: 2,
                }} />
                <div style={{
                  position: 'absolute', bottom: '-10px', right: '-10px',
                  width: '50px', height: '50px',
                  borderBottom: '2px solid var(--accent)',
                  borderRight: '2px solid var(--accent)',
                  zIndex: 2,
                }} />

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <Image
                    src={founder.photo}
                    alt={founder.name}
                    width={600} height={700}
                    style={{
                      width: '100%', height: '480px',
                      objectFit: 'cover', display: 'block',
                    }}
                  />
                </div>

                {/* Discipline tag */}
                <div style={{
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                  borderTop: '2px solid var(--accent)',
                  padding: '1rem 1.5rem',
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <span style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontSize: '0.8rem', letterSpacing: '3px',
                    color: 'var(--text-muted)', textTransform: 'uppercase',
                  }}>Discipline</span>
                  <span style={{
                    fontFamily: 'Bebas Neue, cursive',
                    fontSize: '1.1rem', letterSpacing: '2px',
                    color: 'var(--accent)',
                  }}>{founder.discipline}</span>
                </div>
              </div>

              {/* Right — Info */}
              <div>
                <p className="label-text" style={{ marginBottom: '0.4rem' }}>
                  {founder.role}
                </p>

                <h2 className="heading-lg" style={{ marginBottom: '1.5rem' }}>
                  {founder.name}
                </h2>

                <p className="body-text" style={{
                  marginBottom: '2.5rem',
                  borderLeft: '2px solid var(--accent)',
                  paddingLeft: '1.2rem',
                }}>{founder.bio}</p>

                {/* Achievements */}
                <h3 className="heading-sm" style={{ marginBottom: '1.2rem' }}>
                  Achievements
                </h3>

                <div style={{ marginBottom: '3rem' }}>
                  {founder.achievements.map((a, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex', alignItems: 'flex-start',
                        gap: '12px', marginBottom: '1rem',
                        padding: '1rem',
                        backgroundColor: 'var(--bg-secondary)',
                        border: '1px solid var(--border)',
                        transition: 'border-color 0.2s',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--accent)'
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                        style={{ flexShrink: 0, marginTop: '2px' }}>
                        <path d="M8 21H16M12 17V21M7 4H17V11C17 13.76 14.76 16 12 16C9.24 16 7 13.76 7 11V4Z"
                          stroke="var(--accent)" strokeWidth="1.5"
                          strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7 6H4C4 6 4 10 7 11M17 6H20C20 6 20 10 17 11"
                          stroke="var(--accent)" strokeWidth="1.5"
                          strokeLinecap="round" />
                      </svg>
                      <span className="body-text" style={{ fontSize: '1rem', lineHeight: 1.5 }}>
                        {a}
                      </span>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="btn-primary">
                  Train With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDIA BANNER ── */}
      <section style={{
        padding: '3rem 2rem',
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'Bebas Neue, cursive',
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            color: 'var(--text-primary)', letterSpacing: '4px',
            lineHeight: 1.2,
          }}>
            Proudly Represented{' '}
            <span style={{ color: 'var(--accent)' }}>India 🇮🇳</span>{' '}
            on the International Stage
          </p>
          <p style={{
            fontFamily: 'Barlow Condensed, sans-serif',
            color: 'var(--text-muted)', fontSize: '1rem',
            letterSpacing: '2px', marginTop: '0.8rem',
            textTransform: 'uppercase',
          }}>Now coaching the next generation of fighters from Chhattisgarh</p>
        </div>
      </section>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}