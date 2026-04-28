'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const OriginSection = () => {
    const [showValues, setShowValues] = useState(false);

    return (
        <section className="w-full min-h-screen bg-black text-[[#F5F2ED]] px-6 py-20 md:px-20 md:py-32 flex flex-col justify-center relative overflow-hidden">

            <div className="absolute inset-0 opacity-5 pointer-events-none bg-color"></div>

            <div className="max-w-7xl mx-auto w-full flex items-center flex-col lg:flex-row gap-12 lg:gap-14 relative z-10">

                {/* LEFT COLUMN — untouched */}
                <div className="flex flex-col md:max-w-[50%] justify-start">
                    <h3 className="head-scroll text-xs md:text-sm uppercase tracking-[0.3em] text-zinc-400 font-sans mb-6">
                        The Origin
                    </h3>

                    <h1
                        style={{ letterSpacing: '0.01rem' }}
                        className="text-4xl md:text-6xl lg:text-7xl italic head leading-[1.1] mb-10"
                    >
                        <span className="block head text-white">A Dream Born in</span>
                        <span className="block head text-zinc-500">Lagos.</span>
                    </h1>

                    <div
                        style={{ letterSpacing: '0.06em', lineHeight: 1.8 }}
                        className="space-y-8 text-[#F5F2ED] leading-relaxed max-w-xl head italic text-[16px] md:text-[18px] font-light"
                    >
                        <p>
                            <span className="text-white font-medium">Jubril Arogundade</span> is the embodiment of the &quot;Jubril of Lagos&quot; identity, a title he wears as a badge of honor and a testament to his personal grit. For Jubril, Lagos was more than a hometown: it was his first masterclass in leadership, resilience, and the art of the possible.
                        </p>
                        <p>
                            While others saw chaos, Jubril saw opportunity. He mastered the city&apos;s relentless pulse and distilled it into a personal philosophy of Strategic Execution. He understood early on that to lead, one must first possess an uncompromising standard of excellence, a survival mechanism he honed on the very streets that now witness his revolution.
                        </p>
                        <p>
                            With limited resources but an ironclad conviction, Jubril proved that his dreams were not just valid, but inevitable. His journey from a young boy with a vision to a pioneer of African mobility is a masterclass in turning individual resilience into continental impact.
                        </p>
                        <p>
                            Today, Jubril stands as the architect of a new era.
                        </p>
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div
                    style={{ letterSpacing: '0.02em', lineHeight: 1.6 }}
                    className="flex flex-col md:max-w-[43%] md:px-10 italic head gap-16 mt-8 lg:mt-30"
                >
                    {/* North Star Panel — untouched */}
                    <div className="border border-zinc-900 max-w-xl rounded-sm p-6 md:p-8 bg-zinc-900/20 backdrop-blur-sm">
                        <h4 className="text-sm uppercase tracking-[0.2em] text-zinc-400 font-sans mb-3">
                            Jubril&apos;s North Star
                        </h4>
                        <p className="mb-5 font-serif text-xl talic leading-snug text-[#F5F2ED]">
                            Defining the next century of <span className="text-zinc-400">African movement</span> through clean energy and innovation.
                        </p>

                        <h4 className="text-sm uppercase tracking-[0.2em] text-zinc-400 font-sans mb-3">
                            Jubril&apos;s Code
                        </h4>
                        <p className="font-serif mb-5 text-xl talic leading-snug text-[#F5F2ED]">
                            Strategic execution, uncompromising excellence, and a commitment to continental impact.
                        </p>

                        <h4 className="text-sm uppercase tracking-[0.2em] text-zinc-400 font-sans mb-3">
                            Jubril&apos;s Drive
                        </h4>
                        <p className="font-serif text-xl talic leading-snug text-[#F5F2ED]">
                            Accelerating the transition to sustainable mobility across West Africa.
                        </p>

                        <div className="flex gap-3 mt-8">
                            <div className="h-[2px] w-8 bg-zinc-700 rounded-full"></div>
                            <div className="h-[2px] w-8 bg-white rounded-full"></div>
                            <div className="h-[2px] w-8 bg-zinc-700 rounded-full"></div>
                        </div>
                    </div>

                    {/* Values Grid — collapsible */}
                    <div className="max-w-xl flex items-center justify-center md:justify-start flex-col">

                        {/* Toggle button */}
                        <button
                            onClick={() => setShowValues(v => !v)}
                            className="flex items-center gap-3 group mb-6"
                        >
                            <h4 className="text-sm font-bold uppercase tracking-[0.28em] text-white group-hover:text-white transition-colors duration-300">
                                {showValues ? 'Hide Values' : 'Show Values'}
                            </h4>
                            <span className="flex items-center justify-center w-5 h-5 rounded-full border border-zinc-700 group-hover:border-white transition-colors duration-300">
                                <motion.svg
                                    animate={{ rotate: showValues ? 180 : 0 }}
                                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                    width="9" height="9" viewBox="0 0 9 9" fill="none"
                                >
                                    <path d="M1 3L4.5 6.5L8 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 group-hover:text-white transition-colors duration-300" />
                                </motion.svg>
                            </span>
                        </button>

                        {/* Collapsible grid */}
                        <AnimatePresence initial={false}>
                            {showValues && (
                                <motion.div
                                    key="values"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                    style={{ overflow: 'hidden' }}
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2 pb-1">
                                        <div>
                                            <h5 className="text-xl font-serif italic text-[#F5F2ED] mb-2">Excellence</h5>
                                            <p className="text-sm text-zinc-400 uppercase tracking-wide leading-relaxed">
                                                Uncompromising standards in every detail.
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="text-xl font-serif italic text-zinc-200 mb-2">Innovation</h5>
                                            <p className="text-sm text-zinc-400 uppercase tracking-wide leading-relaxed">
                                                Pioneering the future of African mobility.
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="text-xl font-serif italic text-[#F5F2ED] mb-2">Integrity</h5>
                                            <p className="text-sm text-zinc-400 uppercase tracking-wide leading-relaxed">
                                                Building trust through transparent leadership.
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="text-xl font-serif italic text-[#F5F2ED] mb-2">Impact</h5>
                                            <p className="text-sm text-zinc-400 uppercase tracking-wide leading-relaxed">
                                                Creating value for the continent and its people.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OriginSection;