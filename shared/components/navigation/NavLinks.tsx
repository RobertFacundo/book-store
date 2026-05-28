"use client"
import { NavigationLinks } from "@/shared/data/NavigationLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinksProps = {
    onClick?: () => void;
    className?: string;
}

const NavLinks = ({ onClick, className }: NavLinksProps) => {
    const pathname = usePathname();
    return (
        <>
            {NavigationLinks.map((link) => {
                const isActive = pathname === link.path;

                return (
                    <li key={link.path}>
                        <Link
                            href={link.path}
                            onClick={onClick}
                            className={`${className} ${isActive ? "active-link" : ""}`}
                        >
                            {link.label}
                        </Link>
                    </li>
                )
            })}
        </>
    )
};

export default NavLinks;