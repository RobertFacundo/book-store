import Image from "next/image";
import LogoImage from '@/shared/assets/images/Logo.png'
import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/"
            className="
        flex items-center gap-3
        transition-opacity hover:opacity-80
      "
        >
            <Image
                src={LogoImage}
                alt="Book Store logo"
                width={70}
                height={70}
            />

            <h1 className="text-white text-sm font-semibold">
                Book Store
            </h1>
        </Link>
    )
};

export default Logo;