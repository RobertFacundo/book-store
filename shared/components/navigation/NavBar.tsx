import Mobile from "./Mobile";
import Desk from "./Desk";
import { useRef } from "react";
import { useNavBarScrollAnimation } from "@/shared/animations/navigation/useNavBarScrollAnimation";

type Props = {
    hidden: boolean;
};

const NavBar = ({ hidden }: Props) => {
    const ref = useRef<HTMLElement>(null);

    useNavBarScrollAnimation(ref, hidden)
    return (
        <nav ref={ref} className="fixed top-0 left-0 w-full flex items-center px-6 py-1 z-50 mt-3">
            {/* <Logo /> */}
            <Desk />
            <Mobile />
        </nav>
    )
};

export default NavBar;