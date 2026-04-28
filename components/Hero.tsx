'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import MarqueeRow from './MarqueeRow';

const TRANSITION_MS = 850;

const MARQUEE_ROWS = [
    { word: 'HUSBAND', dir: 'left' as const, duration: 30 },
    { word: 'FATHER', dir: 'right' as const, duration: 25 },
    { word: 'AUTOMOBILE LEADER', dir: 'left' as const, duration: 35 },
    { word: 'EV REVOLUTIONARY', dir: 'right' as const, duration: 28 },
];

export default function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isTransitioningRef = useRef(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const [phase, setPhase] = useState<'intro' | 'entering' | 'scrolled' | 'returning'>('intro');
    const [textPhase, setTextPhase] = useState<'arogundade' | 'oflago'>('arogundade');

    /* ── subtitle switch ── */
    useEffect(() => {
        const t = setTimeout(() => setTextPhase('oflago'), 3000);
        return () => clearTimeout(t);
    }, []);

    /* ── scroll trigger based on page scroll ── */
    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();

            // when user scrolls past top ~100px → trigger transition
            if (rect.top < -100 && phase === 'intro' && !isTransitioningRef.current) {
                isTransitioningRef.current = true;
                setPhase('entering');

                timerRef.current = setTimeout(() => {
                    setPhase('scrolled');
                    isTransitioningRef.current = false;
                }, TRANSITION_MS);
            }

            // scroll back up → reset
            if (rect.top >= -50 && phase === 'scrolled' && !isTransitioningRef.current) {
                isTransitioningRef.current = true;
                setPhase('returning');

                timerRef.current = setTimeout(() => {
                    setPhase('intro');
                    isTransitioningRef.current = false;
                }, TRANSITION_MS);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [phase]);

    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);

    const showIntro = phase === 'intro' || phase === 'returning';
    const showScrolled = phase === 'entering' || phase === 'scrolled';

    return (
        <section ref={sectionRef} className="relative w-full h-[200vh]">

            {/* sticky viewport */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">

                {/* ── shared background ── */}
                <img
                    src="/images/consult.jpg"
                    alt=""
                    className="absolute inset-0 w-full h-full grayscale object-cover"
                />
                <div className="absolute inset-0 bg-black/90" />

                {/* ════ SCROLLED STATE ════ */}
                <AnimatePresence>
                    {showScrolled && (
                        <motion.div
                            key="scrolled"
                            className="absolute inset-0 bg-[#000C1A]"
                            style={{ zIndex: 10 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: TRANSITION_MS / 1000, ease: 'easeInOut' }}
                        >
                            {/* Marquee rows */}
                            <div className="absolute inset-0 flex flex-col justify-center overflow-hidden">
                                {MARQUEE_ROWS.map((row, i) => (
                                    <MarqueeRow key={i} {...row} />
                                ))}
                            </div>

                            {/* Radial vignette */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    background:
                                        'radial-gradient(ellipse 80% 80% at 40% 50%, transparent 40%, rgba(0,12,26,0.72) 100%)',
                                }}
                            />

                            <div className="absolute inset-0 flex items-center">
                                {/* Text block */}
                                <div className="
    text-center md:text-start
    relative z-10 flex flex-col
    pl-6 sm:pl-10 md:pl-[7vw] lg:pl-[10vw]
    w-full md:w-[52%] lg:w-[48%]
    pb-[75vw] sm:pb-[20vw] md:pb-0
">
                                    <motion.h1
                                        initial={{ opacity: 0, x: -120, scale: 1.25, filter: 'blur(10px)' }}
                                        whileInView={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
                                        viewport={{ once: true, margin: '-80px' }}
                                        transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                                        className="font-cormorant italic font-normal text-[clamp(52px,18vw,110px)] leading-[0.92] text-white"
                                    >
                                        Jubril
                                    </motion.h1>

                                    <motion.h2
                                        initial={{ opacity: 0, x: -140, scale: 1.3, filter: 'blur(12px)' }}
                                        whileInView={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
                                        viewport={{ once: true, margin: '-80px' }}
                                        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                        className="font-cormorant italic font-light text-[clamp(50px,17vw,110px)] leading-[1.05] text-white/[0.28]"
                                    >
                                        Arogundade.
                                    </motion.h2>

                                    <motion.div
                                        initial={{ opacity: 0, x: -60, scale: 1.1 }}
                                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                        className="flex items-center justify-center md:justify-start gap-4 mt-5 md:mt-10"
                                    >
                                        <div className="w-8 h-px bg-white/35 flex-shrink-0" />
                                        <span className="font-cormorant font-light not-italic text-[12px] sm:text-[11px] tracking-[0.28em] uppercase text-white/45">
                                            CEO, Hybrid Motors
                                        </span>
                                    </motion.div>
                                </div>

                                {/* Portrait */}
                                <motion.div
                                    initial={{ opacity: 0, y: 80, scale: 0.96 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 60, scale: 0.98 }}
                                    transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                    className="
                                        absolute bottom-0
                                        left-1/2 -translate-x-1/2
                                        md:left-auto md:translate-x-0 md:right-0
                                        w-[90%] sm:w-[70%] md:w-[52%] lg:w-[48%]
                                        h-[85%] sm:h-[90%] md:h-full
                                    "
                                >
                                    <div className="relative w-full h-full">
                                        <Image
                                            src="/images/smile.webp"
                                            alt="Jubril Arogundade"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            priority
                                            className="object-contain object-bottom"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 pointer-events-none h-[18%] bg-gradient-to-t from-[#000C1A] to-transparent" />
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* ════ INTRO STATE ════ */}
                <AnimatePresence>
                    {showIntro && (
                        <motion.div
                            key="intro"
                            className="absolute inset-0 flex items-center justify-center"
                            style={{ zIndex: 20 }}
                            initial={{ opacity: phase === 'returning' ? 0 : 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6, ease: 'easeInOut' }}
                        >
                            <div className="text-center select-none px-4">
                                <motion.h1
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.1, ease: 'easeOut', delay: 0.3 }}
                                    className="font-cormorant italic font-normal text-7xl lg:text-[9em] md:leading-[0.55] leading-[1] tracking-[-0.01em] text-white"
                                >
                                    Jubril
                                </motion.h1>

                                <div className="relative h-[clamp(56px,12vw,180px)]">
                                    <AnimatePresence mode="wait">
                                        {textPhase === 'arogundade' ? (
                                            <motion.h2
                                                key="arogundade"
                                                initial={{ opacity: 0, y: 18 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -16 }}
                                                transition={{ duration: 0.65, ease: 'easeInOut' }}
                                                className="absolute inset-0 flex items-center justify-center font-cormorant font-light text-6xl lg:text-[9em] text-white/[0.22] tracking-[-0.01em] whitespace-nowrap"
                                            >
                                                of Lagos.
                                            </motion.h2>
                                        ) : (
                                            <motion.h2
                                                key="oflago"
                                                initial={{ opacity: 0, y: 18 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -16 }}
                                                transition={{ duration: 0.65, ease: 'easeInOut' }}
                                                className="absolute inset-0 flex items-center justify-center font-cormorant font-light text-6xl lg:text-[9em] text-white/[0.22] tracking-[-0.01em] whitespace-nowrap"
                                                >
                                                Arogundade.
                                            </motion.h2>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <div className="flex flex-col justify-center mt-10 items-center">
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1, delay: 1.2 }}
                                        className="mt-4 font-cormorant not-italic font-light text-[10px] tracking-[0.28em] uppercase text-white/50 hover:text-white/80 transition-colors duration-300"
                                    >
                                        Scroll to Explore
                                    </motion.p>
                                    <div className="w-px h-10 bg-white/20 relative overflow-hidden">
                                        <motion.div
                                            className="absolute top-0 left-0 w-full bg-white/60"
                                            animate={{ height: ['0%', '100%', '0%'], top: ['0%', '0%', '100%'] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}