"use client"
import { useGSAP } from "@gsap/react"
import { gsap } from "@/shared/lib/gsap"

export const useProductDetailAnimations = (ref: React.RefObject<HTMLDivElement | null>) => {
    useGSAP(() => {
        const element = ref.current;
        if (!element) return;

        const gallerySection = element.querySelector(".gallery-section");
        const descriptionSection = element.querySelector(".description-section");
        if (!gallerySection || !descriptionSection) return;

        const gallery = element.querySelector(".gallery-grid");
        const thumbnails = element.querySelectorAll(".gallery-thumbnails");

        if (thumbnails.length === 0) return

        const descriptionItems = [
            element.querySelector(".description-category"),
            element.querySelector(".description-header"),
            element.querySelector(".description-rating"),
            element.querySelector(".description-quote"),
            element.querySelector(".description-stats"),
            element.querySelector(".description-price"),
            element.querySelector(".description-controls"),
        ].filter(Boolean);

        if (!descriptionItems) return;

        const tl = gsap.timeline();

        tl.fromTo(gallery, {
            opacity: 0,
            x: -80,
        }, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out"
        })
            .fromTo(thumbnails, {
                opacity: 0,
                x: -30,
                scale: 0.9,
            }, {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 0.5,
                stagger: 0.08,
                ease: "power3.out"
            }, "-=0.4")

            .fromTo(descriptionItems, {
                opacity: 0,
                x: 150,
            }, {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.12
            }, "-=0.8")
    }, { scope: ref })
}