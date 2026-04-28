'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import BackButton from '@/components/BarkButton';

const LAST_UPDATED = 'April 2026';
const CONTACT_EMAIL = 'jubril@jubriloflagos.com';
const SITE_NAME = 'Jubril Arogundade';
const SITE_URL = 'jubriloflagos.com';

const sections = [
    {
        id: '01',
        title: 'Information We Collect',
        body: `When you visit this website, we may collect certain information automatically, including your browser type, operating system, referring URLs, and general location data derived from your IP address. This information helps us understand how visitors engage with the site and improve the overall experience.

If you choose to reach out via the contact form or email, we collect the information you voluntarily provide — such as your name, email address, and message content. We do not collect this information without your direct action.`,
    },
    {
        id: '02',
        title: 'How We Use Your Information',
        body: `Information collected is used solely to respond to your enquiries, improve the website experience, and understand general visitor behaviour through aggregated analytics. We do not use your personal information for unsolicited marketing, and we do not sell, rent, or trade your data to third parties under any circumstances.

Analytics data is processed in aggregate and is never linked back to identifiable individuals without explicit consent.`,
    },
    {
        id: '03',
        title: 'Cookies & Tracking',
        body: `This website may use cookies, small text files placed on your device, to improve browsing functionality and analyse visitor traffic patterns. We use only essential and analytics cookies. You may disable cookies via your browser settings at any time; however, doing so may affect certain features of the site.

We do not use advertising or behavioural tracking cookies.`,
    },
    {
        id: '04',
        title: 'Third-Party Services',
        body: `We may utilise third-party services such as Vercel (hosting) and Google Analytics (traffic analysis). These services have their own privacy policies, and we encourage you to review them independently. We take care to ensure that any third-party service engaged meets acceptable data protection standards.

Embedded links to external platforms, including LinkedIn, Instagram, and other social networks are governed by the privacy policies of those respective platforms.`,
    },
    {
        id: '05',
        title: 'Data Retention & Security',
        body: `We retain personal data only for as long as necessary to fulfil the purpose for which it was collected, or as required by applicable law. Contact form submissions are retained solely to facilitate communication and are not stored in perpetuity.

While we implement reasonable measures to protect the information collected, no data transmission over the internet is entirely secure. We encourage caution when sharing sensitive information via any online medium.`,
    },
    {
        id: '06',
        title: 'Your Rights',
        body: `You have the right to request access to, correction of, or deletion of any personal information we hold about you. To exercise any of these rights, please contact us directly at the email address provided below. We will respond to all valid requests within a reasonable timeframe.

Residents of the European Economic Area (EEA) and the United Kingdom hold additional rights under GDPR and UK GDPR respectively, including the right to data portability and the right to object to certain processing activities.`,
    },
    {
        id: '07',
        title: 'Children\'s Privacy',
        body: `This website is not directed at individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that a child has submitted personal information without appropriate parental consent, we will take steps to remove such information promptly.`,
    },
    {
        id: '08',
        title: 'Changes to This Policy',
        body: `We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. The date of the most recent revision is indicated at the top of this page. Continued use of the website following any update constitutes acceptance of the revised policy.`,
    },
];

function SectionBlock({
    section,
    index,
}: {
    section: (typeof sections)[0];
    index: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: '-8%' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-[140px_1fr] gap-4 lg:gap-16 border-t border-white/10 py-10 lg:py-12"
        >
            <div className="flex items-start gap-3 lg:flex-col lg:gap-2 lg:pt-1">
                <span className="font-cormorant not-italic font-light text-[11px] tracking-[0.32em] uppercase text-[#1b3a6b] block">
                    {section.id}
                </span>
            </div>
            <div>
                <h3 className="font-cormorant italic font-normal text-[clamp(23px,2.8vw,32px)] leading-tight tracking-[-0.01em] text-white/90 mb-5">
                    {section.title}
                </h3>
                {section.body.split('\n\n').map((para, i) => (
                    <h4
                        key={i}
                        className="font-cormorant not-italic font-light text-lg leading-[1.82] text-white/48 mb-4 last:mb-0"
                    >
                        {para}
                    </h4>
                ))}
            </div>
        </motion.div>
    );
}

