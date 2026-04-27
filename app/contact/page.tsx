'use client';

/**
 * ContactPage.tsx — "Connect with Jubril."
 * Contact page / modal
 *
 * Pass `onClose` to wire up the ✕ button.
 * Pass `asPage={true}` to render as a route instead of overlay.
 */

import { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FiX, FiArrowDown, FiInstagram, FiLinkedin } from 'react-icons/fi';
import BackButton from '@/components/BarkButton';

interface ContactPageProps {
    onClose?: () => void;
    asPage?: boolean;
}

interface FormState {
    name: string;
    email: string;
    company: string;
    phone: string;
    message: string;
}

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
          absolute left-0 head tracking-[0.2em] uppercase
          transition-all duration-300 pointer-events-none select-none
          ${active ? 'text-[11px] top-0 text-white/90' : 'text-[10px] top-4 text-white/70'}
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
          font-cormorant italic text-white/80 text-[1.05rem]
          outline-none
          focus:border-white/35
          transition-colors duration-300
          group-hover:border-white/22
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
          absolute left-0 head tracking-[0.2em] uppercase
          transition-all duration-300 pointer-events-none select-none
          ${active ? 'text-[11px] top-0 text-white' : 'text-[10px] top-4 text-white/70'}
        `}
            >
                {label}
            </label>
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                rows={4}
                className="
          w-full bg-transparent border-0 border-b border-white/15
          pt-6 pb-2.5 resize-none
          font-cormorant italic text-white/80 text-[1.05rem]
          outline-none
          focus:border-white/35
          transition-colors duration-300
          group-hover:border-white/22
        "
            />
        </div>
    );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function ContactHero({ onScrollDown }: { onScrollDown: () => void }) {
    return (
        <section className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
            {/* Very subtle radial glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[600px] h-[400px] rounded-full bg-[#1c3a6e]/10 blur-[120px]" />
            </div>

            <div className="relative z-10 text-center px-6">
                {/* Headline */}
                <div className="overflow-hidden mb-1">
                    <motion.h1
                        initial={{ y: 80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.1, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                        className="font-cormorant italic font-normal text-[clamp(56px,10vw,128px)] leading-[0.92] tracking-[-0.015em] text-white"
                    >
                        Connect with
                    </motion.h1>
                </div>
                <div className="overflow-hidden mb-10">
                    <motion.h1
                        initial={{ y: 80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.1, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                        className="font-cormorant not-italic font-light text-[clamp(56px,10vw,128px)] leading-[1.05] tracking-[-0.015em] text-white/22"
                    >
                        Jubril.
                    </motion.h1>
                </div>

                {/* Social icons */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center justify-center gap-4 mb-14"
                >
                    {[
                        { icon: FiInstagram, href: 'https://instagram.com/jubriloflagos/', label: 'Instagram' },
                        { icon: FiLinkedin, href: 'https://linkedin.com/in/in/jubril-arogundade-68389b182', label: 'LinkedIn' },
                    ].map(({ icon: Icon, href, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="
        w-12 h-12
        flex items-center justify-center
        text-white/80
        hover:text-white
        transition-all duration-300
        transform hover:-translate-y-1
    "
                        >
                            <Icon className="w-[23px] h-[23px]" />
                        </a>
                    ))}
                </motion.div>

                {/* Scroll CTA */}
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    onClick={onScrollDown}
                    className="
            inline-flex items-center gap-4
            font-cormorant not-italic font-light
            text-[10px] tracking-[0.28em] uppercase text-white
            hover:text-white/80 transition-colors duration-300 group
          "
                >
                    <span>Send a Message</span>
                    <span
                        className="
              w-9 h-9 rounded-full border border-white/25
              flex items-center justify-center
              hover:text-black group-hover:bg-white
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
function ContactForm({ onClose }: { onClose?: () => void }) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: false, amount: 0.2 });

    const [form, setForm] = useState<FormState>({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState('');

    async function handleSubmit() {
        setSending(true);
        setError('');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    formType: 'contact',
                    name: form.name,
                    email: form.email,
                    company: form.company,
                    phone: form.phone,
                    message: form.message,
                }),
            });
            const data = await res.json();
            if (!data.success) throw new Error(data.error);
            setSubmitted(true);
        } catch {
            setError('Something went wrong. Please try again.');
        } finally {
            setSending(false);
        }
    }

    const set = (k: keyof FormState) => (v: string) =>
        setForm((prev) => ({ ...prev, [k]: v }));

    return (
        <section
            ref={ref}
            className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center px-6 py-24"
        >
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
                                Message Received.
                            </h3>
                            <h3 className="font-cormorant not-italic text-[9px] mb-6 tracking-[0.05em] uppercase text-white/25">
                                Jubril&apos;s has recieved your message and will be in touch soon.
                            </h3>

                            <button onClick={() => {
                                setSubmitted(false);   // reset form view
                                onClose?.();           // close modal if provided
                            }}
                                className='py-2 px-4 bg-white border tracking-[0.22em] border-white text-[#1b3a6b] hover:text-white hover:bg-[#1b3a6b]'>Thanks!</button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >

                                {/* Section heading */}
                                <motion.h2
                                    initial={{ opacity: 0, y: 32 }}
                                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
                                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                    className="font-cormorant italic font-normal text-[clamp(36px,5.5vw,64px)] leading-none tracking-[-0.015em] text-white text-center mb-16"
                                >
                                    Start a conversation.
                                </motion.h2>

                            {/* Row 1 */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 mb-10">
                                <FloatInput label="Your Name" value={form.name} onChange={set('name')} />
                                <FloatInput label="Email Address" value={form.email} onChange={set('email')} type="email" />
                            </div>

                            {/* Row 2 */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 mb-10">
                                <FloatInput label="Company / Organization" value={form.company} onChange={set('company')} />
                                <FloatInput label="Phone Number" value={form.phone} onChange={set('phone')} type="tel" />
                            </div>

                            {/* Row 3 — full width */}
                            <div className="mb-14">
                                <FloatTextarea label="Your Message" value={form.message} onChange={set('message')} />
                            </div>

                            {/* Submit — cream bg, turns navy on hover */}
                                <button
                                    onClick={handleSubmit}
                                    disabled={sending}
                                    className="
    w-full py-5
    bg-[#f5f0e8] text-[#060e1c]
    font-cormorant not-italic font-medium
    text-[11px] tracking-[0.3em] uppercase
    transition-all duration-[400ms]
    hover:bg-[#1c3a6e] hover:text-white
    active:scale-[0.99]
    disabled:opacity-50 disabled:cursor-not-allowed
  "
                                >
                                    {sending ? 'Sending…' : 'Send Message'}
                                </button>

                                {error && (
                                    <p className="text-red-400 text-[11px] tracking-[0.1em] text-center mt-4">
                                        {error}
                                    </p>
                                )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function ContactPage({ onClose }: ContactPageProps) {
    const formRef = useRef<HTMLDivElement>(null);

    function scrollToForm() {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
    }


    return (
        <>
            <div>
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
                <ContactHero onScrollDown={scrollToForm} />

                {/* Form */}
                <div ref={formRef}>
                    <ContactForm onClose={onClose} />
                </div>
            </div>
        </>
    );
}