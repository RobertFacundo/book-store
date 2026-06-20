"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export const useHeroContentAnimation = (ref: React.RefObject<HTMLDivElement | null>) => {
    useGSAP(() => {
        const element = ref.current;

        if (!element) return;

        const heading = element.querySelector("h1");
        const paragraph = element.querySelector("p");
        const button = element.querySelector("button");

        gsap.set(element, {
            opacity: 1,
        });

        const tl = gsap.timeline();

        tl.from(heading, {
            x: -150,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
        })
            .from(
                paragraph,
                {
                    x: -30,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                },
                "-=0.6"
            )
            .from(
                button,
                {
                    scale: 0.9,
                    opacity: 0,
                    duration: 0.6,
                    ease: "back.out(1.7)",
                },
                "-=0.4"
            );
    }, { scope: ref })
}