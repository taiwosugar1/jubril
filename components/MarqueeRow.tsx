export default function MarqueeRow({
    word,
    dir,
    duration,
}: {
    word: string;
    dir: 'left' | 'right';
    duration: number;
}) {
    // Repeat word many times so the strip is much wider than the viewport
    const repeated = Array(14).fill(word).join('      ');
    // Double it so the seamless loop works (animate -50% then loop)
    const content = `${repeated}     ${repeated}`;

    return (
        <div className="overflow-hidden w-full leading-none">

            {/* ── Global styles (keyframes + font import) ── */}
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
                className="
    inline-block whitespace-nowrap select-none
    md:text-[clamp(52px,8.5vw,140px)]
    text-[clamp(52px,20vw,140px)]
    font-black not-italic
    head-scroll
    tracking-[0.02em]
    leading-[1.5]
    md:leading-[1.05]
    text-white/5
    will-change-transform
  "
                style={{
                    animation: `marquee-${dir} ${duration}s linear infinite`,
                }}
            >
                {content}
            </div>
        </div>
    );
}