'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', program: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async () => {
    if (!form.name || !form.phone) {
      setStatus('error')
      return
    }
    setStatus('loading')
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', phone: '', email: '', program: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: 'var(--bg-secondary)',
    border: '1px solid var(--border)',
    color: 'var(--text-primary)',
    padding: '12px 16px',
    fontFamily: 'Barlow Condensed, sans-serif',
    fontSize: '1rem',
    letterSpacing: '1px',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  const contactItems = [
    {
      label: 'Address',
      value: 'Malviya Nagar, Durg,\nChhattisgarh 491001',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
            fill="var(--accent)" />
        </svg>
      ),
      link: 'https://maps.google.com/?q=Malviya+Nagar,+Durg,+Chhattisgarh+491001',
    },
    {
      label: 'Phone',
      value: '8224800078\n9981996291',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
            fill="var(--accent)" />
        </svg>
      ),
      link: 'tel:8224800078',
    },
    {
      label: 'Instagram',
      value: '@fightyard_durg',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="5" stroke="var(--accent)" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="4" stroke="var(--accent)" strokeWidth="1.8" />
          <circle cx="17.5" cy="6.5" r="1" fill="var(--accent)" />
        </svg>
      ),
      link: 'https://www.instagram.com/fightyard_durg/',
    },
  ]

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
            Get In<br />
            <span style={{ color: 'var(--accent)' }}>Touch</span>
          </h1>
          <p className="body-text" style={{ maxWidth: '500px' }}>
            Ready to start your journey? Drop us a message and we will
            get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* ── MAIN ── */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 2rem' }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          gap: '4rem',
        }} className="contact-grid">

          {/* Left — Info */}
          <div>
            <h2 className="heading-sm" style={{
              fontSize: '2rem', marginBottom: '2rem',
            }}>Find Us</h2>

            {contactItems.map((item, index) => (
              
              <a key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', gap: '1rem', alignItems: 'flex-start',
                  padding: '1.2rem 1.5rem',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                  marginBottom: '1px',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.backgroundColor = 'var(--bg-card)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'
                }}
              >
                <div style={{ marginTop: '2px', flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <p className="label-text" style={{ marginBottom: '0.3rem' }}>
                    {item.label}
                  </p>
                  {item.value.split('\n').map((line, i) => (
                    <p key={i} style={{
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontSize: '1rem', color: 'var(--text-primary)',
                      letterSpacing: '1px', lineHeight: 1.5,
                    }}>{line}</p>
                  ))}
                </div>
              </a>
            ))}

            {/* Map */}
            <div style={{
              marginTop: '2rem',
              border: '1px solid var(--border)',
              overflow: 'hidden',
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.234!2d81.2838!3d21.1903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMalviya+Nagar%2C+Durg%2C+Chhattisgarh!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="200"
                style={{ border: 'none', display: 'block', filter: 'sepia(0.3) contrast(0.9)' }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Right — Form */}
          <div>
            <h2 className="heading-sm" style={{
              fontSize: '2rem', marginBottom: '2rem',
            }}>Send Enquiry</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

              {/* Name + Phone */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
                className="form-row">
                <div>
                  <label style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontSize: '0.75rem', letterSpacing: '2px',
                    color: 'var(--text-muted)', textTransform: 'uppercase',
                    display: 'block', marginBottom: '6px',
                  }}>Name *</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                    onFocus={e => { e.currentTarget.style.borderColor = 'var(--accent)' }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
                  />
                </div>
                <div>
                  <label style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontSize: '0.75rem', letterSpacing: '2px',
                    color: 'var(--text-muted)', textTransform: 'uppercase',
                    display: 'block', marginBottom: '6px',
                  }}>Phone *</label>
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    style={inputStyle}
                    onFocus={e => { e.currentTarget.style.borderColor = 'var(--accent)' }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: '0.75rem', letterSpacing: '2px',
                  color: 'var(--text-muted)', textTransform: 'uppercase',
                  display: 'block', marginBottom: '6px',
                }}>Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  style={inputStyle}
                  onFocus={e => { e.currentTarget.style.borderColor = 'var(--accent)' }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
                />
              </div>

              {/* Program */}
              <div>
                <label style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: '0.75rem', letterSpacing: '2px',
                  color: 'var(--text-muted)', textTransform: 'uppercase',
                  display: 'block', marginBottom: '6px',
                }}>Interested In</label>
                <select
                  value={form.program}
                  onChange={e => setForm({ ...form, program: e.target.value })}
                  style={{ ...inputStyle, cursor: 'none' }}
                  onFocus={e => { e.currentTarget.style.borderColor = 'var(--accent)' }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
                >
                  <option value="">Select a program</option>
                  <option value="mma">MMA</option>
                  <option value="wrestling">Wrestling</option>
                  <option value="muaythai">Muay Thai</option>
                  <option value="all">All Programs</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: '0.75rem', letterSpacing: '2px',
                  color: 'var(--text-muted)', textTransform: 'uppercase',
                  display: 'block', marginBottom: '6px',
                }}>Message</label>
                <textarea
                  placeholder="Tell us about your experience level, goals, or any questions..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => { e.currentTarget.style.borderColor = 'var(--accent)' }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
                />
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={status === 'loading'}
                style={{
                  marginTop: '0.5rem',
                  backgroundColor: status === 'loading' ? 'var(--accent-dark)' : 'var(--bg-dark)',
                  color: 'var(--text-light)',
                  border: 'none',
                  padding: '16px 36px',
                  cursor: status === 'loading' ? 'not-allowed' : 'none',
                  fontFamily: 'Bebas Neue, cursive',
                  fontSize: '1.2rem', letterSpacing: '4px',
                  transition: 'all 0.2s', width: '100%',
                }}
                onMouseEnter={e => {
                  if (status !== 'loading') {
                    e.currentTarget.style.backgroundColor = 'var(--accent)'
                    e.currentTarget.style.color = 'var(--bg-dark)'
                  }
                }}
                onMouseLeave={e => {
                  if (status !== 'loading') {
                    e.currentTarget.style.backgroundColor = 'var(--bg-dark)'
                    e.currentTarget.style.color = 'var(--text-light)'
                  }
                }}
              >
                {status === 'loading' ? 'Sending...' : 'Send Enquiry'}
              </button>

              {/* Success */}
              {status === 'success' && (
                <div style={{
                  padding: '1rem',
                  backgroundColor: 'rgba(201,168,76,0.1)',
                  border: '1px solid var(--accent)',
                }}>
                  <p style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    color: 'var(--accent)', fontSize: '1rem',
                    letterSpacing: '1px', textAlign: 'center',
                  }}>✓ Enquiry sent! We will contact you within 24 hours.</p>
                </div>
              )}

              {/* Error */}
              {status === 'error' && (
                <div style={{
                  padding: '1rem',
                  backgroundColor: 'rgba(180,50,50,0.08)',
                  border: '1px solid #b43232',
                }}>
                  <p style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    color: '#b43232', fontSize: '1rem',
                    letterSpacing: '1px', textAlign: 'center',
                  }}>✗ Please fill in your name and phone number.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}