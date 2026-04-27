import React from 'react';

const OriginSection = () => {
    return (
        <section className="w-full min-h-screen bg-black text-[[#F5F2ED]] px-6 py-20 md:px-20 md:py-32 flex flex-col justify-center relative overflow-hidden">

            {/* Background Texture (Optional: Adds a subtle grain/noise effect if desired) */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-color"></div>

            <div className="max-w-7xl mx-auto w-full flex items-center flex-col lg:flex-row gap-12 lg:gap-14 relative z-10">

                {/* LEFT COLUMN */}
                <div className="flex flex-col md:max-w-[50%] justify-start">
                    {/* Subtitle */}
                    <h3
                        className=" head-scroll text-xs md:text-sm uppercase tracking-[0.3em] text-zinc-400 font-sans mb-6">
                        The Origin
                    </h3>

                    {/* Main Headline */}
                    <h1
                        style={{
                            letterSpacing: '0.01rem',
                        }}
                        className="text-4xl md:text-6xl lg:text-7xl italic head leading-[1.1] mb-10">
                        <span className="block head text-white">A Dream Born in</span>
                        <span className="block head text-zinc-500">Lagos.</span>
                    </h1>

                    {/* Body Text */}
                    <div style={{
                        letterSpacing: '0.06em',
                        lineHeight: 1.8,
                    }}
                        className="space-y-8 text-[#F5F2ED] leading-relaxed max-w-xl head italic text-[16px] md:text-[18px] font-light">
                        <p>
                            <span className="text-white font-medium">Jubril Arogundade</span> is the embodiment of the  &quot;Jubril of Lagos&quot; identity, a title he wears as a badge of honor and a testament to his personal grit. For Jubril, Lagos was more than a hometown: it was his first masterclass in leadership, resilience, and the art of the possible.
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
                    style={{
                        letterSpacing: '0.02em',
                        lineHeight: 1.6,
                    }}
                    className="flex flex-col md:max-w-[43%] md:px-10 italic head gap-16 mt-8 lg:mt-30">

                    {/* North Star Panel */}
                    <div className="border border-zinc-900 max-w-xl rounded-sm p-6 md:p-8 bg-zinc-900/20 backdrop-blur-sm">
                        <h4 className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-sans mb-3">
                            Jubril&apos;s North Star
                        </h4>
                        <p className=" mb-5 font-serif text-xl talic leading-snug text-[#F5F2ED]">
                            Defining the next century of <span className='text-zinc-400'>African movement</span> through clean energy and innovation.
                        </p>

                        {/* North Code */}
                        <h4 className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-sans mb-3">
                            Jubril&apos;s Code
                        </h4>
                        <p className="font-serif mb-5 text-xl talic leading-snug text-[#F5F2ED]">
                            Strategic execution, uncompromising excellence, and a commitment to continental impact.
                        </p>

                        {/* North Drive */}
                        <h4 className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-sans mb-3">
                            Jubril&apos;s Drive
                        </h4>
                        <p className="font-serif text-xl talic leading-snug text-[#F5F2ED]">
                            Accelerating the transition to sustainable mobility across West Africa.
                        </p>

                        {/* Carousel Indicators */}
                        <div className="flex gap-3 mt-8">
                            <div className="h-[2px] w-8 bg-zinc-700 rounded-full"></div>
                            <div className="h-[2px] w-8 bg-white rounded-full"></div>
                            <div className="h-[2px] w-8 bg-zinc-700 rounded-full"></div>
                        </div>
                    </div>


                    {/* Values Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h5 className="text-xl font-serif italic text-[#F5F2ED] mb-2">Excellence</h5>
                            <p className="text-xs text-zinc-400 uppercase tracking-wide leading-relaxed">
                                Uncompromising standards in every detail.
                            </p>
                        </div>
                        <div>
                            <h5 className="text-xl font-serif italic text-zinc-200 mb-2">Innovation</h5>
                            <p className="text-xs text-zinc-400 uppercase tracking-wide leading-relaxed">
                                Pioneering the future of African mobility.
                            </p>
                        </div>
                        <div>
                            <h5 className="text-xl font-serif italic text-[#F5F2ED] mb-2">Integrity</h5>
                            <p className="text-xs text-zinc-400 uppercase tracking-wide leading-relaxed">
                                Building trust through transparent leadership.
                            </p>
                        </div>
                        <div>
                            <h5 className="text-xl font-serif italic text-[#F5F2ED] mb-2">Impact</h5>
                            <p className="text-xs text-zinc-400 uppercase tracking-wide leading-relaxed">
                                Creating value for the continent and its people.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OriginSection;