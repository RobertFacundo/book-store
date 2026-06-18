"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


export const useMobileNavAnimation = (ref: React.RefObject<HTMLDivElement | null>, isOpen: boolean) => {
    useGSAP(() => {
        const el = ref.current;
        if (!el) return;

        gsap.set(el, {
            opacity: 0,
            pointerEvents: "none",
        });

        if (isOpen) {
            gsap.to(el, {
                opacity: 1,
                pointerEvents: "auto",
                duration: 0.3,
            });

            gsap.fromTo(
                el.querySelectorAll("li"),
                {
                    y: 30,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.08,
                    duration: 0.6,
                    ease: "power3.out",
                }
            );
        } else {
            gsap.to(el, {
                opacity: 0,
                pointerEvents: "none",
                duration: 0.25,
            });
        }
    }, {
        scope: ref,
        dependencies: [isOpen],
    });
}