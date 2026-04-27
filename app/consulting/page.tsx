'use client';

/**
 * ConsultingPage.tsx — "Architecting the Future of Mobility."
 * Strategic Automotive Consulting page / modal
 *
 * Usage: render as a full-screen overlay triggered from Footer nav,
 * or as a standalone route at /consulting.
 *
 * Pass `onClose` prop to wire up the ✕ button.
 */

import { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FiX, FiArrowDown } from 'react-icons/fi';
import BackButton from '@/components/BarkButton';

// ── Types ─────────────────────────────────────────────────────────────────────
interface ConsultingPageProps {
    /** Called when the ✕ close button is clicked */
    onClose?: () => void;
    /** If true the component renders as a page, not a modal overlay */
    asPage?: boolean;
}

// ── Form state ────────────────────────────────────────────────────────────────
interface FormState {
    name: string;
    email: string;
    company: string;
    area: string;
    scope: string;
}

const AREAS = [
    'Market Entry Strategy',
    'Investment & Funding',
    'Fleet Electrification',
    'Brand & Distribution',
    'Regulatory Navigation',
    'Other',
];

// ── Floating label input ──────────────────────────────────────────────────────
function FloatInput({
    label,
    value,
    onChange,
    type = 'text',
}: {
    label: string;
    value: string;
    onChange: (v: string) => void;
    type?: string;
}) {
    const [focused, setFocused] = useState(false);
    const active = focused || value.length > 0;

    return (
        <div className="relative group">
            <label
                className={`
          absolute left-0 font-cormorant head tracking-[0.2em] uppercase
          transition-all duration-300 pointer-events-none select-none
          ${active
                    ? 'text-[11px] top-0 text-white/70'
                    : 'text-[12px] top-4 text-white/50'
                    }
        `}
            >
                {label}
            </label>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className="
          w-full bg-transparent border-0 border-b border-white/15
          pt-6 pb-2.5
          font-cormorant  text-white/80 text-[1.05rem]
          outline-none
          focus:border-white
          transition-colors duration-300
          focus:border-b-2
        "
            />
        </div>
    );
}

// ── Floating label textarea ───────────────────────────────────────────────────
function FloatTextarea({
    label,
    value,
    onChange,
}: {
    label: string;
    value: string;
    onChange: (v: string) => void;
}) {
    const [focused, setFocused] = useState(false);
    const active = focused || value.length > 0;

    return (
        <div className="relative group">
            <label
                className={`
          absolute left-0 font-cormorant tracking-[0.2em] uppercase
          transition-all duration-300 pointer-events-none select-none
          ${active
                    ? 'text-[9px] top-0 text-white/70'
                    : 'text-[10px] top-4 text-white/50'
                    }
        `}
            >
                {label}
            </label>
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                rows={3}
                className="
          w-full bg-transparent border-0 border-b border-white/15
          pt-6 pb-2.5 resize-none
          font-cormorant italic text-white/80 text-[1.05rem]
          outline-none
          focus:border-white
          transition-colors duration-300
          focus:border-b-2
        "
            />
        </div>
    );
}

// ── Select ────────────────────────────────────────────────────────────────────
function FloatSelect({
    label,
    value,
    onChange,
    options,
}: {
    label: string;
    value: string;
    onChange: (v: string) => void;
    options: string[];
}) {
    const [focused, setFocused] = useState(false);
    const active = focused || value.length > 0;

    return (
        <div className="relative group">
            <label
                className={`
          absolute left-0 font-cormorant tracking-[0.2em] uppercase z-10
          transition-all duration-300 pointer-events-none select-none
          ${active
                        ? 'text-[9px] top-0 text-white/35'
                        : 'text-[10px] top-4 text-white/30'
                    }
        `}
            >
                {label}
            </label>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className="
          w-full bg-transparent border-0 border-b border-white/15
          pt-6 pb-2.5
          font-cormorant italic text-white/80 text-[1.05rem]
          outline-none appearance-none cursor-pointer
          focus:border-white/35
          transition-colors duration-300
        "
            >
                <option value="" disabled className="bg-[#060e1c]" />
                {options.map((o) => (
                    <option key={o} value={o} className="bg-[#060e1c]">
                        {o}
                    </option>
                ))}
            </select>
        </div>
    );
}

