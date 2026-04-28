'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import Link from 'next/link';

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
    }),
};

export default function LegacySection() {
    const videoRef = useRef(null);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, margin: '-10% 0px' });

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => { });
        }
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full min-h-screen flex flex-col lg:flex-row bg-black px-4 md:px-8 lg:px-25"
        >
            {/* ═════════ LEFT — VIDEO ═════════ */}
            {/* 
                Mobile:  full width, fixed height hero strip, overlay card overlaps into the blue panel below
                Desktop: 45% width, centered vertically, card overflows right
            */}
            <div className="
                relative
                w-full lg:w-[45%]
                flex items-center justify-center
                pt-16 mb-8 lg:mb-0 pb-0 lg:pt-0 lg:pb-0 lg:pr-15
            ">
                {/* Wrapper */}
                <div className="
                    relative
                    w-full lg:w-full
                    md:h-[60vw] h-[70vh] md:max-h-[56vh]
                    lg:aspect-[9/11] lg:h-auto lg:max-h-[82vh]
                ">
                    {/* Video container */}
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className="w-full h-full"
                        >
                            <video
                                ref={videoRef}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src="/videos/legacy.mp4" type="video/mp4" />
                            </video>

                            {/* Gradient */}
                            <div className="absolute bottom-0 left-0 right-0 h-[22%] bg-gradient-to-t from-black to-transparent pointer-events-none" />
                        </motion.div>
                    </div>

                    {/* Overlay Card */}
                    {/* 
                        Mobile:  sits at bottom-center, translates down so it overlaps the blue panel
                        Desktop: original bottom-right overflow position
                    */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 24 }}
                        transition={{ duration: 0.85, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                        className="
                            absolute z-20
                            bg-[#F7F4EF] shadow-[0_8px_40px_rgba(0,0,0,0.55)]
                            py-6 px-7 lg:py-8   lg:px-10
                            w-[min(240px,72%)] lg:w-[min(280px,60%)]

                            /* Mobile: bottom-center, overlaps down into the blue section */
                            -bottom-5 left-1/2 -translate-x-1/2 translate-y-1/2
                            lg:translate-x-0 lg:translate-y-0

                            /* Desktop: original bottom-right overflow */
                            lg:bottom-[-8%] lg:left-auto lg:-right-6
                        "
                    >
                        <p className="font-[Cormorant_Garamond] italic text-[clamp(22px,5vw,38px)] lg:text-[clamp(26px,3.2vw,38px)] leading-[1.18] text-[#0E0E0E] mb-3 lg:mb-4">
                            Created<br />Excellence.
                        </p>

                        <div className="w-9 h-px bg-black/25 mb-2 lg:mb-3" />

                        <p className="font-[Cormorant_Garamond] text-[9px] tracking-[0.24em] uppercase text-[#444] leading-[1.9]">
                            A decade of<br />
                            redefining the<br />
                            standards of luxury<br />
                            and mobility.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* ═════════ RIGHT — CONTENT ═════════ */}
            {/* 
                Mobile: full width, extra top padding to clear the overlay card
                Desktop: 55% width, original layout
            */}
            <div className="
                w-full lg:w-[55%]
                bg-[#0E2244]
                flex flex-col justify-start
                px-6 sm:px-10
                pt-30 pb-16
                lg:pt-24 lg:pb-24 lg:px-10
            ">
                {/* Eyebrow */}
                <motion.p
                    custom={0}
                    variants={fadeUp}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="font-[Cormorant_Garamond] text-[11px] tracking-[0.3em] uppercase text-white/45 mb-6"
                >
                    The Legacy
                </motion.p>

                {/* Heading */}
                <motion.div
                    custom={0.1}
                    variants={fadeUp}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="mb-8 lg:mb-10"
                >
                    <h2 className="font-[Cormorant_Garamond] italic text-[clamp(36px,8vw,78px)] lg:text-[clamp(42px,5.5vw,78px)] leading-[1.08] text-white">
                        Legacy built on
                    </h2>
                    <h2 className="font-[Cormorant_Garamond] text-[clamp(36px,8vw,78px)] lg:text-[clamp(42px,5.5vw,78px)] leading-[1.08] text-white/30">
                        Strategic
                    </h2>
                    <h2 className="font-[Cormorant_Garamond] text-[clamp(36px,8vw,78px)] lg:text-[clamp(42px,5.5vw,78px)] leading-[1.08] text-white/30">
                        Innovation.
                    </h2>
                </motion.div>

                {/* Quote */}
                <motion.blockquote
                    custom={0.2}
                    variants={fadeUp}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="border-l-2 border-white/20 pl-5 mb-8 lg:mb-10"
                >
                    <p className="font-[Cormorant_Garamond] italic text-[clamp(15px,4vw,22px)] lg:text-[clamp(16px,1.9vw,22px)] text-white/75 leading-[1.7]">
                        A dream born in Lagos, led to the building of a legacy.
                    </p>
                </motion.blockquote>

                {/* Paragraphs */}
                {[
                    `Jubril Arogundade is on a quest that transcends the mere sale of automobiles; he is architecting the very future of how a continent moves. His passion for the industry is the engine behind a decade of transformation, positioning him as the definitive voice in Nigeria's EV revolution. When you speak of sustainable power and the automotive shift in Nigeria, his name is the one that resonates.`,
                    `He understands that true leadership is about planting footprints in the sands of time that others can follow. His drive is fueled by a deep-seated belief that a wise man leaves an investment for his children, not just in wealth, but in a world that is better, cleaner, and more advanced than the one he found. He is building something his children will be proud to inherit`,
                    `Hybrid Motors Nigeria serves as the ultimate expression of his vision, where he translates raw passion into the tangible infrastructure that will define the next century of African movement.`,
                ].map((text, i) => (
                    <motion.p
                        key={i}
                        custom={0.3 + i * 0.1}
                        variants={fadeUp}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        className="font-[Cormorant_Garamond] text-lg text-white/60 leading-[1.8] mb-5 lg:mb-6"
                    >
                        {text}
                    </motion.p>
                ))}

                {/* CTA */}
                <Link
                    href="/resume"
                    className="
                        inline-flex items-center gap-3
                        max-w-[300px]
                        border border-white bg-white text-black
                        px-8 py-3
                        uppercase text-sm font-semibold
                        hover:bg-transparent hover:text-white transition
                        justify-center sm:justify-start
                    "
                >
                    View Resume and Impact
                    <FiArrowUpRight className="w-4 h-4" />
                </Link>
            </div>
        </section>
    );
}