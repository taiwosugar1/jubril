'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import Link from 'next/link';
import { MdMenu } from 'react-icons/md';
import Image from 'next/image';

const NAV_LINKS = [
    { label: 'SPEAKING INQUIRIES', href: '/speaking' },
    { label: 'BRAND SPOKESPERSON', href: '/press' },
    { label: 'STRATEGIC CONSULTATION', href: '/consulting' },
];

const NAV_LINKS2 = [
    { label: 'Home', href: '/' },
    { label: 'Origin', href: '#origin' },
    { label: 'The Legacy', href: '#legacy' },
    { label: 'Alliance', href: '#alliance' },
    { label: 'Hybrid Group', href: '#hybrid' },
    { label: 'Favorites', href: '#favourite' },
    { label: 'Mentors', href: '#mentors' },
    { label: 'Awards', href: '#recognition' },
    { label: 'Brand Spokesperson', href: '/press' },

];

const SCROLL_KEY = 'navbar_pending_scroll';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const router = useRouter();
    const pathname = usePathname();

    /* ── scroll listener ── */
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /* ── body lock when menu open ── */
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    /* ── on home mount: read pending hash and scroll to it ── */
    useEffect(() => {
        if (pathname !== '/') return;
        const hash = sessionStorage.getItem(SCROLL_KEY);
        if (!hash) return;
        sessionStorage.removeItem(SCROLL_KEY);

        // give the page a moment to fully render before scrolling
        const t = setTimeout(() => {
            const el = document.querySelector(hash);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 120);
        return () => clearTimeout(t);
    }, [pathname]);

    /* ── nav-link click handler ── */
    const handleNavClick = useCallback((href: string) => {
        setMenuOpen(false);

        // plain page link (e.g. /speaking)
        if (!href.startsWith('#') && href !== '/') {
            router.push(href);
            return;
        }

        // home link
        if (href === '/') {
            router.push('/');
            return;
        }

        // section anchor
        if (pathname === '/') {
            // already on home — just smooth-scroll
            const el = document.querySelector(href);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
            // store the target, navigate home — useEffect above will scroll
            sessionStorage.setItem(SCROLL_KEY, href);
            router.push('/');
        }
    }, [pathname, router]);

    return (
        <>
            {/* NAVBAR — untouched ── */}
            <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-[18px] transition-all duration-500 ${scrolled
                        ? 'backdrop-blur-xl bg-[#1a1a1a]/60 border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.25)]'
                        : 'bg-transparent'
                    }`}
            >
                <Link href="/" className="flex-shrink-0">
                    <div className="w-[46px] h-[46px] flex items-center justify-center">
                        <Image
                            src="/images/logo.png"
                            alt="logo"
                            width={40}
                            height={40}
                            className="object-cover object-top grayscale brightness-[0.88] transition-all duration-500 ease-out hover:grayscale-0 hover:brightness-100 hover:scale-105"
                        />
                    </div>
                </Link>

                <ul className="hidden md:flex items-center gap-8 lg:gap-12">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="text-white/55 text-[9.5px] tracking-[0.22em] uppercase font-light hover:text-white/90 transition-colors duration-300"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button
                    onClick={() => setMenuOpen(true)}
                    className="w-[44px] h-[44px] rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-all duration-300"
                >
                    <MdMenu className="w-[17px] h-[17px] text-black" />
                </button>
            </motion.nav>

            {/* OVERLAY MENU — untouched except Link → button ── */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 z-[100] bg-[#060e1c] flex flex-col"
                    >
                        {/* TOP */}
                        <div className="flex-shrink-0 flex items-center justify-between px-6 md:px-10 py-[18px]">
                            <Link href="/" onClick={() => setMenuOpen(false)}>
                                <div className="w-[46px] h-[46px] flex items-center justify-center">
                                    <Image
                                        src="/images/logo.png"
                                        alt="logo"
                                        width={40}
                                        height={40}
                                        className="object-cover object-top grayscale brightness-[0.88] transition-all duration-500 ease-out hover:grayscale-0 hover:brightness-100 hover:scale-105"
                                    />
                                </div>
                            </Link>
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="w-[44px] h-[44px] rounded-full bg-white flex items-center justify-center"
                            >
                                <HiX className="text-black w-[17px] h-[17px]" />
                            </button>
                        </div>

                        {/* SCROLLABLE CONTENT */}
                        <div className="flex-1 border-t border-white/5 overflow-y-auto">
                            <div className="flex flex-col items-center px-4 pt-10 pb-10 gap-5 md:gap-7">
                                {NAV_LINKS2.map((link, i) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, y: 24 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 14 }}
                                        transition={{ delay: i * 0.06 + 0.08, duration: 0.5 }}
                                    >
                                        {/* button instead of Link so we control navigation */}
                                        <button onClick={() => handleNavClick(link.href)}>
                                            <h3 className="
                                                font-cormorant italic font-normal
                                                text-[clamp(25px,3vw,54px)]
                                                leading-none tracking-[-0.01em]
                                                text-white/60 hover:text-white
                                                transition-colors duration-300
                                                block text-center
                                            ">
                                                {link.label}
                                            </h3>
                                        </button>
                                    </motion.div>
                                ))}
                            </div>

                            {/* FOOTER */}
                            <div className="px-6 md:px-10 pb-10">
                                <div className="h-px w-full bg-white/[0.08] mb-5" />
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
                                    <p className="font-cormorant font-light text-[10px] tracking-[0.28em] uppercase text-white/30 text-center sm:text-left">
                                        © {new Date().getFullYear()} Jubril Arogundade
                                    </p>
                                    <div className="flex items-center gap-6 md:gap-8">

                                        <a href="https://www.instagram.com/jubriloflagos/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-cormorant font-light text-[10px] tracking-[0.28em] uppercase text-white/30 hover:text-white/70 transition-colors duration-300"
                                        >
                                            Instagram
                                        </a>
                                        <a

                                            href="https://ng.linkedin.com/in/jubril-arogundade-68389b182"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-cormorant font-light text-[10px] tracking-[0.28em] uppercase text-white/30 hover:text-white/70 transition-colors duration-300"
                                        >
                                            LinkedIn
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}