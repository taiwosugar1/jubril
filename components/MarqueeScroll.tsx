"use client"

import React from 'react'

export default function MarqueeScroll() {
    const items = [
        { text: 'Championing Hybrid & Electric Innovation' },
        { text: 'Automotive Leader' },
        { text: 'Driving the Future of Mobility in Nigeria' },
        { text: 'Championing Hybrid & Electric Innovation' },
        { text: 'Automotive Leader' },
        { text: 'Driving the Future of Mobility in Nigeria' },
    ]

    return (
        <div>
            <div className="head-scroll relative bg-white text-gray-900 py-2.5 z-30 overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap">
                    {/* First set */}
                    <div className="flex items-center shrink-0">
                        {items.map((item, i) => (
                            <React.Fragment key={`a-${i}`}>
                                <span className="text-lg uppercase font-bold px-2">
                                    {item.text}
                                </span>
                                <span className="text-black font-bold px-2">|</span>
                            </React.Fragment>
                        ))}
                    </div>
                    {/* Duplicate for seamless loop */}
                    <div className="flex items-center shrink-0">
                        {items.map((item, i) => (
                            <React.Fragment key={`b-${i}`}>
                                <span className="head-scroll text-sm font-semibold px-2">
                                    {item.text}
                                </span>
                                <span className="text-black font-bold px-2">|</span>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
    @keyframes marquee {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
    }

    .animate-marquee {
        animation: marquee 12s linear infinite;
    }

    @media (min-width: 768px) {
        .animate-marquee {
            animation: marquee 20s linear infinite;
        }
    }

    .animate-marquee:hover {
        animation-play-state: paused;
    }
`}</style>
        </div>
    )
}