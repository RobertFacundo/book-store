import Mobile from "./Mobile";
import Desk from "./Desk";
import Logo from "./Logo";

const NavBar = () => {
    return (
        <nav className="relative flex items-center px-6 py-1 z-50">
            <Logo />
            <Desk/>
            <Mobile/>
        </nav>
    )
};

export default NavBar;