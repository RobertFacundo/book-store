import { useEffect } from "react"
import gsap from "gsap";

export const useNavBarScrollAnimation = (ref: React.RefObject<HTMLElement | null>, hidden: boolean) => {
    useEffect(() => {
        if (!ref.current) return;

        gsap.to(ref.current, {
            y: hidden ? -100 : 0,
            opacity: hidden ? 0 : 1,
            duration: 0.9,
            ease: "power3.out",
        });
    }, [hidden])
}