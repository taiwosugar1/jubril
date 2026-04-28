'use client';

import { useEffect, useState } from 'react';

export default function MarqueeRow({
    word,
    dir,
    duration,
}: {
    word: string;
    dir: 'left' | 'right';
    duration: number;
}) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    // 🔥 Speed adjustment
    const adjustedDuration = isMobile ? duration * 15 : duration;
    // (lower = faster)

    const repeated = Array(8).fill(word).join('          ');

    return (
        <div className="overflow-hidden w-full leading-none">
            <style>{`
                @keyframes marquee-left {
                    from { transform: translateX(0); }
                    to   { transform: translateX(-50%); }
                }
                @keyframes marquee-right {
                    from { transform: translateX(-50%); }
                    to   { transform: translateX(0); }
                }
            `}</style>

            <div
                className="flex whitespace-nowrap will-change-transform"
                style={{
                    animation: `marquee-${dir} ${adjustedDuration}s linear infinite`,
                }}
            >
                <span className="select-none shrink-0
                    md:text-[clamp(52px,8.5vw,140px)]
                    text-[clamp(52px,20vw,140px)]
                    head-scroll
                    font-black tracking-[0.02em]
                    leading-[1.5] md:leading-[1.05]
                    text-white/5 pr-20"
                >
                    {repeated}
                </span>

                <span className="select-none shrink-0
                    head-scroll
                    md:text-[clamp(52px,8.5vw,140px)]
                    text-[clamp(52px,20vw,140px)]
                    font-black tracking-[0.02em]
                    leading-[1.5] md:leading-[1.05]
                    text-white/5 pr-20"
                >
                    {repeated}
                </span>
            </div>
        </div>
    );
}