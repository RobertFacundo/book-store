import Mobile from "./Mobile";
import Desk from "./Desk";
import Logo from "./Logo";

const NavBar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full flex items-center px-6 py-1 z-50">
            <Logo />
            <Desk/>
            <Mobile/>
        </nav>
    )
};

export default NavBar;