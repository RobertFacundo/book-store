"use client"
import { useGSAP } from "@gsap/react"
import { gsap } from "@/shared/lib/gsap"

export const useQuoteAnimation = (ref: React.RefObject<HTMLDivElement | null>) => {
    useGSAP(() => {
        const element = ref.current;

        if (!element) return;

        const paragraph = element.querySelector(".quote");
        const author = element.querySelector(".author");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
            }
        });

        tl.fromTo(paragraph, {
            opacity: 0,
            y: -150,
        }, {
            opacity: 1,
            y: 0,
            duration: 0.6,
        });

        tl.fromTo(author, {
            opacity: 0,
            y: 80
        }, {
            opacity: 1,
            y: 0,
            duration: 0.5
        })
    })
}