// ── Hero section ──────────────────────────────────────────────────────────────
function ConsultingHero({ onScrollDown }: { onScrollDown: () => void }) {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
            {/* Background car image */}
            <div
                className="absolute inset-0 grayscale bg-cover bg-center opacity-35"
                style={{ backgroundImage: "url('/images/consult.jpg')" }}
            />
            {/* Gradient vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl">
                {/* Eyebrow */}
                <motion.h4
                    initial={{ opacity: 0, letterSpacing: '0.1em' }}
                    animate={{ opacity: 1, letterSpacing: '0.28em' }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="font-cormorant not-italic font-light text-[10px] tracking-[0.28em] uppercase text-white/40 mb-8"
                >
                    Strategic Automotive Consulting
                </motion.h4>

                {/* Headline */}
                <div className="overflow-hidden mb-2">
                    <motion.h1
                        initial={{ y: 80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="font-cormorant font-normal text-[clamp(36px,4vw,80px)] leading-[0.92] tracking-[-0.015em] text-white"
                    >
                        Architecting the
                    </motion.h1>
                </div>
                <div className="overflow-hidden mb-8">
                    <motion.h1
                        initial={{ y: 80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.1, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        className="font-cormorant font-light text-[clamp(36px,4vw,80px)] leading-[1.05] tracking-[-0.015em] text-white/22"
                    >
                        Future of Mobility.
                    </motion.h1>
                </div>

                {/* Sub copy */}
                <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.38 }}
                    className="font-cormorant font-light text-lg italic leading-[1.5] text-white/70 max-w-xl mx-auto mb-14"
                >
                    If you&apos;re starting an automotive venture, you need more than a plan;
                    you need a roadmap. From improving Nigeria&apos;s automotive sector to
                    attracting global investments, Jubril Arogundade provides the strategic
                    guidance required to scale.
                </motion.h3>

                {/* Scroll CTA */}
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.55 }}
                    onClick={onScrollDown}
                    className="
            inline-flex items-center gap-4
            font-cormorant not-italic font-light
            text-[10px] tracking-[0.28em] uppercase text-white/70
            hover:text-white/80 transition-colors duration-300 group
          "
                >
                    <span>Speak to Jubril</span>
                    <span
                        className="
              w-9 h-9 rounded-full border border-white/25
              flex items-center justify-center
              group-hover:text-black group-hover:bg-white
              transition-all duration-300
            "
                    >
                        <FiArrowDown className="w-3.5 h-3.5" />
                    </span>
                </motion.button>
            </div>
        </section>
    );
}

// ── Form section ──────────────────────────────────────────────────────────────
function ConsultingForm({ onClose }: { onClose?: () => void }) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: false, amount: 0.2 });

    const [form, setForm] = useState<FormState>({
        name: '',
        email: '',
        company: '',
        area: '',
        scope: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const set = (k: keyof FormState) => (v: string) =>
        setForm((prev) => ({ ...prev, [k]: v }));

    function handleSubmit() {
        // wire to your API / email service here
        console.log('Consulting inquiry:', form);
        setSubmitted(true);
    }


    return (
        <section
            ref={ref}
            className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center px-6 py-24"
        >
            {/* Subtle grain overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/images/grain.png')] bg-repeat" />

            <div className="relative z-10 w-full max-w-2xl">


                <AnimatePresence mode="wait">
                    {submitted ? (
                        <motion.div
                            key="thanks"
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center py-20"
                        >
                            <h3 className="font-cormorant text-3xl italic text-white mb-3">
                                Roadmap Initialized.
                            </h3>
                            <h3 className="font-cormorant not-italic text-[9px] mb-6 tracking-[0.05em] uppercase text-white/25">
                                Jubril&apos;s has recieved your message and will be in touch soon.
                            </h3>

                            <button onClick={() => {
                                setSubmitted(false);
                                onClose?.();       
                            }}
                                className='py-2 px-4 bg-white border tracking-[0.22em] border-white text-[#1b3a6b] hover:text-white hover:bg-[#1b3a6b]'>Thanks!</button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-0"
                        >

                                {/* Section heading */}
                                <motion.h2
                                    initial={{ opacity: 0, y: 32 }}
                                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
                                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                    className="font-cormorant italic font-normal text-[clamp(30px,4vw,42px)] leading-none tracking-[-0.015em] text-white text-center mb-16"
                                >
                                    Tell us about your project.
                                </motion.h2>

                            {/* Row 1 */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-0 mb-10">
                                <FloatInput
                                    label="Your Name"
                                    value={form.name}
                                    onChange={set('name')}
                                />
                                <FloatInput
                                    label="Email Address"
                                    value={form.email}
                                    onChange={set('email')}
                                    type="email"
                                />
                            </div>

                            {/* Row 2 */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-0 mb-10">
                                <FloatInput
                                    label="Company / Organization"
                                    value={form.company}
                                    onChange={set('company')}
                                />
                                <FloatSelect
                                    label="Area of Interest"
                                    value={form.area}
                                    onChange={set('area')}
                                    options={AREAS}
                                />
                            </div>

                            {/* Row 3 — full width */}
                            <div className="mb-14">
                                <FloatTextarea
                                    label="Project Scope & Objectives"
                                    value={form.scope}
                                    onChange={set('scope')}
                                />
                            </div>

                            {/* Submit */}
                            <button
                                onClick={handleSubmit}
                                className="
                  w-full py-5
                  bg-white text-[#060e1c]
                  font-cormorant not-italic font-medium
                  text-[11px] tracking-[0.3em] uppercase
                  transition-all duration-400
                  hover:bg-[#1c3a6e] hover:text-white
                  active:scale-[0.99]
                "
                            >
                                Initiate Consultation
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function ConsultingPage({ onClose, }: ConsultingPageProps) {
    const formRef = useRef<HTMLDivElement>(null);

    function scrollToForm() {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
    }


    return (
        <>
            <div className="">
                <div className="py-10 bg-black"></div>

                <div className=" absolute z-10 top-23 left-8">
                    <BackButton />
                </div>

                {/* ✕ Close */}
                {onClose && (
                    <button
                        onClick={onClose}
                        aria-label="Close"
                        className="
              fixed top-5 right-5 z-[60]
              w-11 h-11 rounded-full
              bg-white/10 backdrop-blur-sm
              flex items-center justify-center
              text-white/70 hover:text-white hover:bg-white/20
              transition-all duration-300
            "
                    >
                        <FiX className="w-4 h-4" />
                    </button>
                )}

                {/* Hero */}
                <ConsultingHero onScrollDown={scrollToForm} />

                {/* Form */}
                <div ref={formRef}>
                    <ConsultingForm onClose={onClose} />
                </div>
            </div>
        </>
    );
}