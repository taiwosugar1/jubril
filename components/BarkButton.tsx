'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function BackButton() {
    const router = useRouter();

    useEffect(() => {
        const savedScroll = sessionStorage.getItem('scrollY');
        if (!savedScroll) return;

        const targetY = parseInt(savedScroll, 10);
        sessionStorage.removeItem('scrollY');

        // Strategy: keep attempting to scroll until the page has rendered enough
        // content to actually reach the target position. RAF alone isn't enough
        // because Next.js hydration + image layout shifts push content down
        // after the first frame.
        let attempts = 0;
        const MAX_ATTEMPTS = 30; // ~500ms ceiling

        const tryScroll = () => {
            // The page is scrollable enough when its total height exceeds the target
            const pageIsReady = document.body.scrollHeight >= targetY + window.innerHeight;

            if (pageIsReady || attempts >= MAX_ATTEMPTS) {
                window.scrollTo({ top: targetY, behavior: 'instant' });
                return;
            }

            attempts++;
            // Use rAF for the first couple of frames, then settle into 16ms polling
            // to avoid burning CPU while waiting for lazy content to mount.
            setTimeout(() => requestAnimationFrame(tryScroll), 16);
        };

        requestAnimationFrame(tryScroll);
    }, []);

    const handleReturn = () => {
        // Capture scroll position *before* leaving — this is the position we want
        // to land on when we come back.
        sessionStorage.setItem('scrollY', window.scrollY.toString());
        router.back();
    };

    return (
        <button
            onClick={handleReturn}
            className="text-white/60 z-10 hover:text-white transition-all duration-300 text-xs tracking-widest uppercase"
        >
            ← RETURN BACK
        </button>
    );
}