"use client";
import { useGSAP } from '@gsap/react'
import gsap from "gsap";

export const useNavAnimation = (ref: React.RefObject<HTMLDivElement | null>) => {
    useGSAP(() => {
        const element = ref.current;

        if (!element) return;

        gsap.set(element, {
            opacity: 1,
        });

        gsap.from(element.querySelectorAll("li"),
            {
                y: -20,
                opacity: 0,
                stagger: 0.1,
                duration: 0.9,
                ease: "power3.out",
            });
    }, { scope: ref })
};