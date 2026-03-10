'use client'

import { useState } from 'react'
import Link from 'next/link'

const plans = [
  {
    id: 'monthly',
    label: 'Monthly',
    price: '1,499',
    period: 'per month',
    tag: null,
    desc: 'Perfect for beginners wanting to explore martial arts training.',
    features: [
      '1 Free trial class',
      'Access to 1 program',
      'Group training sessions',
      'Locker room access',
      'Progress tracking',
    ],
    cta: 'Start Monthly',
    popular: false,
  },
  {
    id: 'quarterly',
    label: 'Quarterly',
    price: '3,999',
    period: 'per 3 months',
    tag: 'MOST POPULAR',
    desc: 'Best value for serious students committed to levelling up their game.',
    features: [
      '1 Free trial class',
      'Access to all 3 programs',
      'Group training sessions',
      '1 Personal training session/month',
      'Competition coaching access',
      'Save 11% vs monthly',
    ],
    cta: 'Start Quarterly',
    popular: true,
  },
  {
    id: 'annual',
    label: 'Annual',
    price: '12,999',
    period: 'per year',
    tag: 'BEST VALUE',
    desc: 'For dedicated fighters who are all in. Maximum savings, maximum access.',
    features: [
      '1 Free trial class',
      'Access to all 3 programs',
      'Unlimited group sessions',
      '2 Personal training sessions/month',
      'Full competition coaching',
      'Diet & nutrition guidance',
      'Save 28% vs monthly',
    ],
    cta: 'Start Annual',
    popular: false,
  },
]

export default function PricingPage() {
  const [hovered, setHovered] = useState<string | null>(null)

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
            Simple<br />
            <span style={{ color: 'var(--accent)' }}>Pricing</span>
          </h1>
          <p className="body-text" style={{ maxWidth: '500px' }}>
            No hidden fees. No lock-ins. Just honest pricing for
            world-class martial arts training in Durg.
          </p>
        </div>
      </section>

      {/* ── PLANS ── */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            className="pricing-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1px',
              backgroundColor: 'var(--border)',
            }}
          >
            {plans.map(plan => {
              const isHovered = hovered === plan.id

              return (
                <div
                  key={plan.id}
                  onMouseEnter={() => setHovered(plan.id)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    backgroundColor: isHovered ? 'var(--bg-secondary)' : 'var(--bg-primary)',
                    padding: '2.5rem 2rem',
                    position: 'relative',
                    transition: 'background 0.3s',
                    display: 'flex', flexDirection: 'column',
                  }}
                >
                  {/* Top accent bar */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0,
                    height: '3px',
                    backgroundColor: plan.popular || isHovered ? 'var(--accent)' : 'transparent',
                    transition: 'background 0.3s',
                  }} />

                  {/* Tag */}
                  <div style={{ height: '28px', marginBottom: '1.2rem' }}>
                    {plan.tag && (
                      <span style={{
                        backgroundColor: 'var(--accent)',
                        color: 'var(--bg-dark)',
                        fontFamily: 'Barlow Condensed, sans-serif',
                        fontSize: '0.7rem', letterSpacing: '2px',
                        fontWeight: 700, padding: '4px 10px',
                        textTransform: 'uppercase',
                      }}>{plan.tag}</span>
                    )}
                  </div>

                  {/* Plan name */}
                  <p className="label-text" style={{ marginBottom: '0.5rem' }}>
                    {plan.label}
                  </p>

                  {/* Price */}
                  <div style={{ marginBottom: '1rem' }}>
                    <span style={{
                      fontFamily: 'Bebas Neue, cursive',
                      fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                      color: 'var(--text-primary)', letterSpacing: '2px',
                    }}>₹{plan.price}</span>
                    <span style={{
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontSize: '0.9rem', color: 'var(--text-muted)',
                      marginLeft: '6px', letterSpacing: '1px',
                    }}>{plan.period}</span>
                  </div>

                  <p className="body-text" style={{
                    fontSize: '1rem', marginBottom: '2rem',
                    borderBottom: '1px solid var(--border)',
                    paddingBottom: '1.5rem',
                  }}>{plan.desc}</p>

                  {/* Features */}
                  <div style={{ flex: 1, marginBottom: '2rem' }}>
                    {plan.features.map(f => (
                      <div key={f} style={{
                        display: 'flex', alignItems: 'flex-start',
                        gap: '10px', marginBottom: '0.8rem',
                      }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                          style={{ flexShrink: 0, marginTop: '2px' }}>
                          <path d="M3 8L6.5 11.5L13 5"
                            stroke="var(--accent)" strokeWidth="1.5"
                            strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span style={{
                          fontFamily: 'Barlow Condensed, sans-serif',
                          color: f.startsWith('Save') ? 'var(--accent)' : 'var(--text-muted)',
                          fontSize: '1rem', letterSpacing: '0.5px',
                          fontWeight: f.startsWith('Save') ? 600 : 400,
                        }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className={plan.popular ? 'btn-gold' : 'btn-outline'}
                    style={{ textAlign: 'center', display: 'block' }}
                  >
                    {plan.cta}
                  </Link>
                </div>
              )
            })}
          </div>

          {/* Free trial note */}
          <div style={{
            marginTop: '3rem', textAlign: 'center',
            padding: '1.5rem',
            border: '1px solid var(--border)',
            backgroundColor: 'var(--bg-secondary)',
          }}>
            <p style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              color: 'var(--text-muted)', fontSize: '1rem',
              letterSpacing: '1px',
            }}>
              🥊 Not sure yet?{' '}
              <Link href="/contact" style={{
                color: 'var(--accent)', textDecoration: 'none',
                borderBottom: '1px solid var(--accent)',
              }}>Book a free trial class</Link>
              {' '}— no payment required.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}