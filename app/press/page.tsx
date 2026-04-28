'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import BackButton from '@/components/BarkButton';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

// ── Press items ───────────────────────────────────────────────────────────────
const PRESS_ITEMS = [
    {
        type: 'TELEVISION',
        title: 'The Future of African Mobility',
        outlet: 'YOUTUBE',
        wide: true,
        url: 'https://www.youtube.com/watch?v=JCr91at35sA',
        videoId: 'JCr91at35sA',
    },
    {
        type: 'PUBLICATION',
        title: 'The Adventure of an Automobile Marketing Genius',
        outlet: 'GQ South Africa',
        wide: false,
        url: 'https://gq.co.za/wealth/2025-02-28-jubril-arogundade-the-adventure-of-an-automobile-marketing-genius/',
        image: '/images/press/gq-south-africa.jpg',
    },
    {
        type: 'PUBLICATION',
        title: 'Automobile Visionary Feature',
        outlet: 'Gleam Magazine',
        wide: false,
        url: 'https://www.instagram.com/p/DVrB2r8DNUk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        image: '/images/press/gleam-magazine.jpg',
    },
    {
        type: 'PUBLICATION',
        title: "Driving African's Automobile Future",
        outlet: 'Guardian Life',
        wide: false,
        url: 'https://guardian.ng/life/on-the-cover/jubril-arogundade-the-40-under-40-honoree-driving-africas-automotive-future/',
        image: '/images/press/guardian-life-2.jpg',
    },
    {
        type: 'PUBLICATION',
        title: "Steering Africa's Automobile Revolution",
        outlet: 'The Hollywood Magazine',
        wide: false,
        url: 'https://thehollywoodmagazine.com/lifestyle/jubril-arogundade-the-visionary-steering-africas-automobile-revolution/',
        image: '/images/press/Thehollywoodmagazine.com.jpg',
    },
    {
        type: 'PUBLICATION',
        title: 'Crossing Borders, Breaking Molds',
        outlet: 'Celecrity Los Angeles',
        wide: false,
        url: 'https://celebritylosangeles.com/business/crossing-borders-breaking-molds-jubril-arogundade-drive-to-redefine-the-auto-industry/',
        image: '/images/press/celebritylosangeles.com.jpg',
    },
    {
        type: 'PUBLICATION',
        title: 'Forty Under 40 Global Awards',
        outlet: 'Guardian Life',
        wide: false,
        url: 'https://guardian.ng/life/from-lagos-to-the-world-jubril-arogundade-in-the-forty-under-40-global-awards/',
        image: '/images/press/guardian-life.jpg',
    },
    {
        type: 'PUBLICATION',
        title: 'Jubril Arogundade Wins Big in Dubai',
        outlet: 'Dubai Image',
        wide: false,
        url: 'https://www.cnbcafrica.com/media/6365203985112/can-nigeria-scale-green-transport-infrastructure',
        image: '/images/press/dubaimag.ae.jpg',
    },

];

// ── Marquee items ─────────────────────────────────────────────────────────────
const MARQUEE_ITEMS = [
    {
        label: 'Guardian Life',
        url: 'https://guardian.ng/life/from-lagos-to-the-world-jubril-arogundade-in-the-forty-under-40-global-awards/',
    },
    {
        label: 'Forbes BLK',
        url: 'https://www.forbes.com/forbesblk/',
    },
    {
        label: 'GQ South Africa',
        url: 'https://gq.co.za/wealth/2025-02-28-jubril-arogundade-the-adventure-of-an-automobile-marketing-genius/',
    },
    {
        label: 'CNBC Africa',
        url: 'https://www.cnbcafrica.com/media/6365203985112/can-nigeria-scale-green-transport-infrastructure',
    },
    {
        label: 'VL Magazine',
        url: 'https://www.instagram.com/p/DXGppltCKbu/',
    },
];

// ── Marquee item ──────────────────────────────────────────────────────────────
function MarqueeItem({
    label,
    url,
}: {
    label: string;
    url: string;
}) {
    const [hovered, setHovered] = useState(false);

    return (
        <a
            href={url || '#'}
            onClick={(e) => !url && e.preventDefault()}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="inline-block"
        >
            <h3
                className={[
                    'font-cormorant whitespace-nowrap px-10 leading-none',
                    'transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
                    hovered
                        ? 'text-[#032e60] italic font-bold text-[40px] md:text-[60px] tracking-[-0.01em]'
                        : 'text-white font-light italic text-[40px] md:text-[60px] tracking-[0.02em]',
                ].join(' ')}
            >
                {label}
            </h3>
        </a>
    );
}

