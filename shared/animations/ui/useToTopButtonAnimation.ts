"use client";
import { useEffect } from "react";
import gsap from "gsap";

export const useToToButtonAnimation = (ref: React.RefObject<HTMLButtonElement | null>, visible: boolean) => {
    useEffect(() => {
        if (!ref.current) return;

        const el = ref.current;

        gsap.set(el, {
            opacity: 0,
            y: 20,
            pointerEvents: "none",
        });

        gsap.to(el, {
            opacity: visible ? 1 : 0,
            y: visible ? 0 : 20,
            pointerEvents: visible ? "auto" : "none",
            duration: 0.4,
            ease: "power3.out",
        });
    }, [visible]);
};