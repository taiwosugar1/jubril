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
        title: 'Acceptance of Terms',
        body: `By accessing and using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please discontinue use of the site immediately.

These terms apply to all visitors, users, and any others who access or use the website. We reserve the right to modify these terms at any time, and your continued use of the site following any such modifications constitutes acceptance of the updated terms.`,
    },
    {
        id: '02',
        title: 'Intellectual Property',
        body: `All content on this website including but not limited to text, photographs, graphics, videos, logos, and the overall design, is the exclusive intellectual property of Jubril Arogundade unless otherwise stated. This content is protected under applicable Nigerian and international copyright, trademark, and intellectual property laws.

You may not reproduce, distribute, republish, display, transmit, or exploit any content from this website — in whole or in part — without prior written permission. Brief quotations for editorial, commentary, or journalistic purposes are permitted provided appropriate attribution is given.`,
    },
    {
        id: '03',
        title: 'Permitted Use',
        body: `This website is provided for personal, non-commercial informational purposes. You are permitted to browse the site, share links to publicly accessible pages, and reference the content for legitimate personal or professional research with proper attribution.

You may not use this website or its content for any unlawful purpose, to impersonate Jubril Arogundade or any affiliated entity, to distribute unsolicited communications, or to engage in any activity that could damage, disable, or impair the functionality of the site or servers.`,
    },
    {
        id: '04',
        title: 'Accuracy of Information',
        body: `While every effort is made to ensure that the information presented on this website is accurate and up to date, no warranties express or implied are made with respect to the completeness, accuracy, reliability, or suitability of the content for any particular purpose.

Professional decisions, whether strategic, financial, legal, or otherwise should not be made based solely on information provided on this website without independent verification and appropriate professional counsel.`,
    },
    {
        id: '05',
        title: 'External Links',
        body: `This website may contain links to third-party websites for informational convenience. The inclusion of any link does not imply endorsement, sponsorship, or affiliation with the linked site. We have no control over the content, availability, or practices of external websites and accept no responsibility for any loss or damage arising from your use of them.

We encourage you to review the terms of use and privacy policies of any third-party website you visit.`,
    },
    {
        id: '06',
        title: 'Limitation of Liability',
        body: `To the fullest extent permitted by applicable law, Jubril Arogundade and any affiliated parties shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to or use of — or inability to access or use — this website or any content herein.

This includes, without limitation, damages for loss of profits, goodwill, data, or other intangible losses, even if we have been advised of the possibility of such damages.`,
    },
    {
        id: '07',
        title: 'Speaking & Consulting Enquiries',
        body: `Information presented on the speaking and consulting pages of this website is for introductory purposes only and does not constitute a binding offer or contractual agreement. All engagements — whether speaking, advisory, strategic consulting, or partnership are subject to separate written agreements mutually executed by both parties.

Submission of an enquiry form or email does not guarantee availability, create an obligation to respond, or establish a professional relationship until a formal agreement is in place.`,
    },
    {
        id: '08',
        title: 'Governing Law',
        body: `These Terms of Use are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any dispute arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Lagos State, Nigeria, unless otherwise agreed in writing.

International visitors acknowledge that they access the site voluntarily and consent to the applicability of Nigerian law in respect of their use of the website.`,
    },
    {
        id: '09',
        title: 'Contact & Notices',
        body: `If you have any questions, concerns, or legal notices relating to these Terms of Use, please direct all correspondence to the contact details provided below. We will endeavour to respond to all legitimate enquiries in a timely and professional manner.`,
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
                <h3 className="font-cormorant not-italic font-light text-[11px] tracking-[0.32em] uppercase text-[#1b3a6b] block">
                    {section.id}
                </h3>
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

export default function TermsOfUse() {
    const heroRef = useRef<HTMLDivElement>(null);
    const heroInView = useInView(heroRef, { once: true });

    return (
        <main className="relative w-full min-h-screen bg-[#000C1A] text-[#F5F2ED] overflow-x-hidden">

            {/* ── Back nav ── */}
            <div className="absolute top-23 left-8">
                <BackButton />
            </div>

            {/* ── Hero ── */}
            <div
                ref={heroRef}
                className="relative px-6 sm:px-10 lg:px-20 pt-36 pb-20 lg:pt-44 lg:pb-28 border-b border-white/8"
            >
                {/* Watermark */}
                <div
                    aria-hidden
                    className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center"
                >
                    <h3 className="font-cormorant font-black not-italic text-[22vw] leading-none tracking-[0.04em] text-white/[0.025] whitespace-nowrap">
                        TERMS
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
                        className="font-cormorant italic font-normal text-[clamp(52px,9vw,140px)] leading-[0.9] tracking-[-0.02em] text-white m-0"
                    >
                        Terms
                    </motion.h1>

                    <motion.h1
                        initial={{ opacity: 0, y: 32 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        className="font-cormorant not-italic font-light text-[clamp(52px,9vw,140px)] leading-[1.06] tracking-[-0.02em] text-white/18 m-0 mb-10"
                    >
                        of Use.
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
                        <h3 className="font-cormorant not-italic font-light text-[11px] tracking-[0.3em] uppercase text-white/28 mb-4">
                            Questions about these terms?
                        </h3>
                        <h3 className="font-cormorant italic font-normal text-[clamp(28px,4vw,52px)] leading-tight tracking-[-0.01em] text-white/85 m-0">
                            Get in touch.
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
                <h4 className="font-cormorant not-italic font-light text-[10px] tracking-[0.28em] uppercase text-white/18">
                    © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
                </h4>
                <div className="flex items-center gap-6">
                    <Link
                        href="/privacy"
                        className="font-cormorant not-italic font-light text-[10px] tracking-[0.28em] uppercase text-white/18 hover:text-white/40 transition-colors duration-300"
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        href="/terms"
                        className="font-cormorant not-italic font-light text-[10px] tracking-[0.28em] uppercase text-white/40"
                    >
                        Terms of Use
                    </Link>
                </div>
            </div>
        </main>
    );
}
