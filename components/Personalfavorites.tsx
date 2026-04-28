'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Link from 'next/link';
import { CarData, CARS_DB } from '@/lib/cars';

export default function PersonalFavorites() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [phase, setPhase] = useState<'intro' | 'cars'>('intro');

    const sectionRef = useRef<HTMLDivElement | null>(null);
    const hasEntered = useRef(false);

    const touchStartX = useRef<number>(0);
    const touchStartY = useRef<number>(0);

    const canGoBack = phase === 'cars' && activeIndex > 0;
    const canGoForward = phase === 'intro' ? true : activeIndex < CARS_DB.length - 1;

    // ── Intersection: auto-trigger intro→cars when section is fully in view ──
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const ratio = entry.intersectionRatio;

                // Fully in view → slide panel away after 1s
                if (ratio >= 0.85 && !hasEntered.current && phase === 'intro') {
                    hasEntered.current = true;
                    setTimeout(() => {
                        setPhase('cars');
                        setActiveIndex(0);
                    }, 500); //0.5 seconds
                }

                // Scrolled away → reset so it triggers again next visit
                if (ratio <= 0.2) {
                    hasEntered.current = false;
                    setPhase('intro');
                    setActiveIndex(0);
                }
            },
            { threshold: [0.2, 0.5, 0.85, 1] }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [phase]);

    // ── Arrow nav — instant ──
    const goNext = () => {
        if (phase === 'intro') {
            setPhase('cars');
            setActiveIndex(0);
        } else if (activeIndex < CARS_DB.length - 1) {
            setActiveIndex((i) => i + 1);
        }
    };

    const goPrev = () => {
        if (phase === 'cars' && activeIndex === 0) {
            setPhase('intro');
        } else if (phase === 'cars') {
            setActiveIndex((i) => i - 1);
        }
    };

    // ── Touch swipe — instant ──
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
        touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const dx = touchStartX.current - e.changedTouches[0].clientX;
        const dy = Math.abs(touchStartY.current - e.changedTouches[0].clientY);
        if (Math.abs(dx) > 40 && Math.abs(dx) > dy * 1.5) {
            if (dx > 0) goNext();
            else goPrev();
        }
    };

    const fadeUp = (delay: number) => ({
        hidden: { opacity: 0, y: 36 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
        },
    });

    return (
        <div
            ref={sectionRef}
            className="relative w-full md:h-screen h-[80vh] bg-black overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {/* ─── CARS BACKGROUND (always mounted, revealed as panel slides away) ─── */}
            <div className="absolute inset-0 z-0">
                <CarsFullscreen activeIndex={activeIndex} phase={phase} />
            </div>

            {/* ─── INTRO PANEL — full screen, slides left on exit ─── */}
            <AnimatePresence>
                {phase === 'intro' && (
                    <motion.div
                        key="intro-panel"
                        initial={{ x: 0, opacity: 1 }}
                        exit={{ x: '-100%', opacity: 1 }}
                        transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1] }}
                        className="absolute inset-0 z-20 flex flex-col justify-center px-8 sm:px-12 lg:px-16 bg-black"
                    >
                        <motion.p
                            variants={fadeUp(0)}
                            initial="hidden"
                            animate="visible"
                            className="font-cormorant text-[11px] tracking-[0.36em] uppercase text-white/36 mb-5"
                        >
                            The Collection
                        </motion.p>

                        <motion.h2
                            variants={fadeUp(0.1)}
                            initial="hidden"
                            animate="visible"
                            className="font-cormorant italic text-[clamp(70px,7vw,120px)] text-white"
                        >
                            Personal
                        </motion.h2>

                        <motion.h2
                            variants={fadeUp(0.18)}
                            initial="hidden"
                            animate="visible"
                            className="font-cormorant text-[clamp(70px,7vw,120px)] text-[#001F3F]"
                        >
                            Favorites.
                        </motion.h2>

                        <motion.p
                            variants={fadeUp(0.28)}
                            initial="hidden"
                            animate="visible"
                            className="font-cormorant text-sm text-white/60 mt-5 max-w-[360px] hidden sm:block"
                        >
                            A curated selection of high-performance vehicles that defines
                            Jubril&apos;s personal standard for automotive excellence and innovation
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ─── NAV BUTTONS ─── */}
            <div className="absolute right-6 sm:right-8 top-22 z-50 flex items-center gap-3">
                <button
                    onClick={goPrev}
                    disabled={!canGoBack}
                    className="w-11 h-11 rounded-full flex items-center justify-center bg-[#001F3F] text-white disabled:opacity-30 disabled:cursor-not-allowed transition-opacity duration-200"
                >
                    <FiChevronLeft />
                </button>

                <button
                    onClick={goNext}
                    disabled={!canGoForward}
                    className="w-11 h-11 rounded-full flex items-center justify-center bg-[#001F3F] text-white disabled:opacity-30 disabled:cursor-not-allowed transition-opacity duration-200"
                >
                    <FiChevronRight />
                </button>
            </div>
        </div>
    );
}

