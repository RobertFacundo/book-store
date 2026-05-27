import Image from "next/image";
import LogoImage from '@/shared/assets/images/Logo.png'
import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/"
            className="
        flex items-center gap-3
         transition-all duration-800 ease-in-out
        hover:scale-105

      "
        >
            <Image
                src={LogoImage}
                alt="Book Store logo"
                width={70}
                height={70}
                 className="transition-all duration-500 ease-in-out hover:drop-shadow-[0_0_10px_rgba(234,179,8,0.7)]"
            />

            {/* <h1 className="font-[family-name:var(--font-display)] tracking-widest text-white text-4xl font-light">
                Book Store
            </h1> */}
        </Link>
    )
};

export default Logo;