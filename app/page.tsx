'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const programs = [
  {
    title: 'MMA',
    subtitle: 'Mixed Martial Arts',
    desc: 'Complete fighter development combining striking, grappling and ground game. Train like a pro.',
    icon: '/mma.svg',
  },
  {
    title: 'Wrestling',
    subtitle: 'Competitive Wrestling',
    desc: 'Build explosive strength, takedown dominance and mat control with championship-level coaching.',
    icon: '/wrestling.svg',
  },
  {
    title: 'Muay Thai',
    subtitle: 'The Art of Eight Limbs',
    desc: 'Master punches, kicks, elbows and knees. The most powerful striking art in the world.',
    icon: '/muaythai.svg',
  },
]

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useScrollReveal()
  const programsRef = useScrollReveal()
  const foundersRef = useScrollReveal()
  const ctaRef = useScrollReveal()

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', overflowX: 'hidden' }}>

      {/* ── HERO ── */}
      <section style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}>

        {/* Halftone background */}
        <div ref={heroRef} style={{
          position: 'absolute', inset: 0, zIndex: 0,
        }}>
          {/* Halftone dots */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(circle, #C9A84C 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            opacity: 0.08,
          }} />
          {/* Aged paper gradient */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at center, var(--bg-secondary) 0%, var(--bg-primary) 65%)',
          }} />
        </div>

        {/* Torn edge bottom */}
        <div style={{
          position: 'absolute', bottom: -2, left: 0, right: 0,
          zIndex: 3, lineHeight: 0,
        }}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: '100%', height: '60px' }}>
            <path d="M0,0 L0,30 Q20,45 40,28 Q60,12 80,35 Q100,55 120,30 Q140,8 160,32 Q180,52 200,28 Q220,6 240,34 Q260,58 280,30 Q300,5 320,33 Q340,56 360,28 Q380,4 400,32 Q420,55 440,28 Q460,5 480,34 Q500,58 520,30 Q540,6 560,32 Q580,54 600,28 Q620,5 640,33 Q660,56 680,28 Q700,4 720,32 Q740,55 760,28 Q780,5 800,34 Q820,58 840,30 Q860,6 880,32 Q900,54 920,28 Q940,5 960,33 Q980,56 1000,28 Q1020,4 1040,32 Q1060,55 1080,28 Q1100,5 1120,34 Q1140,58 1160,30 Q1180,6 1200,32 Q1220,54 1240,28 Q1260,5 1280,33 Q1300,56 1320,28 Q1340,4 1360,32 Q1400,55 1440,28 L1440,60 L0,60 Z"
              fill="var(--bg-primary)" />
          </svg>
        </div>

        {/* Vignette */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(to right, var(--bg-primary) 0%, transparent 25%, transparent 75%, var(--bg-primary) 100%)',
        }} />

        {/* Hero Content */}
        <div style={{
          position: 'relative', zIndex: 2, textAlign: 'center',
          padding: '120px 1.5rem 80px', maxWidth: '1000px',
          animation: 'fadeUp 0.8s ease both',
        }}>

          {/* Vintage stamp badge top */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '12px',
            marginBottom: '2rem',
          }}>
            <div style={{ flex: 1, height: '1px', width: '60px', backgroundColor: 'var(--accent)', opacity: 0.5 }} />
            <span style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '0.7rem', letterSpacing: '5px',
              color: 'var(--accent)', textTransform: 'uppercase',
            }}>Est. Durg, Chhattisgarh</span>
            <div style={{ flex: 1, height: '1px', width: '60px', backgroundColor: 'var(--accent)', opacity: 0.5 }} />
          </div>

          {/* Main heading — newspaper style */}
          <div style={{
            border: '3px double #1a1a1a',
            padding: '2rem 3rem',
            position: 'relative',
            marginBottom: '1.5rem',
          }}>
            {/* Corner ornaments */}
            {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map(pos => (
              <div key={pos} style={{
                position: 'absolute',
                top: pos.includes('top') ? '-4px' : 'auto',
                bottom: pos.includes('bottom') ? '-4px' : 'auto',
                left: pos.includes('left') ? '-4px' : 'auto',
                right: pos.includes('right') ? '-4px' : 'auto',
                width: '12px', height: '12px',
                backgroundColor: 'var(--accent)',
              }} />
            ))}

            <h1 style={{
              fontFamily: 'Bebas Neue, cursive',
              fontSize: 'clamp(5rem, 16vw, 11rem)',
              lineHeight: 0.85, color: '#1a1a1a',
              letterSpacing: '6px',
              textShadow: '3px 3px 0px rgba(201,168,76,0.3)',
            }}>
              FIGHT<br />
              <span style={{
                WebkitTextStroke: '3px var(--accent)',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '8px',
              }}>YARD</span>
            </h1>

            {/* Divider line */}
            <div style={{
              display: 'flex', alignItems: 'center',
              gap: '1rem', margin: '1rem 0 0.8rem',
            }}>
              <div style={{ flex: 1, height: '1px', backgroundColor: '#1a1a1a', opacity: 0.3 }} />
              <span style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '0.7rem', letterSpacing: '4px',
                color: '#6a6a5a', textTransform: 'uppercase',
              }}>✦ Martial Arts Gym ✦</span>
              <div style={{ flex: 1, height: '1px', backgroundColor: '#1a1a1a', opacity: 0.3 }} />
            </div>
          </div>

          
          <a href="https://maps.app.goo.gl/tvs93ySycb1iD89e7"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              border: '1px solid #C9A84C', padding: '6px 16px',
              marginBottom: '1.5rem', textDecoration: 'none',
              transition: 'all 0.3s', cursor: 'none',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'rgba(201,168,76,0.15)'
              e.currentTarget.style.padding = '6px 24px';
              (e.currentTarget.querySelector('.badge-text') as HTMLElement).style.letterSpacing = '6px'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.padding = '6px 16px';
              (e.currentTarget.querySelector('.badge-text') as HTMLElement).style.letterSpacing = '3px'
            }}
          >
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%',
              backgroundColor: '#C9A84C', display: 'inline-block',
            }} />
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <svg width="12" height="14" viewBox="0 0 12 16" fill="none">
                <path d="M6 0C3.79 0 2 1.79 2 4C2 7 6 12 6 12C6 12 10 7 10 4C10 1.79 8.21 0 6 0ZM6 5.5C5.17 5.5 4.5 4.83 4.5 4C4.5 3.17 5.17 2.5 6 2.5C6.83 2.5 7.5 3.17 7.5 4C7.5 4.83 6.83 5.5 6 5.5Z" fill="#C9A84C" />
              </svg>
              <span className="badge-text" style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '0.8rem', letterSpacing: '3px',
                color: '#C9A84C', textTransform: 'uppercase',
                transition: 'letter-spacing 0.3s',
              }}>Durg, Chhattisgarh</span>
            </span>
          </a>

          <div style={{
            display: 'flex', gap: '0', justifyContent: 'center',
            flexWrap: 'wrap', marginBottom: '2.5rem',
          }}>
            {['Train', 'Compete', 'Represent'].map((word, i) => (
              <span key={word} style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: 'clamp(0.85rem, 2vw, 1.1rem)',
                  color: '#6a6a5a', letterSpacing: '4px',
                  textTransform: 'uppercase', padding: '4px 12px',
                  transition: 'color 0.2s, letter-spacing 0.2s',
                  cursor: 'default',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#C9A84C'
                    e.currentTarget.style.letterSpacing = '6px'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = '#6a6a5a'
                    e.currentTarget.style.letterSpacing = '4px'
                  }}
                >{word}</span>
                {i < 2 && <span style={{ color: '#C8BFA8', fontSize: '1rem' }}>·</span>}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/programs" style={{
              backgroundColor: '#1a1a1a', color: '#E8E0D0',
              padding: '14px 36px', fontFamily: 'Bebas Neue, cursive',
              fontSize: '1.1rem', letterSpacing: '3px',
              textDecoration: 'none', display: 'inline-block',
              transition: 'all 0.3s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#C9A84C'
                e.currentTarget.style.color = '#1a1a1a'
                e.currentTarget.style.letterSpacing = '6px'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#1a1a1a'
                e.currentTarget.style.color = '#E8E0D0'
                e.currentTarget.style.letterSpacing = '3px'
              }}
            >Explore Programs</Link>

            <Link href="/contact" style={{
              backgroundColor: 'transparent', color: '#1a1a1a',
              padding: '14px 36px', border: '1px solid #C8BFA8',
              fontFamily: 'Bebas Neue, cursive',
              fontSize: '1.1rem', letterSpacing: '3px',
              textDecoration: 'none', display: 'inline-block',
              transition: 'all 0.3s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#C9A84C'
                e.currentTarget.style.color = '#C9A84C'
                e.currentTarget.style.letterSpacing = '6px'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#C8BFA8'
                e.currentTarget.style.color = '#1a1a1a'
                e.currentTarget.style.letterSpacing = '3px'
              }}
            >Join Now</Link>
          </div>
        </div>

        <div style={{
          position: 'absolute', bottom: '2rem', left: '50%',
          transform: 'translateX(-50%)', zIndex: 2,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        }}>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section ref={statsRef} style={{
        borderTop: '1px solid #C8BFA8', borderBottom: '1px solid #C8BFA8',
        backgroundColor: '#DDD5C4', padding: '1.5rem 2rem',
      }}>
        <div style={{
          maxWidth: '900px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          textAlign: 'center', gap: '1rem',
        }}>
          {[
            { number: '3', label: 'Disciplines' },
            { number: 'INTERNATIONAL', label: 'Level Founders' },
            { number: 'DURG', label: 'Chhattisgarh' },
          ].map(stat => (
            <div key={stat.label}>
              <div style={{
                fontFamily: 'Bebas Neue, cursive',
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                color: '#C9A84C', letterSpacing: '2px',
              }}>{stat.number}</div>
              <div style={{
                fontFamily: 'Barlow Condensed', fontSize: '0.8rem',
                color: '#6a6a5a', letterSpacing: '2px', textTransform: 'uppercase',
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROGRAMS PREVIEW ── */}
      <section ref={programsRef} style={{ padding: 'clamp(4rem, 8vw, 7rem) 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }}>
            <div className="accent-line" />
            <h2 style={{
              fontFamily: 'Bebas Neue, cursive',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: '#1a1a1a', letterSpacing: '3px', lineHeight: 1,
            }}>Our Programs</h2>
            <p style={{
              color: '#6a6a5a', fontFamily: 'Barlow Condensed',
              fontSize: '1.1rem', marginTop: '0.5rem', letterSpacing: '1px',
            }}>Three disciplines. One mission. Become a fighter.</p>
          </div>

          <div className="programs-grid" style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5px', backgroundColor: '#C8BFA8',
          }}>
            {programs.map((p, i) => (
              <div key={p.title} style={{
                backgroundColor: '#E8E0D0', padding: '2.5rem 2rem',
                position: 'relative', overflow: 'hidden',
                transition: 'background 0.3s', cursor: 'none',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.backgroundColor = '#DDD5C4' }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.backgroundColor = '#E8E0D0' }}
              >
                <span style={{
                  position: 'absolute', top: '1rem', right: '1.5rem',
                  fontFamily: 'Bebas Neue, cursive',
                  fontSize: '5rem', color: '#D5CCBA', lineHeight: 1,
                  userSelect: 'none',
                }}>0{i + 1}</span>

                <div style={{ marginBottom: '1rem' }}>
                  <Image src={p.icon} alt={p.title} width={48} height={48}
                    style={{ filter: 'invert(74%) sepia(47%) saturate(400%) hue-rotate(5deg) brightness(85%)' }} />
                </div>
                <h3 style={{
                  fontFamily: 'Bebas Neue, cursive', fontSize: '2.2rem',
                  color: '#1a1a1a', letterSpacing: '2px', marginBottom: '0.2rem',
                }}>{p.title}</h3>
                <p style={{
                  fontFamily: 'Barlow Condensed', fontSize: '0.8rem',
                  color: '#C9A84C', letterSpacing: '3px',
                  textTransform: 'uppercase', marginBottom: '1rem',
                }}>{p.subtitle}</p>
                <p style={{
                  fontFamily: 'Barlow Condensed', color: '#6a6a5a',
                  fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem',
                }}>{p.desc}</p>
                <Link href="/programs" style={{
                  fontFamily: 'Barlow Condensed', fontSize: '0.85rem',
                  color: '#C9A84C', textDecoration: 'none',
                  letterSpacing: '2px', textTransform: 'uppercase',
                  borderBottom: '1px solid #C9A84C', paddingBottom: '2px',
                }}>Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDERS TEASER ── */}
      <section ref={foundersRef} style={{
        padding: 'clamp(4rem, 8vw, 7rem) 2rem',
        backgroundColor: '#DDD5C4',
        borderTop: '1px solid #C8BFA8',
        borderBottom: '1px solid #C8BFA8',
      }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '4rem', alignItems: 'center',
        }} className="founders-grid">
          <div>
            <div className="accent-line" />
            <h2 style={{
              fontFamily: 'Bebas Neue, cursive',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: '#1a1a1a', letterSpacing: '3px',
              lineHeight: 1, marginBottom: '1rem',
            }}>
              Trained by<br />
              <span style={{ color: '#C9A84C' }}>Champions</span>
            </h2>
            <p style={{
              fontFamily: 'Barlow Condensed', color: '#6a6a5a',
              fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem',
            }}>
              Fight Yard was founded by athletes who represented India at international MMA competitions.
              Their mission — to bring world-class martial arts training to Chhattisgarh.
            </p>
            <Link href="/founders" style={{
              backgroundColor: '#1a1a1a', color: '#E8E0D0',
              padding: '12px 30px', fontFamily: 'Bebas Neue, cursive',
              fontSize: '1rem', letterSpacing: '3px',
              textDecoration: 'none', display: 'inline-block',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#C9A84C'
                e.currentTarget.style.color = '#1a1a1a'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#1a1a1a'
                e.currentTarget.style.color = '#E8E0D0'
              }}
            >Meet the Founders</Link>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', top: '-12px', left: '-12px',
              right: '12px', bottom: '12px',
              border: '2px solid var(--accent)', zIndex: 0,
              transition: 'box-shadow 0.4s ease',
            }} />
            <div style={{
              position: 'relative', zIndex: 1,
              transition: 'box-shadow 0.4s ease, transform 0.4s ease',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 40px rgba(201,168,76,0.45), 0 2px 12px rgba(201,168,76,0.25)'
                ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
                ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
              }}
            >
              <Image src="/awardclear.jpeg" alt="Founder receiving award"
                width={600} height={400}
                style={{ width: '100%', height: '360px', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section ref={ctaRef} style={{
        padding: 'clamp(4rem, 8vw, 6rem) 2rem',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #DDD5C4 0%, #E8E0D0 100%)',
      }}>
        <div className="accent-line" style={{ margin: '0 auto 1rem' }} />
        <h2 style={{
          fontFamily: 'Bebas Neue, cursive',
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          color: '#1a1a1a', letterSpacing: '4px',
          lineHeight: 1, marginBottom: '1rem',
        }}>
          Ready to Start<br />
          <span style={{ color: '#C9A84C' }}>Your Journey?</span>
        </h2>
        <p style={{
          fontFamily: 'Barlow Condensed', color: '#6a6a5a',
          fontSize: '1.1rem', marginBottom: '2rem', letterSpacing: '1px',
        }}>
          First trial class is on us. Walk in, train hard, see if you belong.
        </p>
        <Link href="/contact" style={{
          backgroundColor: '#1a1a1a', color: '#E8E0D0',
          padding: '16px 48px', fontFamily: 'Bebas Neue, cursive',
          fontSize: '1.2rem', letterSpacing: '4px',
          textDecoration: 'none', display: 'inline-block',
          transition: 'all 0.2s',
        }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#C9A84C'
            e.currentTarget.style.color = '#1a1a1a'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = '#1a1a1a'
            e.currentTarget.style.color = '#E8E0D0'
          }}
        >Claim Free Trial</Link>
      </section>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @media (max-width: 768px) {
          .founders-grid { grid-template-columns: 1fr !important; }
          .programs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}