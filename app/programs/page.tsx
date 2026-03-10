'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const programs = [
  {
    id: 'mma',
    label: 'MMA',
    fullName: 'Mixed Martial Arts',
    tagline: 'The Complete Fighter',
    description: 'MMA at Fight Yard is built around developing complete, well-rounded fighters. You will train striking, wrestling, and ground game — all in one program designed to make you dangerous everywhere.',
    learn: [
      'Striking combinations & defense',
      'Takedowns & takedown defense',
      'Ground & pound technique',
      'Submission grappling basics',
      'Fight IQ & ring strategy',
    ],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    schedule: [
      { day: 'Tuesday', time: '4:00 PM' },
      { day: 'Thursday', time: '5:30 PM' },
      { day: 'Friday', time: '6:30 AM & 7:00 PM' },
    ],
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    icon: '/mma.svg',
  },
  {
    id: 'wrestling',
    label: 'Wrestling',
    fullName: 'Competitive Wrestling',
    tagline: 'Dominate the Mat',
    description: 'Wrestling is the backbone of combat sports. Our wrestling program builds explosive athleticism, takedown mastery, and mat control — skills that translate across every martial art.',
    learn: [
      'Single & double leg takedowns',
      'Clinch work & tie-ups',
      'Mat returns & control positions',
      'Scrambles & reversals',
      'Defensive wrestling & sprawls',
    ],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    schedule: [
      { day: 'Monday', time: '7:00 PM' },
      { day: 'Tuesday', time: '5:30 PM' },
      { day: 'Wednesday', time: '4:00 PM' },
      { day: 'Thursday', time: '6:30 AM' },
    ],
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    icon: '/wrestling.svg',
  },
  {
    id: 'muaythai',
    label: 'Muay Thai',
    fullName: 'The Art of Eight Limbs',
    tagline: 'Strike With Power',
    description: 'Muay Thai is the world\'s most powerful striking art. At Fight Yard, you\'ll develop devastating punches, kicks, elbows, and knees — plus the clinch work that makes Muay Thai unique.',
    learn: [
      'Punches, kicks, elbows & knees',
      'Clinch fighting & sweeps',
      'Teep & push kick defense',
      'Combination drilling & pad work',
      'Sparring & ring craft',
    ],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    schedule: [
      { day: 'Monday', time: '5:30 PM' },
      { day: 'Tuesday', time: '6:30 AM' },
      { day: 'Wednesday', time: '7:00 PM' },
      { day: 'Thursday', time: '4:00 PM' },
    ],
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    icon: '/muaythai.svg',
  },
]

