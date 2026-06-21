import { ArrowUp } from "lucide-react";
import { useRef } from "react";
import { useEffect } from "react";
import gsap from "gsap";
import { useToToButtonAnimation } from "@/shared/animations/ui/useToTopButtonAnimation";

const ToTopButton = ({ visible }: { visible: boolean }) => {
    const ref = useRef<HTMLButtonElement>(null);

    useToToButtonAnimation(ref, visible)
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    return (
        <button
            ref={ref}
            onClick={handleClick}
            className="fixed bottom-16 opacity-0 right-6 z-50 bg-yellow-500/60 text-black p-3 rounded-full shadow-lg hover:scale-110 hover:bg-yellow-500 active:scale-95 transition-all ease-in-out duration-300 cursor-pointer"
        >
            <ArrowUp size={26} />
        </button>
    );
};

export default ToTopButton;