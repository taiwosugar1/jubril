'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

// ── Marquee gallery images ───────────────────────────────────────────
const MARQUEE_IMAGES = [
    '/images/1.png',
    '/images/2.png',
    '/images/3.png',
    '/images/4.png',
    '/images/5.png',
    '/images/6.png',
    '/images/7.png',
];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
    const items = [...MARQUEE_IMAGES, ...MARQUEE_IMAGES, ...MARQUEE_IMAGES];
    return (
        <div className="overflow-hidden w-full">
            <div
                className={`flex gap-2 md:gap-30 w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'
                    }`}
                style={{ willChange: 'transform' }}
            >
                {items.map((src, i) => (
                    <div
                        key={i}
                        className="relative flex-shrink-0 w-[330px] sm:w-[340px] h-[180px] sm:h-[210px] overflow-hidden"
                    >
                        <Image
                            src={src}
                            alt="Gallery"
                            fill
                            sizes="340px"
                            className="object-cover grayscale opacity-30 transition-all duration-700"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

// ── Animation variants ───────────────────────────────────────────────
const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
    }),
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
        opacity: 1,
        transition: { duration: 1.1, delay: i * 0.1, ease: 'easeOut' },
    }),
};

export default function StrategicAlliances() {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: false, margin: '-15%' });

    return (
        <>
            <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-reverse {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-reverse { animation: marquee-reverse 62s linear infinite; }
      `}</style>

            <section
                ref={ref}
                className="relative w-full overflow-hidden bg-black min-h-screen flex flex-col items-center justify-center px-[clamp(24px,6vw,80px)] py-[clamp(50px,9vh,80px)]"
            >
                {/* Grain overlay */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-60"
                    style={{
                        backgroundImage:
                            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.035\'/%3E%3C/svg%3E")',
                        backgroundSize: '256px 256px',
                    }}
                />

                {/* Label */}
                <motion.p
                    custom={0}
                    variants={fadeIn}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="text-center mb-[clamp(20px,3vh,36px)] text-[clamp(11px,1vw,12px)] tracking-[0.38em] uppercase text-white/60 font-[Montserrat]"
                >
                    The Network
                </motion.p>

                {/* Headline */}
                <div className="text-center mb-[clamp(32px,5vh,60px)] leading-none">
                    <motion.h2
                        custom={1}
                        variants={fadeUp}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        className="font-[Cormorant_Garamond,Georgia,serif] italic font-normal text-[clamp(56px,11vw,152px)] leading-[0.92] text-white tracking-[-0.01em]"
                    >
                        Strategic
                    </motion.h2>

                    <motion.h2
                        custom={2}
                        variants={fadeUp}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        className="font-[Cormorant_Garamond,Georgia,serif] not-italic font-light text-[clamp(56px,11vw,152px)] leading-[1.05] text-white/30 tracking-[-0.01em]"
                    >
                        Alliances.
                    </motion.h2>
                </div>

                {/* Body */}
                <motion.div
                    custom={3}
                    variants={fadeIn}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="text-center max-w-[680px] mb-[clamp(56px,8vh,96px)]"
                >
                    <p className="text-[#ffff] m-0 md:text-xl text-lg font-semibold italic leading-[1.7] font-[Cormorant_Garamond,Georgia,serif]">
                        Aligning with global automotive pioneers to redefine the standards of excellence
                        and sustainability across the continent.
                    </p>
                </motion.div>

                <MarqueeRow reverse />
            </section>
        </>
    );
}