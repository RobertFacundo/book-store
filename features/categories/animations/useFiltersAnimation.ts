"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useFiltersAnimation = (ref: React.RefObject<HTMLDivElement | null>) => {
    useGSAP(() => {
        const ctx = gsap.context(() => {
            const buttons = gsap.utils.toArray(".buttons");
            const priceRange = document.querySelector(".price-range");

            console.log(buttons);

            const tl = gsap.timeline();

            tl.fromTo(
                buttons,
                { opacity: 0, scale: 0.85, x:-350 },
                {
                    opacity: 1,
                    scale: 1,
                    x:0,
                    duration: 1.2,
                    stagger: 0.05,
                    ease: "power2.out",
                }
            );

            tl.fromTo(
                priceRange,
                { opacity: 0, x: 80 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.6,
                    ease: "power3.out",
                }
            );
        }, ref);

        return () => ctx.revert();
    }, [])
}