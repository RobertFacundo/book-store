import gsap from "gsap"

export const useAnimateRemoveCardItem = (el: HTMLDivElement, onComplete: () => void) => {
    gsap.to(el, {
        opacity: 0,
        scale: 0.85,
        x: 60,
        duration: 0.5,
        ease: "power2.in",
        onComplete
    })
}