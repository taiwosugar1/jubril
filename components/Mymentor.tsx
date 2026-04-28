'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

// ── Mentor data ───────────────────────────────────────────────────────────────
const MENTORS = [
    {
        name: 'Cosmas Maduka',
        role: 'President, Coscharis Group',
        quote:
            `"A titan of industry who demonstrated that integrity and resilience are the true currencies of success. He paved the way for luxury and performance in the Nigerian market."`,
        image: '/images/maduka.webp',
    },
    {
        name: 'Chief Michael Ade-Ojo',
        role: 'Founder, Elizade Nigeria',
        quote: `"The visionary who taught me the power of consistency. His journey with Toyota in Nigeria is a masterclass in brand building and long-term strategic thinking."`,
        image: '/images/elizade.webp',
    },
    {
        name: 'Innocent Chukwuma',
        role: 'Chairman, Innoson Group',
        quote: `"The pioneer of indigenous manufacturing. He proved that Africa doesn't just have to be a consumer of technology, but a creator of it."`,
        image: '/images/innoson.webp',
    },
];

// ── Card — each card watches itself ──────────────────────────────────────────
function MentorCard({
    mentor,
    index,
}: {
    mentor: (typeof MENTORS)[number];
        index: number;
}) {
    const cardRef = useRef<HTMLDivElement>(null);

    // once: false  → re-triggers every time the card scrolls in OR out
    // amount: 0.25 → fires when 25 % of the card is visible
    const cardInView = useInView(cardRef, { once: false, amount: 0.25 });

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 60 }}
            animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{
                duration: 0.9,
                // stagger is based on index so left card still leads
                delay: cardInView ? index * 0.18 : 0,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col mx-4"
        >
            {/* Image */}
            <div className="relative w-full pb-[125%] overflow-hidden bg-[#b8b2a8] group">
                <Image
                    src={mentor.image}
                    alt={mentor.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover object-top brightness-[0.88] transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
                />
            </div>

            {/* Text */}
            <div className="pt-5 md:pt-10 mb-8 md:mb-0">
                <p className="font-serif italic text-[clamp(18px,2.2vw,26px)] leading-tight text-[#001F3F] mb-1">
                    {mentor.name}
                </p>

                <p className="font-serif font-bold uppercase tracking-[0.24em] text-[12px] md:text-[9px] text-[#1c2e4a]/45 mb-3">
                    {mentor.role}
                </p>

                <div className="flex items-center mt-5 gap-6">

                    <div className="md:h-25 h-40 w-[2px] bg-[#1c2e4a]/10" />

                    <p className="font-serif italic text-lg md:text-sm  leading-relaxed text-[#1c2e4a]/50">
                        {mentor.quote}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

// ── Main ─────────────────────────────────────────────────────────────────────
export default function MyMentors() {
    const sectionRef = useRef<HTMLElement>(null);
    // Section inView only drives the heading — also repeatable
    const sectionInView = useInView(sectionRef, { once: false, amount: 0.1 });

    return (
        <section
            ref={sectionRef}
            className="bg-[#eae7e1] w-full relative overflow-hidden px-[clamp(14px,4vw,80px)] pt-[clamp(72px,11vh,120px)] pb-[clamp(60px,9vh,80px)]"
        >
            {/* Ghost text */}
            <div className="absolute inset-x-0 top-0 flex justify-center pt-[clamp(32px,5vh,56px)] pointer-events-none overflow-hidden whitespace-nowrap z-0">
                {[-1, 0, 1].map((offset) => (
                    <span
                        key={offset}
                        className={`font-serif italic text-[clamp(72px,13vw,192px)] text-[#1c2e4a]/5 select-none ${offset === 0
                            ? 'relative'
                            : 'absolute ' + (offset === -1 ? 'left-[-100%]' : 'left-[100%]')
                            }`}
                    >
                        My Mentors.
                    </span>
                ))}
            </div>

            {/* Header */}
            <div className="relative z-10 text-center mb-[clamp(48px,7vh,80px)]">
                <p className='text-[11px] uppercase text-gray-500 font-semibold mb-8 tracking-[0.25em]'>
                    the architects of my vision
                </p>
                <motion.h2
                    initial={{ opacity: 0, y: 28 }}
                    animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                    transition={{ duration: 1 }}
                    className="font-serif italic text-[clamp(52px,9vw,128px)] leading-none text-[#1c2e4a]"
                >
                    My Mentors.
                </motion.h2>
            </div>

            {/* Grid — each card is independently observed */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(20px,3vw,40px)] px-4 py-8 md:py-12 md:px-16 max-w-[1280px] mx-auto">
                {MENTORS.map((mentor, i) => (
                    <MentorCard key={mentor.name} mentor={mentor} index={i} />
                ))}
            </div>
        </section>
    );
}