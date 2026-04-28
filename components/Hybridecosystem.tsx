'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

// ── Company data ──────────────────────────────────────────────────────────────
const COMPANIES = [
    {
        name: 'Hybrid Motors',
        tagline: 'Distribution, Sales, Marketing & Aftersales of Multi Brand.',
        url: 'https://hybridmotorsnigeria.com/',
        logo: '/images/logo.png',
    },
    {
        name: 'Hybrid Factry',
        tagline: 'Manufacturing of EV & Hybrid Vehicles',
        url: null,
        logo: '/images/logo.png',
    },
    {
        name: 'Hybrid Power',
        tagline: 'EV Infrastructure, Solar Plant & Installation',
        url: null,
        logo: '/images/logo.png',
    },
    {
        name: 'Hybrid House',
        tagline: 'An African inspired space. A cafe, Automobile accessories booth & AI Auto library',
        url: null,
        logo: '/images/logo.png',
    },
    {
        name: 'Hybrid Academy',
        tagline: 'A school for Automotive Technicians (EV focus) & Chauffeur',
        url: null,
        logo: '/images/logo.png',
    },
];

// ── FadeUp (UNCHANGED) ────────────────────────────────────────────────────────
function FadeUp({
    children,
    delay = 0,
    className = '',
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: false, margin: '-8%' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 36 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
            transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// ── Company Row (ONLY LOGIC ADDITION HERE) ────────────────────────────────────
function CompanyRow({
    company,
    index,
    onOpen,
}: {
    company: (typeof COMPANIES)[number];
    index: number;
        onOpen: (company: (typeof COMPANIES)[number]) => void;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: '-6%' });

    const handleClick = () => {
        // ONLY CHANGE: conditional behavior
        if (company.url) {
            window.open(company.url, '_blank');
        } else {
            onOpen(company);
        }
    };

    return (
        <motion.div
            ref={ref}
            onClick={handleClick}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.85, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ x: 5 }}
            className="group block no-underline py-5 border-b border-white/[0.07] last:border-b-0 cursor-pointer"
        >
            <div className="flex items-start justify-between gap-6">
                <div className="flex-1 min-w-0">
                    <h3 className="font-cormorant italic font-normal text-[clamp(28px,3.8vw,50px)] leading-none tracking-[-0.01em] text-white/82 m-0 mb-2.5 transition-colors duration-300 group-hover:text-white">
                        {company.name}
                    </h3>

                    <h4 className="font-cormorant font-light text-lg md:text-sm tracking-[0.01em] text-white/60 m-0 mb-4 leading-relaxed">
                        {company.tagline}
                    </h4>
                </div>

                <div className="flex-shrink-0 mt-1 text-white/25 transition-all duration-300 group-hover:text-white/70 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                    <FiArrowRight size={20} />
                </div>
            </div>
        </motion.div>
    );
}

// ── POPUP MODAL (NEW BUT MINIMAL ADDITION) ────────────────────────────────────
function CompanyModal({
    company,
    onClose,
}: {
    company: (typeof COMPANIES)[number] | null;
    onClose: () => void;
}) {
    if (!company) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    onClick={(e) => e.stopPropagation()}
                    className="text-center"
                >
                    <div className="w-[220px] h-[220px] bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center p-6">
                        <img
                            src={company.logo}
                            alt={company.name}
                            className="max-w-[120px] max-h-[120px] object-contain"
                        />
                    </div>

                    <p className="mt-5 text-white/80 font-cormorant italic text-xl">
                        {company.name}
                    </p>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

// ── MAIN COMPONENT (UNCHANGED STRUCTURE) ──────────────────────────────────────
export default function HybridEcosystem() {
    const sectionRef = useRef<HTMLElement>(null);
    const inView = useInView(sectionRef, { once: false, margin: '-10%' });

    const [activeCompany, setActiveCompany] = useState<(typeof COMPANIES)[number] | null>(null);

    return (
        <section
            ref={sectionRef}
            className="relative w-full bg-black overflow-hidden"
        >
            {/* Modal */}
            <CompanyModal
                company={activeCompany}
                onClose={() => setActiveCompany(null)}
            />

            {/* Top rule */}
            <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.07]" />

            {/* Grain overlay (UNCHANGED) */}
            <div
                className="absolute inset-0 pointer-events-none opacity-60"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
                    backgroundSize: '256px 256px',
                }}
            />

            <div className="relative w-full grid grid-cols-1 lg:grid-cols-2 gap-0 py-[clamp(72px,11vh,120px)]">

                {/* LEFT (UNCHANGED UI) */}
                <div className="px-[clamp(24px,6vw,80px)] lg:border-r border-white/[0.07] pb-16 lg:pb-0">
                    <FadeUp delay={0}>
                        <p className="font-cormorant font-normal text-[10px] tracking-[0.36em] uppercase text-white/60 mb-8">
                            The Footprint
                        </p>
                    </FadeUp>

                    <FadeUp delay={0.1}>
                        <h2 className="font-cormorant italic font-normal text-[clamp(40px,7.5vw,106px)] leading-[0.93] tracking-[-0.015em] text-white m-0">
                            The Hybrid
                        </h2>
                        <h2 className="font-cormorant not-italic font-normal text-[clamp(40px,7.5vw,106px)] leading-[1.08] tracking-[-0.015em] text-white m-0">
                            Group.
                        </h2>
                    </FadeUp>

                    <FadeUp delay={0.22} className="mt-[clamp(28px,4vh,48px)]">
                        <h4 className="font-cormorant italic font-light text-[clamp(16px,1.4vw,18px)] leading-[1.72] text-white/60 m-0 mb-5">
                            More than a collection of companies, this is a vertically integrated response to Africa&apos;s energy and mobility crisis.
                        </h4>
                    </FadeUp>
                    <FadeUp delay={0.22} className="mt-[clamp(28px,4vh,48px)]">
                        <h4 className="font-cormorant italic font-light text-[clamp(16px,1.4vw,18px)] leading-[1.72] text-white/60 m-0 mb-5">
                            By bridging the gap between high-performance automotive engineering and sustainable power infrastructure, Jubril is architecting a self-sustaining loop that ensures the continent doesn't just consume the future, but builds it.
                        </h4>
                    </FadeUp>
                </div>

                {/* RIGHT (UNCHANGED MAPPING) */}
                <div className="px-[clamp(24px,5vw,64px)] lg:pl-[clamp(32px,5vw,64px)]">
                    {COMPANIES.map((company, i) => (
                        <CompanyRow
                            key={company.name}
                            company={company}
                            index={i}
                            onOpen={setActiveCompany}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}