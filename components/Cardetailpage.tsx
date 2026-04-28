'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import { CarData, CARS_DB } from '@/lib/cars';
import BackButton from './BarkButton';

// ── Marquee gallery images ──────────────────────────────────────────────────
const MARQUEE_IMAGES = [
  '/images/cars/car1.png',
  '/images/cars/car2.png',
  '/images/cars/car3.png',
  '/images/cars/car4.png',
  '/images/cars/car5.png',
  '/images/cars/car6.png',
  '/images/cars/car7.png',
  '/images/cars/car8.png',
];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const items = [...MARQUEE_IMAGES, ...MARQUEE_IMAGES, ...MARQUEE_IMAGES];
  return (
    <div className="overflow-hidden w-full">
      <div
        className={['flex gap-12 w-max', reverse ? 'animate-marquee-reverse' : 'animate-marquee'].join(' ')}
        style={{ willChange: 'transform' }}
      >
        {items.map((src, i) => (
          <div key={i} className="relative flex-shrink-0 w-[280px] sm:w-[340px] h-[150px] sm:h-[210px] overflow-hidden">
            <Image
              src={src}
              alt="Gallery"
              fill
              sizes="340px"
              className="object-cover grayscale opacity-60 hover:opacity-80 hover:grayscale-0 transition-all duration-700"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Tab types ───────────────────────────────────────────────────────────────
type TabId = 'allure' | 'dna' | 'craft' | 'palette';

const TABS: { id: TabId; label: string }[] = [
  { id: 'allure', label: 'THE ALLURE' },
  { id: 'dna', label: 'THE DNA' },
  { id: 'craft', label: 'THE CRAFT' },
  { id: 'palette', label: 'THE PALETTE' },
];

// ── Asset Overview rows ─────────────────────────────────────────────────────
function OverviewRow({ label, value, border = true }: { label: string; value: string; border?: boolean }) {
  return (
    <div className={`flex items-center justify-between py-5 ${border ? 'border-b border-white/[0.08]' : 'border-b border-white/[0.08]'}`}>
      <h3 className="font-cormorant italic font-light text-[clamp(14px,1.5vw,18px)] text-white">
        {label}
      </h3>
      <h3 className="font-cormorant italic font-normal text-[clamp(16px,1.8vw,20px)] text-white leading-none">
        {value}
      </h3>
    </div>
  );
}

function OverviewRowDouble({
  left,
  right,
}: {
  left: { label: string; value: string };
  right: { label: string; value: string };
  border?: boolean;
}) {
  return (
    <div className={`pt-5 grid grid-cols-2 gap-4 `}>
      <div>
        <p className="font-cormorant mb-1.5 not-italic font-light  text-[10px] tracking-[0.15em] uppercase text-white/60">
          {left.label}
        </p>
        <p className="font-cormorant py-5 italic font-normal border-b border-white/[0.08] text-[clamp(16px,1.8vw,20px)] text-white leading-none">
          {left.value}
        </p>
      </div>
      <div>
        <p className="font-cormorant mb-1.5 not-italic font-light  text-[10px] tracking-[0.15em] uppercase text-white/60 ">
          {right.label}
        </p>
        <p className="font-cormorant py-5 italic font-normal mb-1.5 border-b border-white/[0.08] text-[clamp(16px,1.8vw,20px)] text-white leading-none">
          {right.value}
        </p>
      </div>
    </div>
  );
}

// ── Tab content renderers ───────────────────────────────────────────────────

/** THE ALLURE — "WHY I DRIVE THIS" label + large italic pull-quote + body text */
function AllureTab({ car }: { car: CarData }) {
  return (
    <motion.div
      key="allure"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* WHY I DRIVE THIS label */}
      <p className="font-cormorant not-italic font-light text-[8px] tracking-[0.32em] uppercase text-white mb-5">
        Why I Drive This
      </p>

      {/* Large italic pull-quote */}
      <h3 className="font-cormorant italic font-normal text-[clamp(16px,2.2vw,26px)] leading-[1.6] text-white/85 max-w-[600px] mb-6">
        {car.allure.whyIDriveThis}
      </h3>

      {/* Body paragraph */}
      <p className=" font-light text-[clamp(14px,1.4vw,17px)] leading-[1.9] text-white/85 max-w-[580px]">
        {car.allure.body}
      </p>
    </motion.div>
  );
}

/** THE DNA — 2-column grid of labelled stat pairs */
function DnaTab({ car }: { car: CarData }) {
  // Group stats into rows of 2
  const rows: { label: string; value: string }[][] = [];
  for (let i = 0; i < car.dnaStats.length; i += 2) {
    rows.push(car.dnaStats.slice(i, i + 2));
  }

  return (
    <motion.div
      key="dna"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      {rows.map((row, ri) => (
        <div
          key={ri}
          className={`grid grid-cols-2 gap-x-12 gap-y-0 py-6 ${ri < rows.length - 1 ? 'border-b border-white/[0.08]' : ''}`}
        >
          {row.map((stat, si) => (
            <div key={si}>
              <p className="font-cormorant not-italic font-light text-[12px] tracking-[0.32em] uppercase text-white mb-4">
                {stat.label}
              </p>
              <h3 className="font-cormorant italic font-normal text-[clamp(18px,2vw,24px)] text-white/90 leading-none">
                {stat.value}
              </h3>
            </div>
          ))}
        </div>
      ))}
    </motion.div>
  );
}

/** THE CRAFT — 2-column bullet list */
function CraftTab({ car }: { car: CarData }) {
  // Split items into two columns
  const half = Math.ceil(car.craftItems.length / 2);
  const col1 = car.craftItems.slice(0, half);
  const col2 = car.craftItems.slice(half);

  return (
    <motion.div
      key="craft"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-2 gap-x-12 gap-y-0"
    >
      {/* Column 1 */}
      <ul className="flex flex-col gap-0">
        {col1.map((item, i) => (
          <li
            key={i}
            className={`flex items-start gap-3 py-5 ${i < col1.length - 1 ? 'border-b border-white/[0.08]' : ''}`}
          >
            {/* Bullet dot */}
            <span className="mt-[7px] flex-shrink-0 w-[5px] h-[5px] rounded-full bg-[#032e60]" />
            <h3 className="font-cormorant italic font-light text-[clamp(14px,1.5vw,18px)] leading-[1.5] text-white/80">
              {item}
            </h3>
          </li>
        ))}
      </ul>

      {/* Column 2 */}
      <ul className="flex flex-col gap-0">
        {col2.map((item, i) => (
          <li
            key={i}
            className={`flex items-start gap-3 py-5 ${i < col2.length - 1 ? 'border-b border-white/[0.08]' : ''}`}
          >
            <span className="mt-[7px] flex-shrink-0 w-[5px] h-[5px] rounded-full bg-[#032e60]" />
            <h3 className="font-cormorant italic font-light text-[clamp(14px,1.5vw,18px)] leading-[1.5] text-white/80">
              {item}
            </h3>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/** THE PALETTE — color swatches */
function PaletteTab({ car }: { car: CarData }) {
  return (
    <motion.div
      key="palette"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex justify-center flex-wrap gap-10"
    >
      {car.colors.map((color, i) => (
        <div key={i} className="flex flex-col items-center gap-4">
          <div
            className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] border border-white/5 rounded-full transition-transform duration-300 hover:scale-105"
            style={{
              background: color.hex,
              boxShadow: `0 8px 32px ${color.hex}55, inset 0 1px 0 rgba(255,255,255,0.08)`,
            }}
          />
          <p className="font-cormorant not-italic font-light text-[10px] tracking-[0.22em] uppercase text-white/70 text-center whitespace-nowrap">
            {color.name}
          </p>
        </div>
      ))}
    </motion.div>
  );
}

// ── Main component ──────────────────────────────────────────────────────────
interface CarDetailPageProps {
  car?: CarData;
  slug?: string;
}

export default function CarDetailPage({ car: carProp, slug }: CarDetailPageProps) {
  const car = carProp ?? CARS_DB.find(c => c.slug === slug);
  const [activeTab, setActiveTab] = useState<TabId>('allure');

  if (!car) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-4xl font-cormorant mb-4">Car Not Found</h1>
          <p className="text-white/60 mb-4">No car found with slug: <strong>{slug}</strong></p>
          <p className="text-white/40">Available cars:</p>
          <ul className="mt-2 space-y-1">
            {CARS_DB.map(c => (
              <li key={c.slug}>
                <Link href={`/cars/${c.slug}`} className="text-white/60 hover:text-white underline">
                  {c.slug}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/" className="inline-block mt-6 px-6 py-2 bg-[#1b3a6b] hover:bg-[#254d8a] transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const fadeUp = (delay: number) => ({
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.95, delay, ease: [0.22, 1, 0.36, 1] as const },
    },
  });

  return (
    <>
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-reverse {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee         { animation: marquee         32s linear infinite; }
        .animate-marquee-reverse { animation: marquee-reverse 32s linear infinite; }
      `}</style>

      <main className="bg-black min-h-screen font-cormorant overflow-x-hidden">

        {/* ── HERO ── */}
        <section className="relative w-full h-screen overflow-hidden">
          <motion.div className="absolute inset-0 scale-[1.08]">
            <Image
              src={car.image}
              alt={car.name}
              fill
              priority
              sizes="100vw"
              className="md:object-cover object-contain brightness-[0.45]"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent z-[1]" />

          <div className="absolute top-23  md:left-8 left-4 z-20">
            <BackButton />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex gap-3 absolute bottom-[calc(10vh+90px)] left-7 sm:left-10 lg:left-14 z-10"
          >
            <span className="font-cormorant not-italic font-normal text-[10px] tracking-[0.28em] uppercase text-white bg-[#1b3a6b] px-4 py-2 mb-3 md:mb-8 inline-block">
              {car.brand}
            </span>
            <a
              href={car.url}
              target="_blank"
              rel="noopener noreferrer"
              className="head rounded-xl font-bold not-italic sm:hidden inline-block text-[10px] tracking-[0.28em] border border-white/50 uppercase text-white group-hover:bg-white group-hover:text-black px-4 py-2 mb-3 md:mb-8 "
            >
              BUY NOW
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-[13vh] md:bottom-[10vh] left-4 sm:left-8 lg:left-12 z-10"
          >
            <h1 className="font-cormorant italic font-normal text-[clamp(52px,10vw,130px)] leading-none tracking-[-0.01em] text-white">
              {car.name}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="absolute bottom-8 right-10 z-10 flex flex-col items-center gap-2"
          >
            <div className="w-px h-14 bg-white/20 relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 w-full bg-white/60"
                animate={{ height: ['0%', '100%', '0%'], top: ['0%', '0%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
            <span className="font-cormorant not-italic text-[9px] tracking-[0.35em] uppercase text-white/30 rotate-90 origin-center mt-3">
              Scroll
            </span>
          </motion.div>
        </section>

        {/* ── TABBED DETAIL + ASSET OVERVIEW ── */}
        <section className="relative bg-black px-6 sm:px-10 lg:px-16 xl:px-24 pt-20 pb-0">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-start">

            {/* ── LEFT: Tab navigation + content ── */}
            <div>
              {/* Tab bar */}
              <div className="flex items-end gap-0 mb-0 border-b border-white/10">
                {TABS.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={[
                      'relative font-cormorant not-italic font-normal text-[12px] tracking-[0.28em] uppercase pb-4 pr-8 transition-colors duration-300',
                      activeTab === tab.id
                        ? 'text-white'
                        : 'text-white/50 hover:text-white/60',
                    ].join(' ')}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="tab-underline"
                        className="absolute bottom-[-1px] left-0 right-8 h-[1.5px] bg-white"
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <div className="pt-10 min-h-[280px]">
                {activeTab === 'allure' && <AllureTab car={car} />}
                {activeTab === 'dna' && <DnaTab car={car} />}
                {activeTab === 'craft' && <CraftTab car={car} />}
                {activeTab === 'palette' && <PaletteTab car={car} />}
              </div>

              {/* Specs row below tab content */}
              {car.specs && car.specs.length > 0 && (
                <div className="mt-10 border-t border-white/10 pt-8">
                  <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                    {car.specs.map((spec, i) => (
                      <div key={i}>
                        <p className="font-cormorant not-italic font-light text-[8px] tracking-[0.32em] uppercase text-white/28 mb-2">
                          {spec.label}
                        </p>
                        <p className="font-cormorant italic font-light text-[clamp(18px,2vw,24px)] leading-none text-white/90">
                          {spec.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ── RIGHT: Asset Overview ── */}
            <motion.div
              variants={fadeUp(0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-10%' }}
              className="bg-[#0b2240] border border-[#1b3a6b]/50 p-8 sm:p-10 lg:sticky lg:top-10 self-start"
            >
              <p className="font-cormorant not-italic font-medium text-[16px] tracking-[0.07em] uppercase text-white pb-5 border-b border-white/[0.08]">
                Asset Overview
              </p>

              <OverviewRow label="Price" value={car.price} />

              <OverviewRowDouble
                left={{ label: 'Fuel Type', value: car.fuelType }}
                right={{ label: 'Body Type', value: car.bodyType }}
              />

              <OverviewRowDouble
                left={{ label: 'Transmission', value: car.transmission }}
                right={{ label: 'Power', value: car.power }}
              />

              <OverviewRow label="Engine" value={car.engine} border={false} />

              <a
                href={car.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 mt-6 w-full py-5 bg-white font-cormorant not-italic font-normal text-[11px] tracking-[0.38em] uppercase text-black hover:bg-white/90 transition-colors duration-300"
              >
                Buy Now
                <FiArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>

              {car.priceNote && (
                <p className="font-cormorant not-italic font-light text-[10px] tracking-[0.15em] uppercase text-white/20 text-center mt-5 leading-relaxed">
                  {car.priceNote}
                </p>
              )}
            </motion.div>
          </div>
        </section>

        {/* ── ENGINEERING SECTION ── */}
        <section className="bg-black px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 pb-20">
          <div className="max-w-[1400px] mx-auto text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-cormorant not-italic font-light text-[12px] tracking-[0.42em] uppercase text-white mb-6"
            >
              Engineering Excellence
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-cormorant italic font-light text-[clamp(42px,8vw,110px)] leading-[1.0] text-white">
                Precision in Every
              </h2>
              <h2 className="font-cormorant not-italic font-light text-[clamp(42px,8vw,110px)] leading-[1.05] text-white/25">
                Detail.
              </h2>
            </motion.div>
          </div>
        </section>

        {/* ── MARQUEE GALLERY ── */}
        <section className="bg-black pb-28 space-y-3 overflow-hidden">
          <MarqueeRow reverse={false} />
          <MarqueeRow reverse={true} />
        </section>
      </main>
    </>
  );
}