export default function PrivacyPolicy() {
    const heroRef = useRef<HTMLDivElement>(null);
    const heroInView = useInView(heroRef, { once: true });

    return (
        <main className="relative w-full min-h-screen bg-[#000000] text-[#F5F2ED] overflow-x-hidden">

            {/* ── Back nav ── */}
            <div className="absolute z-10 top-23 left-6 md:left-8">
                <BackButton />
            </div>

            {/* ── Hero ── */}
            <div
                ref={heroRef}
                className="relative flex items-center px-6 sm:px-10 lg:px-20 pt-36 pb-20 lg:pt-44 lg:pb-28 border-b border-white/8"
            >
                {/* Watermark */}
                <div
                    aria-hidden
                    className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center"
                >
                    <h3 className="font-cormorant font-black not-italic text-[22vw] leading-none tracking-[0.04em] text-white/[0.025] whitespace-nowrap">
                        PRIVACY
                    </h3>
                </div>

                <div className="relative z-10 max-w-[1400px] mx-auto text-center">
                    <motion.h3
                        initial={{ opacity: 0, y: 16 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="font-cormorant not-italic font-normal text-[11px] tracking-[0.36em] uppercase text-white/30 mb-6"
                    >
                        Legal
                    </motion.h3>

                    <motion.h1
                        initial={{ opacity: 0, y: 32 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="font-cormorant italic font-normal text-[clamp(62px,9vw,140px)] leading-[0.9] tracking-[-0.02em] text-white m-0"
                    >
                        Privacy
                    </motion.h1>

                    <motion.h1
                        initial={{ opacity: 0, y: 32 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        className="font-cormorant not-italic font-light text-[clamp(62px,9vw,140px)] leading-[1.06] tracking-[-0.02em] text-white/18 m-0 mb-10"
                    >
                        Policy.
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={heroInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.38 }}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3 sm:gap-8"
                    >
                        <h4 className="font-cormorant not-italic font-light text-[11px] tracking-[0.28em] uppercase text-white/25">
                            Last updated — {LAST_UPDATED}
                        </h4>

                        <span className="hidden sm:block w-px h-4 bg-white/15" />

                        <h4 className="font-cormorant not-italic font-light text-[11px] tracking-[0.28em] uppercase text-white/25">
                            {SITE_URL}
                        </h4>
                    </motion.div>
                </div>
            </div>

            {/* ── Sections ── */}
            <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 pb-8">
                {sections.map((section, i) => (
                    <SectionBlock key={section.id} section={section} index={i} />
                ))}
            </div>

            {/* ── Contact CTA ── */}
            <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 py-16 border-t border-white/10">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
                    <div>
                        <h4 className="font-cormorant not-italic font-light text-[11px] tracking-[0.3em] uppercase text-white/28 mb-4">
                            Questions about this policy?
                        </h4>
                        <h3 className="font-cormorant italic font-normal text-[clamp(28px,4vw,52px)] leading-tight tracking-[-0.01em] text-white/85 m-0">
                            Reach out directly.
                        </h3>
                    </div>
                    <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="group flex items-center gap-3 font-cormorant not-italic font-light text-[11px] tracking-[0.3em] uppercase text-white/40 hover:text-white/80 transition-colors duration-300 self-start sm:self-auto pb-1 border-b border-white/15 hover:border-white/40"
                    >
                        {CONTACT_EMAIL}
                        <FiArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </a>
                </div>
            </div>

            {/* ── Bottom bar ── */}
            <div className="border-t border-white/8 px-6 sm:px-10 lg:px-20 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <h3 className="font-cormorant not-italic font-light text-[10px] tracking-[0.28em] uppercase text-white/18">
                    © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
                </h3>
                <div className="flex items-center gap-6">
                    <Link
                        href="/privacy"
                        className="font-cormorant not-italic font-light text-[10px] tracking-[0.28em] uppercase text-white/40"
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        href="/terms"
                        className="font-cormorant not-italic font-light text-[10px] tracking-[0.28em] uppercase text-white/18 hover:text-white/40 transition-colors duration-300"
                    >
                        Terms of Use
                    </Link>
                </div>
            </div>
        </main>
    );
}
