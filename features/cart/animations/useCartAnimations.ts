"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/shared/lib/gsap";;

export const useCartAnimations = (ref: React.RefObject<HTMLDivElement | null>) => {
    useGSAP(() => {
        const element = ref.current;
        if (!element) return;

        const cartGrid = element.querySelector(".cart-grid");
        const cartHeader = element.querySelector(".cart-header");
        const cartItems = element.querySelector(".cart-items");
        const summaryPanel = element.querySelector(".summary-panel")
        const summaryTitle = element.querySelector(".summary-title");
        const summaryDetails = element.querySelector(".summary-details");
        const summaryTotal = element.querySelector(".summary-total");
        const summaryButton = element.querySelector(".summary-button");
        const summaryItems = [
            summaryTitle,
            summaryDetails,
            summaryTotal,
            summaryButton
        ].filter(Boolean);

        if (!cartGrid || !cartHeader || !cartItems || !summaryPanel) return;

        const tl = gsap.timeline();

        tl.fromTo(cartGrid, {
            opacity: 0,
            x: -80,
        }, {
            opacity: 1,
            x: 0
        })
            .fromTo(cartHeader, {
                opacity: 0,
                y: -20
            }, {
                opacity: 1,
                y: 0
            }, "-=0.3")
            .fromTo(cartItems, {
                opacity: 0,
                y: 20,
            }, {
                opacity: 1,
                y: 0,
                stagger: 0.08,
            }, "-=0.4")
            .fromTo(summaryPanel, {
                opacity: 0,
                x: 40,
            }, {
                opacity: 1,
                x: 0
            }, "-=0.5")
            .fromTo(summaryItems, {
                opacity: 0,
            }, {
                opacity: 1,
                stagger: 0.12
            }, "-=0.3")
    }, { scope: ref })
}