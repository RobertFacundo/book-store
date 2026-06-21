"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/shared/lib/gsap";

export const useGalleryImageAnimation = (ref: React.RefObject<HTMLDivElement | null>, selected: number) => {
    useGSAP(() => {
        const element = ref.current;
        if (!element) return;

        gsap.fromTo(element, {
            opacity: 0,
            scale: 0.87,
            rotate:-5,
        }, {
            opacity: 1,
            rotate:0,
            scale: 1,
            duration: 0.65,
            ease: "power3.out",
        });
    }, {
        scope: ref,
        dependencies: [selected]
    });
};