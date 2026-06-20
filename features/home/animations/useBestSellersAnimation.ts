"use client"
import { useGSAP } from "@gsap/react"
import { gsap } from "@/shared/lib/gsap"

export const useBestSellersAnimation = (ref: React.RefObject<HTMLDivElement | null>) => {
    useGSAP(() => {
        const element = ref.current;

        if (!element) return;

        const cards = element.querySelectorAll(".best-seller-card")

        gsap.set(cards, {
            opacity: 0,
            scale: 0.8
        });

        gsap.to(cards, {
            opacity: 1,
            duration: 0.6,
            scale: 1,
            stagger: 0.09,
            ease: "expo.out",
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none none",
            }
        });

    }, { scope: ref })
}