// ── Press card ────────────────────────────────────────────────────────────────
function PressCard({
    item,
    index,
    inView,
}: {
    item: (typeof PRESS_ITEMS)[0];
    index: number;
    inView: boolean;
}) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`relative cursor-pointer ${item.wide ? 'col-span-2' : 'col-span-1'}`}
        >
            {/* ── WIDE: type badge + outlet ABOVE image ── */}
            {item.wide && (
                <div className="flex items-center justify-between mb-4">
                    <p className="font-cormorant text-[9px] tracking-[0.28em] uppercase text-white bg-[#032e60] px-2.5 py-1">
                        {item.type}
                    </p>

                </div>
            )}

            {/* ── Image area ── */}
            <div
                className={[
                    'relative w-full overflow-hidden mb-5 bg-[#161616]',
                    item.wide ? 'aspect-[16/6]' : 'aspect-[4/5]',
                ].join(' ')}
            >
                {item.videoId ? (
                    <iframe
                        src={`https://www.youtube.com/embed/${item.videoId}`}
                        title={item.title}
                        className="absolute inset-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                ) : (
                        <img
                            src={item.image}
                            alt={item.title}
                            className={`
            absolute inset-0 w-full h-full object-cover
            transition-all duration-500
            ${hovered ? 'scale-105 blur-sm' : 'scale-100 blur-0'}
        `}
                        />
                )}
                {/* ── NARROW: outlet label — absolute top-right ── */}
                {!item.wide && (
                    <div
                        className={[
                            'absolute  top-1 left-1 md:top-3 md:left-3 z-20',
                            'transition-opacity duration-300',
                            hovered ? 'opacity-0' : 'opacity-100',
                        ].join(' ')}
                    >
                        <p className="font-cormorant font-semibold text-[8px] md:text-[9px] tracking-[0.22em] uppercase text-white bg-[#032e60] backdrop-blur-sm px-1.5 md:px-2.5 py-1 md:py-1.5 border border-white/10">
                            {item.type}
                        </p>
                    </div>
                )}
                <p className="font-cormorant font-semibold text-[10px] tracking-[0.28em] uppercase text-white/60">
                    {item.outlet}
                </p>

                {/* Blur overlay on hover */}
                <div
                    className={[
                        'absolute inset-0 z-[1] transition-all duration-500',
                        hovered ? 'backdrop-blur-sm bg-black/40' : 'backdrop-blur-0 bg-transparent',
                    ].join(' ')}
                />

                {/* Hover CTA — centered inside image */}
                <div
                    className={[
                        'absolute inset-0 z-[2] flex flex-col items-center justify-center gap-4',
                        'transition-all duration-400',
                        hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
                    ].join(' ')}
                >
                    <h3 className="font-cormorant font-normal text-white text-center px-6 text-[clamp(18px,2.2vw,26px)] leading-[1.2] tracking-[-0.01em]">
                        {item.outlet}
                    </h3>

                    <a href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                        className="flex items-center rounded-full gap-2 border-white border text-white  hover:bg-white hover:text-[#032e60] font-cormorant font-semibold text-[9px] tracking-[0.28em] uppercase px-4 py-2.5 transition-all duration-300 hover:scale-[1.03]"
                    >
                        READ FULL FEATURE
                        <FaArrowUpRightFromSquare className="w-2.5 h-2.5" />
                    </a>
                </div>
            </div>

            {/* ── Title row (below image, always) ── */}
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h3
                        className={[
                            'font-cormorant italic font-normal  text-[clamp(16px,2.5vw,28px)]',
                            'tracking-[-0.01em] leading-[1.15] mb-1.5',
                            'transition-colors duration-300',
                            hovered ? 'text-white' : 'text-white/85',
                        ].join(' ')}
                    >
                        {item.title}
                    </h3>
                    {/* For narrow cards, outlet also echoed below */}
                    <p className="font-cormorant font-semibold text-[8px] md:text-[10px] tracking-[0.28em] uppercase text-white">
                        {item.outlet}
                    </p>
                </div>

                <ArrowRight
                    size={18}
                    className={[
                        'flex-shrink-0 mt-1 transition-all duration-300',
                        hovered
                            ? 'text-white/90 translate-x-0.5 -translate-y-0.5'
                            : 'text-white',
                    ].join(' ')}
                />
            </div>
        </motion.div>
    );
}

