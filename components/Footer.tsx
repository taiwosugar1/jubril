'use client';

/**
 * Footer.tsx — "Let's Drive." footer section
 *
 * Full Tailwind — no inline styles.
 *
 * Add this once to your global CSS (or tailwind.config.ts extend):
 * ─────────────────────────────────────────────────────────────────
 * // tailwind.config.ts
 * extend: {
 *   fontFamily: {
 *     cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
 *   },
 *   colors: {
 *     navy: {
 *       950: '#060e1c',
 *       900: '#0a1628',
 *       800: '#0f2040',
 *     },
 *   },
 * }
 *
 * Font variable already set up from HeroSection layout setup.
 * ─────────────────────────────────────────────────────────────────
 */

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { FiArrowUpRight, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';

// ── Nav links ─────────────────────────────────────────────────────────────────
const NAV_LINKS = [
    { label: 'Resume and Impact', href: '/resume' },
    { label: 'Strategic Consulting', href: '/consulting' },
    { label: 'Speaking Inquiries', href: '/speaking' },
    { label: 'Press', href: '/press' },
    { label: 'Contact', href: '/contact' },
];

const NAV_LINKS2 = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Use', href: '/terms' },
];

// ── Social links ──────────────────────────────────────────────────────────────
const SOCIAL = [
    { icon: FiInstagram, href: 'https://www.instagram.com/jubriloflagos/', label: 'Instagram' },
    { icon: FiLinkedin, href: 'https://ng.linkedin.com/in/jubril-arogundade-68389b182', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:team@jubriloflagos.com', label: 'Email' },
];

const MARQUEE_ROWS = [
    { word: 'JUBRIL AROGUNDADE', dir: 'left' as const, duration: 200 },
];

// ── Single nav row ────────────────────────────────────────────────────────────
function NavRow({
    label,
    href,
    index,
    inView,
}: {
    label: string;
    href: string;
    index: number;
    inView: boolean;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.15 + index * 0.09, ease: [0.22, 1, 0.36, 1] }}
        >
            <Link
                href={href}
                className="
          group flex items-center justify-between
          border-t border-white/10
          py-6 md:py-9
          hover:border-white/25
          transition-colors duration-300
        "
            >
                {/* Link label */}
                <h4
                    className="
            font-cormorant italic font-normal
            text-xl
            text-white/75
            tracking-[-0.01em]
            group-hover:text-white/95
            transition-colors duration-300
            translate-x-0 group-hover:translate-x-1.5
            transition-transform
          "
                >
                    {label}
                </h4>

                {/* Arrow icon */}
                <FiArrowUpRight
                    className="
            w-5 h-5 text-white/30
            group-hover:text-white/70
            group-hover:translate-x-0.5 group-hover:-translate-y-0.5
            transition-all duration-300
            flex-shrink-0
          "
                />
            </Link>
        </motion.div>
    );
}

function MarqueeRow({
    word,
    dir,
    duration,
}: {
    word: string;
    dir: 'left' | 'right';
    duration: number;
}) {
    // Repeat word many times so the strip is much wider than the viewport
    const repeated = Array(14).fill(word).join('      ');
    // Double it so the seamless loop works (animate -50% then loop)
    const content = `${repeated}     ${repeated}`;

    return (
        <div className="overflow-hidden w-full leading-none">

            {/* ── Global styles (keyframes + font import) ── */}
            <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>

            <h3
                className="
    inline-block whitespace-nowrap select-none
    text-[clamp(120px,25vw,200px)]
    font-black
    tracking-[0.06em]
    font-cormorant
    leading-[1.5]
    md:leading-[1.05]
    text-white/5
    will-change-transform
  "
                style={{
                    animation: `marquee-${dir} ${duration}s linear infinite`,
                }}
            >
                {content}
            </h3>
        </div>
    );
}

