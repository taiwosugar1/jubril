'use client';

import { useState, useEffect } from 'react';

// Target: 3 days from April 26, 2026
const TARGET_DATE = new Date('2026-04-29T12:34:00').getTime();

function useCountdown(target) {
    const calc = () => {
        const diff = Math.max(0, target - Date.now());
        return {
            days: Math.floor(diff / 86400000),
            hours: Math.floor((diff % 86400000) / 3600000),
            mins: Math.floor((diff % 3600000) / 60000),
            secs: Math.floor((diff % 60000) / 1000),
        };
    };
    const [time, setTime] = useState(calc);
    useEffect(() => {
        const id = setInterval(() => setTime(calc()), 1000);
        return () => clearInterval(id);
    }, []);
    return time;
}

const pad = n => String(n).padStart(2, '0');

// Floating particle dots
const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 4,
    dur: Math.random() * 4 + 3,
    opacity: Math.random() * 0.4 + 0.1,
}));

export default function DevModePage() {
    const { days, hours, mins, secs } = useCountdown(TARGET_DATE);

    return (
        <div style={{
            minHeight: '100vh',
            background: 'radial-gradient(ellipse at 50% 0%, #0d2a35 0%, #060e18 55%, #020608 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Space Grotesk', 'Inter', sans-serif",
            padding: '24px 16px',
            position: 'relative',
            overflow: 'hidden',
        }}>

            {/* Ambient corner glows */}
            <div style={{
                position: 'absolute', top: '-10%', left: '-5%',
                width: 380, height: 380, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0,200,200,0.10) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', bottom: '-5%', right: '-5%',
                width: 320, height: 320, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(100,80,220,0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            {/* Particle dots */}
            {PARTICLES.map(p => (
                <div key={p.id} style={{
                    position: 'absolute',
                    left: `${p.x}%`,
                    top: `${p.y}%`,
                    width: p.size,
                    height: p.size,
                    borderRadius: '50%',
                    background: p.id % 3 === 0
                        ? 'rgba(0,220,220,0.7)'
                        : p.id % 3 === 1
                            ? 'rgba(100,160,255,0.5)'
                            : 'rgba(255,255,255,0.3)',
                    opacity: p.opacity,
                    animation: `pulse ${p.dur}s ease-in-out ${p.delay}s infinite alternate`,
                    pointerEvents: 'none',
                }} />
            ))}

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        @keyframes pulse {
          0%   { opacity: 0.08; transform: scale(1); }
          100% { opacity: 0.55; transform: scale(1.6); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 24px rgba(0,210,210,0.25), 0 0 60px rgba(0,150,180,0.10), inset 0 0 20px rgba(0,210,210,0.04); }
          50%       { box-shadow: 0 0 40px rgba(0,210,210,0.40), 0 0 90px rgba(0,150,180,0.18), inset 0 0 30px rgba(0,210,210,0.08); }
        }
        @keyframes badge-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
        @keyframes text-shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes float-in {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .card {
          border: 1px solid rgba(0,210,210,0.28);
          border-radius: 28px;
          background: rgba(6,18,26,0.88);
          backdrop-filter: blur(12px);
          animation: glow-pulse 3.5s ease-in-out infinite;
          max-width: 420px;
          width: 100%;
          padding: 36px 28px 28px;
          position: relative;
          z-index: 1;
        }

        .dev-badge {
          display: inline-flex; align-items: center; gap: 10px;
          background: rgba(10,25,35,0.95);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 999px;
          padding: 10px 20px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.18em;
          color: rgba(255,255,255,0.75);
          font-family: 'Courier New', monospace;
          margin-bottom: 28px;
        }
        .dev-badge .dot-grey { width: 7px; height: 7px; border-radius:50%; background:#555; }
        .dev-badge .dot-green {
          width: 7px; height: 7px; border-radius:50%;
          background: #00e5a0;
          animation: badge-blink 1.4s ease-in-out infinite;
          box-shadow: 0 0 6px #00e5a0;
        }

        .headline-1 {
          font-size: clamp(42px, 11vw, 56px);
          font-weight: 800;
          line-height: 1.0;
          letter-spacing: -0.02em;
          color: #e8f4f8;
          display: block;
          animation: float-in 0.7s ease both;
          animation-delay: 0.1s;
          opacity: 0;
        }
        .headline-2 {
          font-size: clamp(42px, 11vw, 56px);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #a0d8ef 0%, #5fb8d8 40%, #38c9c9 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          display: block;
          animation: float-in 0.7s ease both;
          animation-delay: 0.22s;
          opacity: 0;
        }
        .headline-3 {
          font-size: clamp(42px, 11vw, 56px);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #00e5c8 0%, #00c8e0 35%, #0090ff 70%, #8b5cf6 100%);
          background-size: 200% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          display: block;
          filter: drop-shadow(0 0 18px rgba(0,200,220,0.55));
          animation: float-in 0.7s ease both, text-shimmer 4s linear infinite;
          animation-delay: 0.34s, 0s;
          opacity: 0;
        }

        .divider {
          height: 2px;
          background: linear-gradient(90deg, #00c8e0 0%, #8b5cf6 100%);
          border-radius: 2px;
          margin: 16px auto 20px;
          width: 55%;
          animation: float-in 0.6s ease both;
          animation-delay: 0.46s;
          opacity: 0;
        }

        .description {
          font-size: 15px;
          font-weight: 400;
          line-height: 1.72;
          color: rgba(210,230,240,0.70);
          text-align: center;
          margin-bottom: 28px;
          animation: float-in 0.7s ease both;
          animation-delay: 0.54s;
          opacity: 0;
        }

        .countdown-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 999px;
          padding: 18px 24px;
          margin-bottom: 24px;
          animation: float-in 0.7s ease both;
          animation-delay: 0.62s;
          opacity: 0;
        }
        .countdown-unit { text-align: center; flex: 1; }
        .countdown-num {
          font-size: 32px;
          font-weight: 700;
          color: #fff;
          line-height: 1;
          letter-spacing: -0.02em;
          display: block;
        }
        .countdown-label {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.18em;
          color: rgba(255,255,255,0.35);
          margin-top: 5px;
          display: block;
        }
        .countdown-sep {
          color: rgba(255,255,255,0.2);
          font-size: 28px;
          font-weight: 300;
          padding: 0 2px;
          line-height: 1;
          margin-bottom: 14px;
        }

        .cta-row {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          color: #2dd4bf;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.01em;
          margin-bottom: 22px;
          animation: float-in 0.7s ease both;
          animation-delay: 0.70s;
          opacity: 0;
          cursor: pointer;
        }
        .cta-row:hover { color: #5eead4; }

        .socials {
          display: flex; gap: 14px; justify-content: center;
          margin-bottom: 24px;
          animation: float-in 0.7s ease both;
          animation-delay: 0.78s;
          opacity: 0;
        }
        .social-btn {
          width: 52px; height: 52px; border-radius: 50%;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: background 0.25s, border-color 0.25s, transform 0.2s;
        }
        .social-btn:hover {
          background: rgba(0,210,210,0.12);
          border-color: rgba(0,210,210,0.35);
          transform: translateY(-2px);
        }
        .social-btn svg { width: 20px; height: 20px; fill: rgba(255,255,255,0.75); }

        .footer {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: rgba(255,255,255,0.28);
          font-family: 'Courier New', monospace;
          animation: float-in 0.7s ease both;
          animation-delay: 0.86s;
          opacity: 0;
        }
      `}</style>

            <div className="card">
                {/* Dev badge */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="dev-badge">
                        <span style={{ color: 'rgba(0,200,200,0.85)', fontSize: 14 }}>&lt;/&gt;</span>
                        DEVELOPMENT MODE
                        <span className="dot-grey" />
                        <span className="dot-green" />
                    </div>
                </div>

                {/* Headline */}
                <div style={{ textAlign: 'center', marginBottom: 4 }}>
                    <span className="headline-1">SOMETHING</span>
                    <span className="headline-2">BIG</span>
                    <span className="headline-3">IS COMING</span>
                </div>

                {/* Gradient divider */}
                <div className="divider" />

                {/* Description */}
                <p className="description">
                    Jubril Arogundade&apos;s official platform is being elevated to reflect the next chapter of African mobility. A new era in automotive leadership launches soon.
                </p>

                {/* Countdown */}
                <div className="countdown-wrap">
                    <div className="countdown-unit">
                        <span className="countdown-num">{pad(days)}</span>
                        <span className="countdown-label">DAYS</span>
                    </div>
                    <span className="countdown-sep">·</span>
                    <div className="countdown-unit">
                        <span className="countdown-num">{pad(hours)}</span>
                        <span className="countdown-label">HOURS</span>
                    </div>
                    <span className="countdown-sep">·</span>
                    <div className="countdown-unit">
                        <span className="countdown-num">{pad(mins)}</span>
                        <span className="countdown-label">MINS</span>
                    </div>
                    <span className="countdown-sep">·</span>
                    <div className="countdown-unit">
                        <span className="countdown-num">{pad(secs)}</span>
                        <span className="countdown-label">SECS</span>
                    </div>
                </div>

                {/* CTA */}
                <div className="cta-row">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                    </svg>
                    Be first to witness the grand reveal
                </div>

                {/* Socials */}
                <div className="socials">
                    {/* Instagram */}
                    <button className="social-btn" aria-label="Instagram">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                    </button>

                    {/* X (Twitter) */}
                    <button className="social-btn" aria-label="X">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </button>

                    {/* LinkedIn */}
                    <button className="social-btn" aria-label="LinkedIn">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </button>

                    {/* YouTube */}
                    <button className="social-btn" aria-label="YouTube">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                    </button>
                </div>

                {/* Footer */}
                <div className="footer">
                    <span>⚡</span>
                    <span>jubril arogundade · hybrid motors nigeria</span>
                </div>
            </div>
        </div>
    );
}