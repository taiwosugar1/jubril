'use client';

import { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import ClosingNavbar from '@/components/BarkButton';
import BackButton from '@/components/BarkButton';

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const IMPACT_STATS = [
    { value: '₦2B+', label: 'Capital Mobilised', sub: 'across venture & strategic rounds' },
    { value: '500+', label: 'Fleet Units Deployed', sub: 'hybrid & electric across Nigeria' },
    { value: '12+', label: 'Strategic Partnerships', sub: 'OEMs, financiers & govt bodies' },
    { value: '6', label: 'Years Leading EV Charge', sub: 'in sub-Saharan Africa' },
];

const EXPERIENCE = [
    {
        period: '2019 — Present',
        role: 'Chief Executive Officer',
        company: 'Hybrid Motors Nigeria',
        location: 'Lagos, Nigeria',
        description:
            'Founded and scaled Nigeria\'s foremost hybrid and electric vehicle dealership. Built distribution infrastructure, secured OEM partnerships with leading Asian and European manufacturers, and led the country\'s conversation on sustainable mobility.',
        highlights: [
            'Launched Nigeria\'s first certified hybrid vehicle service centre',
            'Closed ₦2B+ in investment and partnership commitments',
            'Grew fleet sales from 0 to 500+ units in under five years',
            'Featured across Forbes Africa, Channels TV & BusinessDay',
        ],
        tags: ['Founding', 'EV Strategy', 'Capital Raise', 'OEM Partnerships'],
    },
    {
        period: '2017 — 2019',
        role: 'Automotive Business Strategist',
        company: 'Independent Advisory',
        location: 'Lagos, Nigeria',
        description:
            'Provided strategic counsel to automotive importers and fleet operators navigating Nigeria\'s evolving regulatory landscape, duty structures, and consumer financing models.',
        highlights: [
            'Advised on 3 market-entry strategies for foreign auto brands',
            'Structured fleet financing deals totalling ₦400M+',
            'Developed consumer EV readiness frameworks for the Nigerian market',
        ],
        tags: ['Market Strategy', 'Fleet Finance', 'Regulatory Navigation'],
    },
    {
        period: '2015 — 2017',
        role: 'Sales & Business Development Lead',
        company: 'Premium Auto Group',
        location: 'Lagos, Nigeria',
        description:
            'Drove revenue growth across luxury and semi-luxury vehicle segments. Built the B2B sales pipeline from the ground up, targeting corporate fleets, government agencies, and HNW individuals.',
        highlights: [
            'Grew B2B revenue by 140% in 18 months',
            'Closed single largest corporate fleet deal in company history',
            'Mentored a team of 12 sales professionals',
        ],
        tags: ['B2B Sales', 'Luxury Auto', 'Team Leadership'],
    },
];

const EXPERTISE = [
    'Electric Vehicle Strategy',
    'Automotive Market Entry',
    'Fleet Electrification',
    'Investment & Capital Raising',
    'OEM Partnership Structuring',
    'Regulatory Navigation',
    'Brand & Distribution',
    'Mobility Policy Advocacy',
    'Executive Leadership',
    'Strategic Communication',
];

const RECOGNITION = [
    { title: 'Forbes Africa 30 Under 30', year: '2023', category: 'Business' },
    { title: 'BusinessDay Top CEO Award', year: '2022', category: 'Leadership' },
    { title: 'Lagos State EV Pioneer Award', year: '2023', category: 'Innovation' },
    { title: 'Arise News Industry Disruptor', year: '2021', category: 'Mobility' },
];

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────

function Eyebrow({ children }: { children: React.ReactNode }) {
    return (
        <h3 className="font-cormorant not-italic font-light text-[10px] tracking-[0.32em] uppercase text-white/35 mb-0">
            {children}
        </h3>
    );
}

function Divider() {
    return <div className="h-px w-full bg-white/[0.08]" />;
}

// ─────────────────────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────────────────────

function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
    const opac = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

    return (
        <section ref={ref} className="relative w-full min-h-[60vh] flex flex-col justify-end overflow-hidden bg-black">

            <div className="py-16 bg-black"></div>

            {/* Parallax watermark */}
            <motion.div
                style={{ y }}
                aria-hidden
                className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
            >
                <span className="font-cormorant font-bold not-italic text-[22vw] leading-none tracking-[0.04em] text-white/[0.03] whitespace-nowrap">
                    IMPACT
                </span>
            </motion.div>

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black pointer-events-none" />

            {/* Content */}
            <motion.div
                style={{ opacity: opac }}
                className="relative z-10 px-6 sm:px-10 lg:px-16 xl:px-20 pb-16 sm:pb-20 lg:pb-28 max-w-[1400px] mx-auto w-full"
            >
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-10"
                >
                </motion.div>

                {/* Display headline */}
                <div className="overflow-hidden mb-2">
                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="font-cormorant italic font-normal text-[clamp(60px,10vw,148px)] leading-[0.88] tracking-[-0.02em] text-white"
                    >
                        Résumé
                    </motion.h1>
                </div>
                <div className="overflow-hidden mb-12">
                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.1, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
                        className="font-cormorant not-italic font-light text-[clamp(60px,10vw,148px)] leading-[1.0] tracking-[-0.02em] text-white/18"
                    >
                        &amp; Impact.
                    </motion.h1>
                </div>

                {/* Sub line */}
                <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="font-cormorant italic font-light text-lg sm:text-xl lg:text-2xl leading-[1.75] text-white/40 max-w-[520px]"
                >
                    A decade of building Nigeria&apos;s electric vehicle ecosystem from the ground up.
                </motion.h3>

                {/* Scroll hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.85 }}
                    className="flex items-center gap-3 mt-14"
                >
                    <div className="w-8 h-px bg-white/25" />
                    <span className="font-cormorant not-italic font-light text-[9px] tracking-[0.3em] uppercase text-white/25">
                        Scroll to explore
                    </span>
                </motion.div>
            </motion.div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// IMPACT STATS
// ─────────────────────────────────────────────────────────────────────────────

function ImpactStats() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, margin: '-10%' });

    return (
        <section ref={ref} className="relative bg-[#000C1A] py-24 sm:py-32 overflow-hidden">

            {/* Background number */}
            <div aria-hidden className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                <h3 className="font-cormorant font-bold not-italic text-[30vw] leading-none text-white/[0.025] whitespace-nowrap">
                    JUBRIL
                </h3>
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="mb-16 sm:mb-20"
                >
                    <Eyebrow>By the numbers</Eyebrow>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.07]">
                    {IMPACT_STATS.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 32 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-[#000C1A] px-8 sm:px-10 py-12 sm:py-14 flex flex-col gap-3 group hover:bg-[#0a1628] transition-colors duration-500"
                        >
                            <h3 className="font-cormorant italic font-normal text-[clamp(44px,5vw,80px)] leading-none tracking-[-0.02em] text-white group-hover:text-white transition-colors duration-300">
                                {stat.value}
                            </h3>
                            <h3 className="font-cormorant not-italic font-light text-[11px] tracking-[0.22em] uppercase text-white/55 leading-[1.5]">
                                {stat.label}
                            </h3>
                            <h3 className="font-cormorant italic font-light text-sm text-white/28 leading-[1.6] mt-1">
                                {stat.sub}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// EXPERIENCE
// ─────────────────────────────────────────────────────────────────────────────

function ExperienceRow({
    item,
    index,
}: {
    item: (typeof EXPERIENCE)[0];
    index: number;
}) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-8%' });
    const [open, setOpen] = useState(index === 0);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
            <Divider />
            <button
                onClick={() => setOpen(!open)}
                className="w-full text-left group py-8 sm:py-10"
            >
                <div className="flex items-start justify-between gap-6">
                    {/* Left meta */}
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-10 flex-1">
                        <span className="font-cormorant not-italic font-light text-[10px] tracking-[0.22em] uppercase text-white/30 whitespace-nowrap mt-1.5 w-32 flex-shrink-0">
                            {item.period}
                        </span>
                        <div>
                            <h3 className="font-cormorant italic font-normal text-[clamp(22px,3.5vw,40px)] leading-[1.1] tracking-[-0.01em] text-white/85 group-hover:text-white transition-colors duration-300 mb-1">
                                {item.role}
                            </h3>
                            <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-cormorant not-italic font-light text-[10px] tracking-[0.2em] uppercase text-white/40">
                                    {item.company}
                                </span>
                                <span className="text-white/20 text-[10px]">·</span>
                                <span className="font-cormorant italic font-light text-[11px] text-white/28">
                                    {item.location}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Arrow */}
                    <FiArrowUpRight
                        className={`w-5 h-5 text-white/25 flex-shrink-0 mt-2 transition-all duration-400 ${open ? 'rotate-90 text-white/50' : 'group-hover:text-white/45'
                            }`}
                    />
                </div>
            </button>

            {/* Expandable detail */}
            <motion.div
                initial={false}
                animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
            >
                <div className="pb-10 sm:pb-14 pl-0 sm:pl-[168px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    {/* Description */}
                    <div>
                        <p className="font-cormorant italic font-light text-base sm:text-lg leading-[1.8] text-white/45 mb-8">
                            {item.description}
                        </p>
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {item.tags.map(tag => (
                                <span
                                    key={tag}
                                    className="font-cormorant not-italic font-light text-[9px] tracking-[0.22em] uppercase text-white/35 border border-white/12 px-3 py-1.5"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-4">
                        {item.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0 mt-[10px]" />
                                <p className="font-cormorant italic font-light text-sm sm:text-base leading-[1.7] text-white/45">
                                    {h}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

function Experience() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-10%' });

    return (
        <section className="bg-black py-24 sm:py-32">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-16 sm:mb-20"
                >
                    <div>
                        <Eyebrow>Career</Eyebrow>
                        <h2 className="font-cormorant italic font-normal text-[clamp(40px,6vw,84px)] leading-[0.92] tracking-[-0.015em] text-white mt-4">
                            Experience.
                        </h2>
                    </div>
                    <p className="font-cormorant italic font-light text-base sm:text-lg leading-[1.75] text-white/35 max-w-xs">
                        Click each role to expand the full story.
                    </p>
                </motion.div>

                {EXPERIENCE.map((item, i) => (
                    <ExperienceRow key={i} item={item} index={i} />
                ))}
                <Divider />
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// EXPERTISE
// ─────────────────────────────────────────────────────────────────────────────

function Expertise() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-10%' });

    return (
        <section ref={ref} className="bg-[#000C1A] py-24 sm:py-32 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="mb-16 sm:mb-20"
                >
                    <Eyebrow>Capabilities</Eyebrow>
                    <h2 className="font-cormorant italic font-normal text-[clamp(40px,6vw,84px)] leading-[0.92] tracking-[-0.015em] text-white mt-4">
                        Areas of Expertise.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
                    {EXPERTISE.map((skill, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.05 * i }}
                            className="bg-[#000C1A] group px-8 py-8 flex items-center justify-between hover:bg-[#0a1628] transition-colors duration-400 cursor-default"
                        >
                            <h3 className="font-cormorant italic font-normal text-lg sm:text-xl leading-none text-white/60 group-hover:text-white/90 transition-colors duration-300">
                                {skill}
                            </h3>
                            <div className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-white/50 transition-colors duration-300 flex-shrink-0 ml-4" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// RECOGNITION
// ─────────────────────────────────────────────────────────────────────────────

function Recognition() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-10%' });

    return (
        <section ref={ref} className="bg-black py-24 sm:py-32">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="mb-16 sm:mb-20"
                >
                    <Eyebrow>Awards &amp; Honours</Eyebrow>
                    <h2 className="font-cormorant italic font-normal text-[clamp(40px,6vw,84px)] leading-[0.92] tracking-[-0.015em] text-white mt-4">
                        Recognition.
                    </h2>
                </motion.div>

                <div className="space-y-0">
                    {RECOGNITION.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <Divider />
                            <div className="py-7 sm:py-8 flex items-center justify-between gap-6 group">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-10 flex-1">
                                    <span className="font-cormorant not-italic font-light text-[10px] tracking-[0.22em] uppercase text-white/25 w-12 flex-shrink-0">
                                        {item.year}
                                    </span>
                                    <h3 className="font-cormorant italic font-normal text-[clamp(18px,2.8vw,32px)] leading-[1.1] tracking-[-0.005em] text-white/75 group-hover:text-white transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                </div>
                                <span className="font-cormorant not-italic font-light text-[9px] tracking-[0.22em] uppercase text-white/25 border border-white/10 px-3 py-1.5 flex-shrink-0 hidden sm:block">
                                    {item.category}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                    <Divider />
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// CTA STRIP
// ─────────────────────────────────────────────────────────────────────────────

function CTAStrip() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-10%' });

    return (
        <section ref={ref} className="bg-[#000C1A] py-24 sm:py-32 border-t border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2 className="font-cormorant italic font-normal text-[clamp(36px,5vw,72px)] leading-[0.95] tracking-[-0.015em] text-white mb-6">
                        Ready to build something<br />
                        <span className="text-white/25 not-italic font-light">that matters?</span>
                    </h2>
                    <p className="font-cormorant italic font-light text-lg sm:text-xl leading-[1.75] text-white/38 max-w-md">
                        Whether you need a strategic partner, a keynote speaker, or a visionary to help shape Africa's automotive future — the conversation starts here.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col gap-4 lg:items-end"
                >
                    <a
                        href="/consulting"
                        className="group inline-flex items-center justify-between gap-6 w-full lg:w-72 bg-white text-[#000C1A] px-8 py-5 hover:bg-[#F5F2ED] transition-colors duration-300"
                    >
                        <span className="font-cormorant not-italic font-medium text-[11px] tracking-[0.28em] uppercase">
                            Strategic Consulting
                        </span>
                        <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </a>
                    <a
                        href="/speaking"
                        className="group inline-flex items-center justify-between gap-6 w-full lg:w-72 border border-white/18 text-white/65 px-8 py-5 hover:border-white/35 hover:text-white transition-all duration-300"
                    >
                        <span className="font-cormorant not-italic font-light text-[11px] tracking-[0.28em] uppercase">
                            Speaking Inquiries
                        </span>
                        <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function ResumeAndImpactPage() {
    return (
        <div className="bg-black min-h-screen">
            <div className="absolute left-8 top-20 z-10">
                <BackButton />
            </div>
            <Hero />
            <ImpactStats />
            <Experience />
            <Expertise />
            <Recognition />
            <CTAStrip />
        </div>
    );
}