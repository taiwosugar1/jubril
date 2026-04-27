'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Link from 'next/link';
import { CarData, CARS_DB } from '@/lib/cars';

export default function PersonalFavorites() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [phase, setPhase] = useState<'intro' | 'cars'>('intro');

    const touchStartX = useRef<number>(0);
    const touchStartY = useRef<number>(0);

    const canGoBack = phase === 'intro' ? false : activeIndex > 0 || phase === 'cars';
    const canGoForward = phase === 'intro' ? true : activeIndex < CARS_DB.length - 1;

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
            opacity: 1, y: 0,
            transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
        },
    });

    return (
        // Exactly 100vh — one natural page slot, no scroll interception
        <div
            className="relative w-full h-screen bg-black overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {/* Cars full bleed background */}
            <div className="absolute inset-0 z-0">
                <CarsFullscreen activeIndex={activeIndex} phase={phase} />
            </div>

            {/* Title panel — animates out when phase changes to cars */}
            <AnimatePresence>
                {phase === 'intro' && (
                    <motion.div
                        key="intro-panel"
                        initial={{ x: 0, opacity: 1 }}
                        exit={{ x: '-105%', opacity: 0 }}
                        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                        className="
                            absolute inset-y-0 left-0 z-20
                            w-[90vw] sm:w-[70vw] lg:w-[40vw]
                            flex flex-col justify-center
                            px-8 sm:px-12 lg:px-16
                            bg-gradient-to-r from-black via-black/95 to-transparent
                        "
                    >
                        <motion.p
                            variants={fadeUp(0)} initial="hidden" animate="visible"
                            className="font-cormorant not-italic font-normal text-[11px] tracking-[0.36em] uppercase text-white/36 mb-5 lg:mb-7"
                        >
                            The Collection
                        </motion.p>
                        <motion.h2
                            variants={fadeUp(0.1)} initial="hidden" animate="visible"
                            className="font-cormorant italic font-normal text-[clamp(50px,7vw,120px)] leading-[0.92] tracking-[-0.015em] text-white m-0"
                        >
                            Personal
                        </motion.h2>
                        <motion.h2
                            variants={fadeUp(0.18)} initial="hidden" animate="visible"
                            className="font-cormorant not-italic font-light text-[clamp(50px,7vw,120px)] leading-[1.06] tracking-[-0.015em] text-[#001F3F] m-0"
                        >
                            Favorites.
                        </motion.h2>
                        <motion.p
                            variants={fadeUp(0.28)} initial="hidden" animate="visible"
                            className="font-cormorant italic font-light text-sm sm:text-base lg:text-[1.1rem] leading-[1.72] text-white/40 mt-5 lg:mt-9 max-w-[360px] hidden sm:block"
                        >
                            A curated selection of high-performance vehicles that defines Jubril&apos;s personal standard for automotive excellence and innovation
                        </motion.p>
                        <motion.div
                            variants={fadeUp(0.45)} initial="hidden" animate="visible"
                            className="mt-10 flex items-center gap-3"
                        >
                            <div className="w-8 h-px bg-white/20" />
                            <span className="font-cormorant text-[10px] tracking-[0.3em] uppercase text-white/28">
                                Swipe or use arrows to explore
                            </span>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Nav buttons */}
            <div className="absolute right-6 sm:right-8 top-22 lg:right-10 z-50 flex items-center gap-3">
                <button
                    onClick={goPrev}
                    disabled={!canGoBack}
                    aria-label="Previous"
                    className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${canGoBack
                        ? 'bg-[#001F3F] text-white hover:bg-[#254d8a] cursor-pointer'
                            : 'bg-white/6 text-white/22 cursor-not-allowed'
                        }`}
                >
                    <FiChevronLeft size={20} />
                </button>
                <button
                    onClick={goNext}
                    disabled={!canGoForward}
                    aria-label="Next"
                    className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${canGoForward
                        ? 'bg-[#001F3F] text-white hover:bg-[#254d8a] cursor-pointer'
                            : 'bg-white/6 text-white/22 cursor-not-allowed'
                        }`}
                >
                    <FiChevronRight size={20} />
                </button>
            </div>
        </div>
    );
}

// ─── CarsFullscreen ───────────────────────────────────────────────────────────

function CarsFullscreen({
    activeIndex,
    phase,
}: {
    activeIndex: number;
    phase: 'intro' | 'cars';
}) {
    const peekIndex = Math.min(activeIndex + 1, CARS_DB.length - 1);
    const isLast = activeIndex === CARS_DB.length - 1;

    if (phase === 'intro') {
        // During intro, show first car dimmed in background
        return (
            <div className="w-full h-full">
                <CarSlide car={CARS_DB[0]} isActive={false} />
            </div>
        );
    }

    return (
        <div className="relative w-full h-full flex">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={`active-${activeIndex}`}
                    initial={{ x: '100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: '-30%', opacity: 0 }}
                    transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                    className="relative h-full flex-shrink-0 overflow-hidden"
                    style={{ width: isLast ? '100%' : 'calc(100% - 10%)' }}
                >
                    <CarSlide car={CARS_DB[activeIndex]} isActive />
                </motion.div>
            </AnimatePresence>

            {!isLast && (
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={`peek-${peekIndex}`}
                        initial={{ x: '100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.72, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
                        className="relative h-full flex-1 overflow-hidden"
                    >
                        <CarSlide car={CARS_DB[peekIndex]} isActive={false} />
                        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/60 to-transparent z-10 pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            )}
        </div>
    );
}

// ─── CarSlide — unchanged ─────────────────────────────────────────────────────

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
                className={`object-cover transition-[filter,transform] duration-700 ${hovered
                    ? 'brightness-[0.78] scale-[1.025]'
                    : isActive
                        ? 'brightness-[0.55]'
                        : 'brightness-[0.32]'
                    }`}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent z-[1] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-[1] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.75 }}
                transition={{ duration: 0.22 }}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/12 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white pointer-events-none"
            >
                <FiArrowUpRight size={16} />
            </motion.div>

            {isActive && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col absolute bottom-18 left-8 z-10 pointer-events-none"
                >
                    <div className="mb-4">
                        <span className="font-cormorant not-italic font-normal text-[10px] tracking-[0.28em] uppercase text-white/85 bg-[#001F3F]/85 backdrop-blur-sm px-3 py-1.5 whitespace-nowrap">
                            {car.brand}
                        </span>
                    </div>
                    <p className="font-cormorant italic font-normal text-[clamp(32px,5vw,72px)] leading-none tracking-[0.01em] text-white/92 m-0">
                        {car.name}
                    </p>
                </motion.div>
            )}

            {isActive && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="absolute  bottom-1/3 md:bottom-18 right-8 z-10 text-right flex flex-col gap-[3px] pointer-events-none"
                >
                    {car.specs?.map((spec) => (
                        <p
                            key={spec.label}
                            className="font-cormorant not-italic font-light text-[10px] tracking-[0.22em] uppercase text-white/38 m-0"
                        >
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