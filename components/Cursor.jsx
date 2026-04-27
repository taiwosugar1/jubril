"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
    const [hovering, setHovering] = useState(false);

    // Detect fine pointer once
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        const isFinePointer = window.matchMedia("(pointer: fine)").matches;
        setEnabled(isFinePointer);
    }, []);

    // Raw mouse position
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Smooth motion
    const smoothX = useSpring(mouseX, { stiffness: 500, damping: 40 });
    const smoothY = useSpring(mouseY, { stiffness: 500, damping: 40 });

    // Mouse move
    useEffect(() => {
        if (!enabled) return;

        const move = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, [enabled, mouseX, mouseY]);

    // Hover detection
    useEffect(() => {
        if (!enabled) return;

        const add = () => setHovering(true);
        const remove = () => setHovering(false);

        const elements = document.querySelectorAll(
            "a, button, input, textarea, select, [data-cursor]"
        );

        elements.forEach((el) => {
            el.addEventListener("mouseenter", add);
            el.addEventListener("mouseleave", remove);
        });

        return () => {
            elements.forEach((el) => {
                el.removeEventListener("mouseenter", add);
                el.removeEventListener("mouseleave", remove);
            });
        };
    }, [enabled]);

    if (!enabled) return null;

    return (
        <>
            {/* INNER DOT */}
            <motion.div
                className="fixed top-0 left-0 z-50 h-2 w-2 rounded-full bg-[#001F3F] pointer-events-none"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />

            {/* OUTER RING */}
            <motion.div
                className="fixed top-0 left-0 z-40 h-10 w-10 rounded-full border border-[#001F3F] pointer-events-none"
                style={{
                    x: smoothX,
                    y: smoothY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{ scale: hovering ? 1.8 : 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
        </>
    );
}
