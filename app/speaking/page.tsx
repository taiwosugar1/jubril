'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { X } from 'lucide-react';
import BackButton from '@/components/BarkButton';
import { FaArrowDown } from 'react-icons/fa';

const garamond = { fontFamily: "'Cormorant Garamond', serif" };

export default function SpeakingInquiry() {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '', email: '', company: '', interest: '', theme: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const heroRef = useRef(null);
    const heroInView = useInView(heroRef, { once: true });

    const handleSubmit = () => {
        setSubmitted(true);
        setTimeout(() => { setShowForm(false); setSubmitted(false); }, 2500);
    };

    return (
        <>
            {/* ── HERO ── */}
            <div className="absolute top-23 left-8 z-10">
                <BackButton />
            </div>
            <section
                ref={heroRef}
                className="relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden"
            >

                <div className="py-10 bg-black"></div>
                {/* Background split */}
                {/* Background images (3 split) */}
                <div className="absolute inset-0 z-0 grid grid-cols-3">
                    {[
                        '/images/book/book1.jpg',
                        '/images/book/book2.jpg',
                        '/images/book/book3.jpg',
                    ].map((src, i) => (
                        <div key={i} className="relative overflow-hidden">
                            {/* Image */}
                            <img
                                src={src}
                                alt=""
                                className="absolute inset-0 w-full h-[60vh] md:h-full grayscale object-cover"
                            />

                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-black/80" />

                            {/* Subtle gradient */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background:
                                        i === 0
                                            ? 'radial-gradient(ellipse at 30% 60%, rgba(255,255,255,0.04) 0%, transparent 70%)'
                                            : i === 1
                                                ? 'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 70%)'
                                                : 'radial-gradient(ellipse at 70% 40%, rgba(255,255,255,0.03) 0%, transparent 70%)',
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30 z-[1]" />


                {/* Content */}
                <div className="relative z-[2] text-center px-6">

                    {/* Label */}
                    {/* <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-[10px] tracking-[0.32em] uppercase text-white/45 mb-7"
                        style={garamond}
                    >
                        Speaking Inquiries
                    </motion.p> */}

                    {/* Dot */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={heroInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-2 h-2 rounded-full bg-[#1a3a6b] mx-auto mb-5"
                    />

                    {/* Headline line 1 */}
                    <motion.h1
                        initial={{ opacity: 0, y: 28 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="italic font-normal text-white mb-2 leading-[0.92] tracking-[-0.01em]"
                        style={{ ...garamond, fontSize: 'clamp(52px, 9vw, 120px)' }}
                    >
                        Book Mr. Jubril
                    </motion.h1>

                    {/* Headline line 2 */}
                    <motion.h1
                        initial={{ opacity: 0, y: 28 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="not-italic font-normal text-white mb-8 leading-[1.05] tracking-[-0.01em]"
                        style={{ ...garamond, fontSize: 'clamp(52px, 9vw, 120px)' }}
                    >
                        Arogundade.
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={heroInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.9, delay: 0.5 }}
                        className="italic font-light text-white/85 leading-[1.65] max-w-[520px] mx-auto mb-11"
                        style={{ ...garamond, fontSize: 'clamp(15px, 2.2vw, 20px)' }}
                    >
                        Elevate your next event with insights from a leader at the forefront of the African EV revolution.
                    </motion.p>

                    {/* CTA row */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.62 }}
                        className="flex items-center justify-center gap-5"
                    >
                        <button
                            className="text-[11px] tracking-[0.28em] font-bold uppercase text-white bg-transparent border-none cursor-pointer p-0 transition-colors duration-300 hover:text-white"
                            style={garamond}
                            onClick={() => setShowForm(true)}
                        >
                            Inquire Now
                        </button>
                        <button
                            className="w-9 h-9 rounded-full border text-white hover:text-black hover:bg-white border-white/65 flex items-center justify-center cursor-pointer bg-transparent"
                            onClick={() => setShowForm(true)}
                        >
                            <FaArrowDown
                                className="w-3.5 h-3.5"
                            />
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* ── FORM OVERLAY ── */}
            <AnimatePresence>
                {showForm && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
                    >
                        {/* Scrollable wrapper */}
                        <div className="overflow-y-auto max-h-screen w-full [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                            <div
                                className="max-w-[640px] mx-auto relative"
                                style={{ padding: 'clamp(60px, 10vh, 120px) 32px' }}
                            >
                                {/* Close */}
                                <button
                                    className="fixed top-6 right-6 w-11 h-11 rounded-full bg-white/[0.08] border border-white/15 flex items-center justify-center cursor-pointer z-10 transition-colors duration-300 hover:bg-white/[0.14]"
                                    onClick={() => setShowForm(false)}
                                >
                                    <X size={16} color="rgba(255,255,255,0.7)" />
                                </button>

                                {/* Title */}
                                <motion.h2
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                    className="italic font-normal text-white text-center tracking-[-0.01em]"
                                    style={{
                                        ...garamond,
                                        fontSize: 'clamp(44px, 7vw, 80px)',
                                        marginBottom: 'clamp(40px, 7vh, 72px)',
                                    }}
                                >
                                    Event Details.
                                </motion.h2>

                                {!submitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.7, delay: 0.15 }}
                                    >
                                        {/* Row 1 */}
                                        <div className="grid grid-cols-2 gap-x-12">
                                            <div className="mb-9">
                                                <label className="block text-[11px] tracking-[0.3em] uppercase text-white/35 mb-2.5" style={garamond}>
                                                    Your Name
                                                </label>
                                                <input
                                                    className="w-full bg-transparent border-0 border-b border-white/[0.18] text-white/85 text-[15px] italic py-2 outline-none transition-[border-color] duration-300 focus:border-white/50 placeholder:text-white/20"
                                                    style={garamond}
                                                    placeholder="Full name"
                                                    value={formData.name}
                                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                />
                                            </div>
                                            <div className="mb-9">
                                                <label className="block text-[11px] tracking-[0.3em] uppercase text-white/35 mb-2.5" style={garamond}>
                                                    Email Address
                                                </label>
                                                <input
                                                    className="w-full bg-transparent border-0 border-b border-white/[0.18] text-white/85 text-[15px] italic py-2 outline-none transition-[border-color] duration-300 focus:border-white/50 placeholder:text-white/20"
                                                    style={garamond}
                                                    type="email"
                                                    placeholder="you@company.com"
                                                    value={formData.email}
                                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        {/* Row 2 */}
                                        <div className="grid grid-cols-2 gap-x-12">
                                            <div className="mb-9">
                                                <label className="block text-[11px] tracking-[0.3em] uppercase text-white/35 mb-2.5" style={garamond}>
                                                    Company / Organization
                                                </label>
                                                <input
                                                    className="w-full bg-transparent border-0 border-b border-white/[0.18] text-white/85 text-[15px] italic py-2 outline-none transition-[border-color] duration-300 focus:border-white/50 placeholder:text-white/20"
                                                    style={garamond}
                                                    placeholder="Your organization"
                                                    value={formData.company}
                                                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                                                />
                                            </div>
                                            <div className="mb-9">
                                                <label className="block text-[11px] tracking-[0.3em] uppercase text-white/35 mb-2.5" style={garamond}>
                                                    Area of Interest
                                                </label>
                                                <input
                                                    className="w-full bg-transparent border-0 border-b border-white/[0.18] text-white/85 text-[15px] italic py-2 outline-none transition-[border-color] duration-300 focus:border-white/50 placeholder:text-white/20"
                                                    style={garamond}
                                                    placeholder="e.g. EV Mobility, Leadership"
                                                    value={formData.interest}
                                                    onChange={e => setFormData({ ...formData, interest: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        {/* Row 3 — full width */}
                                        <div className="mb-9">
                                            <label className="block text-[11px] tracking-[0.3em] uppercase text-white/35 mb-2.5" style={garamond}>
                                                Event Theme &amp; Expected Audience
                                            </label>
                                            <input
                                                className="w-full bg-transparent border-0 border-b border-white/[0.18] text-white/85 text-[15px] italic py-2 outline-none transition-[border-color] duration-300 focus:border-white/50 placeholder:text-white/20"
                                                style={garamond}
                                                placeholder="Describe the event and expected attendees"
                                                value={formData.theme}
                                                onChange={e => setFormData({ ...formData, theme: e.target.value })}
                                            />
                                        </div>

                                        {/* Submit */}
                                        <div className="mt-3">
                                            <button
                                                className="w-full py-[22px] bg-[rgba(248,245,240,0.96)] border-0 cursor-pointer text-[11px] tracking-[0.32em] uppercase text-[#0a0a0a] transition duration-300 hover:bg-white hover:-translate-y-px active:translate-y-0"
                                                style={garamond}
                                                onClick={handleSubmit}
                                            >
                                                Submit Booking Request
                                            </button>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.97 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                            className="text-center py-12"
                                    >
                                            <p className="italic text-[22px] text-white/70" style={garamond}>
                                            Request received. We&apos;ll be in touch shortly.
                                        </p>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}