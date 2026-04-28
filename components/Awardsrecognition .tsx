'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiStar } from 'react-icons/fi';
import { GiTrophy, GiMedal, GiLaurelCrown } from 'react-icons/gi';

// ── Award data ────────────────────────────────────────────────────────────────
const AWARDS = [
    {
        icon: 'trophy',
        title: '40 Under 40 Achiever 2025',
        org: 'Transport & Automobile',
    },
    {
        icon: 'medal',
        title: 'Most Proactive Marketing Icon of the Year',
        org: 'Champions Award 2024',
    },
    {
        icon: 'star',
        title: 'Most Outstanding Marketing Communications Professional',
        org: 'Brandcom 2024',
    },
    {
        icon: 'laurel',
        title: '100 Most Influential Young Africans',
        org: 'Pan African Youth Leadership Foundation 2024',
    },
    {
        icon: 'medal',
        title: 'Member of the Forbes BLK 2024',
        org: 'Professional Network',
    },
    {
        icon: 'medal',
        title: '2023 Most Proactive Marketing Icon of the Year',
        org: 'Champions Award 2024',
    },
    {
        icon: 'star',
        title: 'Excellent General Manager',
        org: 'Corporate Excellence',
    },
    {
        icon: 'trophy',
        title: 'Choice International Achievement Award 2023',
        org: 'Global Recognition',
    },
    {
        icon: 'medal',
        title: 'Auto GM of the Year',
        org: 'NAJA Awards 2023',
    },
    {
        icon: 'star',
        title: 'Selfless Service',
        org: 'Excellence Service Awards 2023',
    },
    {
        icon: 'trophy',
        title: 'Most Outstanding Corporate Communications Professional',
        org: 'Brandcom Awards 2022',
    },
    {
        icon: 'trophy',
        title: 'Pioneer Staff Award',
        org: 'Organizational Impact',
    },
    {
        icon: 'trophy',
        title: 'The Most Outstanding Young Executiv',
        org: 'Lagos Youth Award 2022',
    },
    {
        icon: 'star',
        title: 'Outstanding Sales Manager',
        org: 'Performance Excellence',
    },
];

// ── Icon resolver ─────────────────────────────────────────────────────────────
function AwardIcon({ type }: { type: string }) {
    const className = "w-[22px] h-[22px] text-white/20";

    if (type === 'trophy') return <GiTrophy className={className} />;
    if (type === 'laurel') return <GiLaurelCrown className={className} />;
    if (type === 'medal') return <GiMedal className={className} />;
    return <FiStar className={className} />;
}

// ── Card ──────────────────────────────────────────────────────────────────────
function AwardCard({
    award,
    index,
    inView,
    baseDelay = 0,
}: {
        award: (typeof AWARDS)[number];
        index: number;
        inView: boolean;
        baseDelay?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 48 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }}
            transition={{
                duration: 0.85,
                delay: baseDelay + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="bg-[#001F3F] hover:bg-[#000C1A] flex flex-col justify-between cursor-default
                 px-[clamp(20px,2.5vw,30px)] py-[clamp(24px,3.5vh,36px)]
                 min-h-[clamp(160px,20vh,220px)]"
        >
            <div className="mb-[clamp(20px,3vh,32px)]">
                <AwardIcon type={award.icon} />
            </div>

            <div>
                <p className="font-serif italic font-normal
                      text-[clamp(18px,1.7vw,21px)]
                      leading-[1.4]
                      text-white/90
                      mb-[clamp(16px,1.5vh,25px)]">
                    {award.title}
                </p>

                <p className="font-serif uppercase tracking-[0.22em]
                      text-[clamp(12px,0.78vw,10px)]
                      text-white/30 leading-[1.5]">
                    {award.org}
                </p>
            </div>
        </motion.div>
    );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function AwardsRecognition() {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: false, margin: '-12%' });
    const [expanded, setExpanded] = useState(false);

    const hidden = AWARDS.slice(6);
    const hasMore = AWARDS.length > 8;

    return (
        <section
            ref={ref}
            className="w-full bg-[#eae7e1]
                 px-[clamp(24px,6vw,80px)]
                 py-[clamp(40px,9vh,100px)]"
        >
            {/* Header */}
            <div className="text-center max-w-[820px] mx-auto mb-[clamp(48px,7vh,80px)]">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.9 }}
                    className="font-serif uppercase tracking-[0.36em]
                     text-[clamp(11px,0.9vw,12px)]
                     text-[#1c2e4a]/40
                     mb-[clamp(16px,2.5vh,24px)]"
                >
                    The Accolades
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.08 }}
                >
                    <h2 className="font-serif italic font-normal
                         text-[clamp(52px,9.5vw,132px)]
                         leading-[0.95]
                         text-[#000C1A]">
                        Awards &amp;
                    </h2>

                    <h2 className="font-serif not-italic font-medium
                         text-[clamp(52px,9.5vw,132px)]
                         leading-[1.05]
                         text-[#001F3F]">
                        Recognition.
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.25 }}
                    className="font-serif italic font-light
                     text-[clamp(15px,1.4vw,18px)]
                     leading-[1.72]
                     text-[#1c2e4a]/50
                     mt-[clamp(20px,3vh,32px)]"
                >
                    A testament to a decade of relentless pursuit of excellence,
                    strategic innovation, and transformative leadership in the African
                    automotive landscape.
                </motion.p>
            </div>

            {/* Grid */}
            <div className="max-w-[1280px] mx-auto">
                <div className="grid gap-[clamp(8px,1vw,14px)]
                        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {AWARDS.slice(0, 6).map((award, i) => (
                        <AwardCard
                            key={award.title}
                            award={award}
                            index={i}
                            inView={inView}
                            baseDelay={0.3}
                        />
                    ))}

                    <AnimatePresence>
                        {expanded &&
                            hidden.map((award, i) => (
                                <AwardCard
                                    key={award.title}
                                    award={award}
                                    index={i}
                                    inView={true}
                                />
                            ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* CTA */}
            {hasMore && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.9, delay: 0.8 }}
                    onClick={() => setExpanded(e => !e)}
                    className="flex items-center justify-center
                     gap-[clamp(12px,1.5vw,18px)]
                     mt-[clamp(36px,5vh,56px)]
                     cursor-pointer"
                >
                    <motion.div
                        whileHover={{ scale: 1.08, backgroundColor: '#162d52' }}
                        className="w-[52px] h-[52px] rounded-full
                       bg-[#1c2e4a] flex items-center justify-center"
                    >
                        <motion.div
                            animate={{ rotate: expanded ? 180 : 0 }}
                            transition={{ duration: 0.35 }}
                        >
                            <FiChevronDown className="text-white w-[20px] h-[20px]" />
                        </motion.div>
                    </motion.div>

                    <span className="font-serif uppercase tracking-[0.3em]
                           text-[clamp(11px,0.9vw,11px)]
                           text-[#1c2e4a]/60">
                        {expanded ? 'Show Less' : 'See Full Award List'}
                    </span>
                </motion.div>
            )}
        </section>
    );
}