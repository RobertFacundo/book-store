"use client"
import { useGSAP } from "@gsap/react"
import { gsap } from "@/shared/lib/gsap"

export const useHeroCategoriesSectionAnimation = (ref: React.RefObject<HTMLDivElement | null>) => {
    useGSAP(() => {
        const element = ref.current;
        if (!element) return;

        const paragraph = element.querySelector(".paragraph");
        if (!paragraph) return;

        gsap.set(paragraph, {
            opacity: 0,
            x: -150,
        });

        gsap.to(paragraph, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out"
        })

        
    }, { scope: ref })
}