// ── Main Press Page ───────────────────────────────────────────────────────────
export default function PressPage() {
    const heroRef = useRef(null);
    const gridRef = useRef(null);
    const heroInView = useInView(heroRef, { once: false });
    const gridInView = useInView(gridRef, { once: false, margin: '-8%' });

    return (
        <div className="bg-black min-h-screen">
            <style>{`
                @keyframes marquee-left {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes marquee-right {
                    0%   { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .marquee-left  { animation: marquee-left  28s linear infinite; }
                .marquee-right { animation: marquee-right 22s linear infinite; }
                .marquee-left:hover,
                .marquee-right:hover { animation-play-state: paused; }
            `}</style>

            {/* ── HERO ── */}
            <section
                ref={heroRef}
                className="px-6 sm:px-10 lg:px-16 xl:px-20 pt-[clamp(140px,12vh,140px)] pb-[clamp(60px,8vh,100px)]"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-[clamp(40px,6vw,100px)] items-start">
                    {/* Left */}
                    <div>
                        <div className="absolute z-10 left-6 md:left-8 top-23">
                            <BackButton />
                        </div>
                        <motion.h1
                            initial={{ opacity: 0, x: -24 }}
                            animate={heroInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-6 font-cormorant italic font-normal text-[clamp(72px,11vw,152px)] leading-[0.9] tracking-[-0.02em] text-white"
                        >
                            Spotlight.
                        </motion.h1>
                    </div>

                    {/* Right */}
                    <div className="flex flex-col">
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={heroInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="font-bold text-[10px] tracking-[0.32em] uppercase text-white mb-4"
                        >
                            Global Media Presence
                        </motion.p>
                        <motion.h4
                            initial={{ opacity: 0, y: 20 }}
                            animate={heroInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.9, delay: 0.38 }}
                            className="font-cormorant italic font-light text-[clamp(18px,2.8vw,30px)] leading-[1.45] tracking-[-0.005em] text-white pt-[0.15em]"
                        >
                            A curated archive of televised insights, editorial features, and global
                            dialogues documenting Jubril&apos;s work and contribution to the automobile industry.
                        </motion.h4>
                        <div className="h-px w-10 bg-white mt-8 md:mt-10" />
                    </div>
                </div>

            </section>

            {/* ── PRESS GRID ── */}
            <section
                ref={gridRef}
                className="px-4 sm:px-10 lg:px-16 xl:px-25 py-[clamp(80px,10vh,120px)]"
            >
                <div className="grid grid-cols-2 gap-x-6 lg:gap-x-20 gap-y-10 lg:gap-y-20">
                    {PRESS_ITEMS.map((item, i) => (
                        <PressCard key={i} item={item} index={i} inView={gridInView} />
                    ))}
                </div>
            </section>

            {/* ── MARQUEE SECTION ── */}
            <section className="border-t border-white/[0.07] pt-[clamp(56px,8vh,96px)] pb-[clamp(56px,8vh,96px)] overflow-hidden">
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="font-cormorant font-bold text-[30px] md:text-[45px]  tracking-[0.02em] text-white/25 text-center mb-[clamp(32px,5vh,56px)]"
                >
                    <span className='italic text-white'>Global</span> Network
                </motion.h3>

                <div className="overflow-hidden w-full mb-5">
                    <div className="marquee-left flex w-max">
                        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(
                            (item, i) => (
                                <MarqueeItem
                                    key={i}
                                    label={item.label}
                                    url={item.url}
                                />
                            )
                        )}
                    </div>
                </div>

                <div className="overflow-hidden w-full">
                    <div className="marquee-right flex w-max">
                        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(
                            (item, i) => (
                                <MarqueeItem
                                    key={i}
                                    label={item.label}
                                    url={item.url}
                                />
                            )
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}