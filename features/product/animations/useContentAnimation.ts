"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/shared/lib/gsap";

export const useContentAnimation = (ref: React.RefObject<HTMLDivElement | null>) => {
    useGSAP(() => {
        const element = ref.current;
        if (!element) return;

        const synopsisTitle = element.querySelector(".synopsis-title");
        const synopsisText = element.querySelector(".synopsis-text");
        const authorTitle = element.querySelector(".author-title");
        const authorDescription = element.querySelector(".author-description");

        if (!synopsisTitle || !synopsisText || !authorTitle || !authorDescription) return

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: "top 80%"
            }
        });
        tl.fromTo(synopsisTitle, {
            opacity: 0,
            x: -80
        }, {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out"
        }).fromTo(synopsisText, {
            opacity: 0,
            x: -100
        }, {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out"
        })
            .fromTo(authorTitle, {
                opacity: 0,
                duration: 0.9,
                x: 60,
                scale: 0.8
            }, {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 0.6,
                ease: "power3.out"
            }, "-=0.6")
            .fromTo(authorDescription, {
                opacity: 0,
                x: 40
            }, {
                opacity: 1,
                x: 0,
                duration: 1.7,
                ease: "power3.out",
            }, "-=0.3")
    }, { scope: ref })
}