"use client"
import { useGSAP } from "@gsap/react";
import { gsap } from "@/shared/lib/gsap";

export const useCategoriesAnimation = (ref: React.RefObject<HTMLDivElement | null>) => {
    useGSAP(() => {
        const element = ref.current;

        if (!element) return;

        gsap.from(element.querySelectorAll(".category-card"), {
            y: 50,
            opacity: 0,
            stagger: 0.12,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
            }
        });
    }, { scope: ref })
}