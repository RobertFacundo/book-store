"use client"
import { useGSAP } from "@gsap/react";
import { gsap } from "@/shared/lib/gsap";

export const useSubscriptionAnimation = (ref: React.RefObject<HTMLDivElement | null>) => {
    useGSAP(() => {
        const element = ref.current;

        if (!element) return;
        const title = element.querySelector(".title");
        const description = element.querySelector(".description");
        const form = element.querySelector(".form");

        if (!title || !description || !form) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
            }
        });

        tl.fromTo(title, {
            opacity: 0,
            x: 100
        }, {
            opacity: 1,
            x: 0,
            duration: 0.5
        })
            .fromTo(description, {
                opacity: 0,
                x: 100
            }, {
                opacity: 1,
                x: 0,
                duration: 0.5
            }, "-=0.2")
            .fromTo(form, {
                opacity: 0,
                x: 100
            }, {
                opacity: 1,
                x: 0,
                duration: 0.5,
            }, "-=0.2")

    })
}