// ── Main Footer ───────────────────────────────────────────────────────────────
export default function Footer() {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: false, margin: '-10%' });

    return (
        <>
            <footer
                ref={ref}
                className="relative w-full overflow-hidden bg-[#000C1A] text-[#F5F2ED] min-h-screen"
            >

                {/* ── AROGUNDADE watermark — absolutely positioned, bleeds edge-to-edge ── */}
                <div
                    aria-hidden
                    className="
            absolute inset-0 flex items-center justify-center
            pointer-events-none select-none overflow-hidden
          "
                >
                    {/* Marquee rows */}
                    <div className="font-cormorant font-bold not-italic
              text-[18vw] leading-none tracking-[0.04em]
              text-white/[0.04]
              whitespace-nowrap">
                        {MARQUEE_ROWS.map((row, i) => <MarqueeRow key={i} {...row} />)}
                    </div>
                </div>

                {/* ── Main content grid ── */}
                <div
                    className="
            relative z-10
            max-w-[1400px] mx-auto
            px-6 sm:px-10 lg:px-20 xl:px-25
            pt-16 sm:pt-20 lg:pt-24
            pb-12 sm:pb-16
            grid grid-cols-1 lg:grid-cols-2
            gap-0 lg:gap-16
          "
                >

                    {/* ── LEFT COLUMN — headline + body + socials ── */}
                    <div className="flex flex-col justify-between pb-10 lg:pb-0">

                        {/* Headline block */}
                        <div>
                            {/* "Let's" — white italic */}
                            <motion.h2
                                initial={{ opacity: 0, y: 32 }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
                                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                                className="
                  font-cormorant italic font-normal
                  text-[clamp(72px,12vw,168px)]
                  leading-[0.88] tracking-[-0.015em]
                  text-[#F5F2ED]
                  m-0
                "
                            >
                                Let&apos;s
                            </motion.h2>

                            {/* "Drive." — ghosted, non-italic */}
                            <motion.h2
                                initial={{ opacity: 0, y: 32 }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
                                transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className="
                  font-cormorant not-italic font-light
                  text-[clamp(72px,12vw,168px)]
                  leading-[1.06] tracking-[-0.015em]
                  text-white/20
                  m-0
                "
                            >
                                Drive.
                            </motion.h2>

                            {/* Body copy */}
                            <motion.h3
                                initial={{ opacity: 0 }}
                                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.9, delay: 0.28 }}
                                className="
                  font-cormorant italic font-light
                  text-lg sm:text-xl lg:text-2xl
                  leading-[1.7]
                  text-white/75
                  mt-8 sm:mt-10
                  max-w-[320px]
                "
                            >
                                Open for strategic partnerships,
                                speaking engagements, and
                                discussions on the future of mobility.
                            </motion.h3>
                        </div>

                        {/* Social icons — bottom of left column */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.9, delay: 0.5 }}
                            className="flex items-center gap-4 mt-14 lg:mt-6"
                        >
                            {SOCIAL.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="
                    w-12 h-12 rounded-full
                    border border-white/20
                    flex items-center justify-center
                    text-[#F5F2ED]
                    hover:text-white hover:border-white/45
                    transition-all duration-300
                  "
                                >
                                    <Icon className="w-[18px] h-[18px]" />
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* ── RIGHT COLUMN — navigation link list ── */}
                    <div className="flex flex-col justify-start pt-2 lg:pt-3">
                        {/* Last nav row gets a bottom border too */}
                        <div className="border-b border-white/10">
                            {NAV_LINKS.map((link, i) => (
                                <NavRow
                                    key={link.label}
                                    label={link.label}
                                    href={link.href}
                                    index={i}
                                    inView={inView}
                                />
                            ))}
                        </div>
                    </div>

                </div>

                {/* ── Bottom bar ── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: 0.65 }}
                    className="
            relative z-10
            border-t border-white/8
            max-w-[1400px] mx-auto
            px-6 sm:px-10 lg:px-16 xl:px-20
            py-5 sm:py-6
            flex flex-col sm:flex-row
            items-start sm:items-center
            justify-between
            gap-2 sm:gap-0
          "
                >
                    <p
                        className="
              font-cormorant not-italic font-light
              text-[10px] tracking-[0.28em] uppercase
              text-white/22
            "
                    >
                        © {new Date().getFullYear()} Jubril Arogundade. All rights reserved.
                    </p>
                    {/* Social icons — bottom of left column */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.9, delay: 0.5 }}
                        className="flex items-center gap-4 py-5 sm:py-6"
                    >
                        {NAV_LINKS2.map((link, i) => (
                            <Link
                                key={i}
                                href={link.href}
                                className="
                   font-cormorant not-italic font-light
              text-[10px] tracking-[0.28em] uppercase
              text-white/22
                  "
                            >
                                {link.label}

                            </Link>
                        ))}
                    </motion.div>
                </motion.div>

            </footer>
        </>
    );
}