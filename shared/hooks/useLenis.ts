"use client"
import { useEffect } from "react"
import Lenis from 'lenis'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useLenis = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const lenis = new Lenis();

        lenis.on("scroll", ScrollTrigger.update)

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);
};