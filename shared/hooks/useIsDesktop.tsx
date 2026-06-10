import { useEffect, useState } from "react";

export const useIsDesktop = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const check = () => setIsDesktop(window.innerWidth >= 768);

        check(); // inicial
        window.addEventListener("resize", check);

        return () => window.removeEventListener("resize", check);
    }, []);

    return isDesktop;
};