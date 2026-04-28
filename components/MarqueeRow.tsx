'use client';

export default function MarqueeRow({
    word,
    dir,
    duration,
}: {
    word: string;
    dir: 'left' | 'right';
    duration: number;
}) {
    const repeated = Array(14).fill(word);

    const animationName =
        dir === 'left' ? 'marquee-left' : 'marquee-right';

    return (
        <div className="overflow-hidden w-full leading-none">
            <style>{`
                @keyframes marquee-left {
                    from { transform: translate3d(0,0,0); }
                    to { transform: translate3d(-50%,0,0); }
                }

                @keyframes marquee-right {
                    from { transform: translate3d(-50%,0,0); }
                    to { transform: translate3d(0,0,0); }
                }

                .marquee {
    animation: var(--anim) var(--speed) linear infinite;
    will-change: transform;
}

/* 📱 mobile (slowest) */
@media (max-width: 768px) {
    .marquee {
        animation-duration: calc(var(--speed) * 4.5);
    }
}

/* 💻 small laptops */
@media (min-width: 769px) and (max-width: 1024px) {
    .marquee {
        animation-duration: calc(var(--speed) * 5.5);
    }
}

/* 🖥️ large screens (lg) */
@media (min-width: 1025px) and (max-width: 1440px) {
    .marquee {
        animation-duration: calc(var(--speed) * 4.3);
    }
}

/* 🖥️ xl screens */
@media (min-width: 1441px) {
    .marquee {
        animation-duration: calc(var(--speed) * 4.0);
    }
}
            `}</style>

            <div
                className="flex w-max whitespace-nowrap marquee"
                style={{
                    ['--anim' as any]: animationName,
                    ['--speed' as any]: `${duration}s`,
                }}
            >
                {/* first set */}
                <div className="flex shrink-0">
                    {repeated.map((w, i) => (
                        <span
                            key={i}
                            className="select-none pr-20
                                md:text-[clamp(52px,8.5vw,140px)]
                                text-[clamp(52px,20vw,140px)]
                                font-black tracking-[0.02em]
                                leading-[1.25]
                                md:leading-[1.10]
                                head-scroll
                                text-white/5"
                        >
                            {w}
                        </span>
                    ))}
                </div>

                {/* duplicate set */}
                <div className="flex shrink-0">
                    {repeated.map((w, i) => (
                        <span
                            key={`dup-${i}`}
                            className="select-none pr-24
                                md:text-[clamp(52px,8.5vw,140px)]
                                text-[clamp(52px,20vw,140px)]
                                font-black tracking-[0.02em]
                                head-scroll
                                leading-[1.05]
                                text-white/5"
                        >
                            {w}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}