export default function ProgramsPage() {
  const [active, setActive] = useState('mma')
  const program = programs.find(p => p.id === active)!

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
            Our<br />
            <span style={{ color: 'var(--accent)' }}>Programs</span>
          </h1>
          <p className="body-text" style={{ maxWidth: '500px' }}>
            Three world-class disciplines. Whether you are a complete beginner
            or a seasoned competitor — there is a place for you at Fight Yard.
          </p>
        </div>
      </section>

      {/* ── TABS ── */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Tab buttons */}
          <div style={{
            display: 'flex',
            borderBottom: '1px solid var(--border)',
            marginBottom: '3rem',
            overflowX: 'auto',
          }}>
            {programs.map(p => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none', cursor: 'none',
                  padding: '1rem 2.5rem',
                  fontFamily: 'Bebas Neue, cursive',
                  fontSize: '1.3rem', letterSpacing: '3px',
                  color: active === p.id ? 'var(--accent)' : 'var(--text-muted)',
                  borderBottom: active === p.id ? '2px solid var(--accent)' : '2px solid transparent',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  if (active !== p.id) e.currentTarget.style.color = 'var(--text-primary)'
                }}
                onMouseLeave={e => {
                  if (active !== p.id) e.currentTarget.style.color = 'var(--text-muted)'
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Image src={p.icon} alt={p.label} width={22} height={22}
                    style={{
                      filter: active === p.id
                        ? 'invert(74%) sepia(47%) saturate(400%) hue-rotate(5deg) brightness(85%)'
                        : 'invert(40%)',
                      transition: 'filter 0.2s',
                    }}
                  />
                  {p.label}
                </span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div key={active} style={{ animation: 'fadeUp 0.4s ease both' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem', alignItems: 'start',
            }} className="programs-content-grid">

              {/* Left — Info */}
              <div>
                <p className="label-text" style={{ marginBottom: '0.5rem' }}>
                  {program.fullName}
                </p>
                <h2 className="heading-lg" style={{ marginBottom: '1.5rem' }}>
                  {program.tagline}
                </h2>
                <p className="body-text" style={{ marginBottom: '2rem' }}>
                  {program.description}
                </p>

                {/* What you'll learn */}
                <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>
                  What You will Learn
                </h3>
                <div style={{ marginBottom: '2rem' }}>
                  {program.learn.map(item => (
                    <div key={item} style={{
                      display: 'flex', alignItems: 'center', gap: '10px',
                      marginBottom: '0.6rem',
                    }}>
                      <span style={{
                        width: '6px', height: '6px',
                        backgroundColor: 'var(--accent)',
                        display: 'inline-block', flexShrink: 0,
                      }} />
                      <span className="body-text" style={{ fontSize: '1rem' }}>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Skill Levels */}
                <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>
                  Skill Levels
                </h3>
                <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                  {program.levels.map(level => (
                    <span key={level} style={{
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontSize: '0.85rem', letterSpacing: '2px',
                      textTransform: 'uppercase',
                      border: '1px solid var(--border)',
                      color: 'var(--text-muted)', padding: '6px 14px',
                    }}>{level}</span>
                  ))}
                </div>

                {/* Schedule */}
                <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>
                  Schedule
                </h3>
                <div style={{ marginBottom: '2.5rem' }}>
                  {program.schedule.map((s, i) => (
                    <div key={i} style={{
                      display: 'flex', justifyContent: 'space-between',
                      alignItems: 'center', padding: '0.75rem 0',
                      borderBottom: '1px solid var(--border)',
                    }}>
                      <span style={{
                        fontFamily: 'Barlow Condensed, sans-serif',
                        color: 'var(--text-primary)', fontSize: '1rem',
                        letterSpacing: '1px',
                      }}>{s.day}</span>
                      <span style={{
                        fontFamily: 'Barlow Condensed, sans-serif',
                        color: 'var(--accent)', fontSize: '1rem',
                        letterSpacing: '1px',
                      }}>{s.time}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="btn-primary">
                  Join This Program
                </Link>
              </div>

              {/* Right — Video */}
              <div>
                <div style={{
                  position: 'relative',
                  border: '1px solid var(--border)',
                  marginBottom: '1.5rem',
                }}>
                  <div style={{
                    position: 'absolute', top: '-8px', right: '-8px',
                    width: '40px', height: '40px',
                    borderTop: '2px solid var(--accent)',
                    borderRight: '2px solid var(--accent)',
                    zIndex: 1,
                  }} />
                  <div style={{
                    position: 'absolute', bottom: '-8px', left: '-8px',
                    width: '40px', height: '40px',
                    borderBottom: '2px solid var(--accent)',
                    borderLeft: '2px solid var(--accent)',
                    zIndex: 1,
                  }} />
                  <video
                    src={program.video}
                    controls
                    style={{ width: '100%', display: 'block', maxHeight: '360px', objectFit: 'cover' }}
                  />
                </div>

                <div style={{
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                  borderTop: '2px solid var(--accent)',
                  padding: '1.5rem 2rem',
                  display: 'flex', alignItems: 'center', gap: '1.5rem',
                }}>
                  <Image src={program.icon} alt={program.label} width={48} height={48}
                    style={{ filter: 'invert(74%) sepia(47%) saturate(400%) hue-rotate(5deg) brightness(85%)' }}
                  />
                  <div>
                    <p style={{
                      fontFamily: 'Bebas Neue, cursive',
                      fontSize: '1.4rem', color: 'var(--text-primary)',
                      letterSpacing: '2px', lineHeight: 1,
                    }}>{program.label}</p>
                    <p className="label-text">{program.fullName}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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