// ─── CarsFullscreen ───────────────────────────────────────────────────────────

function CarsFullscreen({
    activeIndex,
}: {
        activeIndex: number;
    }) {
    return (
        <div className="relative w-full h-full overflow-hidden">
            {/* SLIDER TRACK */}
            <div
                className="
                    flex h-full
                    transition-transform duration-700 ease-[0.22,1,0.36,1]
                "
                style={{
                    transform: `translateX(-${activeIndex * 100}%)`,
                }}
            >
                {CARS_DB.map((car, i) => (
                    <div
                        key={car.slug}
                        className="
                            h-full flex-shrink-0
                            w-full md:w-[90%]
                        "
                    >
                        <CarSlide
                            car={car}
                            isActive={i === activeIndex}
                        />
                    </div>
                ))}
            </div>

            {/* NEXT PREVIEW (DESKTOP ONLY) */}
            {activeIndex < CARS_DB.length - 1 && (
                <div className="
                    absolute right-0 top-0 h-full w-[10%]
                    hidden md:block
                    pointer-events-none
                ">
                    <CarSlide
                        car={CARS_DB[activeIndex + 1]}
                        isActive={false}
                    />

                    <div className="
                        absolute inset-0
                        bg-gradient-to-l from-black/70 to-transparent
                    " />
                </div>
            )}
        </div>
    );
}

// ─── CarSlide ─────────────────────────────────────────────────────────────────

function CarSlide({ car, isActive }: { car: CarData; isActive: boolean }) {
    const [hovered, setHovered] = useState(false);

    return (
        <Link
            href={`/cars/${car.slug}`}
            className="block w-full h-full relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Image
                src={car.image}
                alt={car.name}
                fill
                sizes="(max-width: 1024px) 90vw, 76vw"
                className={`md:object-cover object-contain transition-[filter,transform] duration-700 ${hovered
                        ? 'brightness-[0.78] scale-[1.025]'
                        : isActive
                        ? 'brightness-[0.55]'
                        : 'brightness-[0.32]'
                    }`}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent z-[1]" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-[1]" />

            <motion.div
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.75 }}
                transition={{ duration: 0.22 }}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/12 border border-white/20 flex items-center justify-center text-white"
            >
                <FiArrowUpRight size={16} />
            </motion.div>

            {isActive && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute bottom-18 left-4 md:left-8 z-10"
                >
                    <span className="text-[10px] uppercase tracking-[0.28em] text-white/85 bg-[#001F3F]/85 px-3 py-1.5">
                        {car.brand}
                    </span>
                    <p className="font-cormorant italic text-[clamp(32px,5vw,72px)] text-white m-0 mt-3">
                        {car.name}
                    </p>
                </motion.div>
            )}

            {isActive && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="absolute bottom-42 md:bottom-18 right-4 md:right-12 z-10 text-right"
                >
                    {car.specs?.map((spec) => (
                        <p key={spec.label} className="md:text-[13px] text-[10px] text-white/40 uppercase">
                            {spec.value}
                        </p>
                    ))}
                </motion.div>
            )}

            {!isActive && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-10 px-4 pointer-events-none">
                    <p className="font-cormorant italic text-[clamp(18px,2vw,28px)] text-white/50 text-center leading-tight">
                        {car.name}
                    </p>
                </div>
            )}
        </Link>
    );
}