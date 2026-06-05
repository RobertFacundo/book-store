import Image from "next/image"
import heroImage from '@/shared/assets/images/heroCategories.png'

const Background = () => {
    return (
        <>
            <Image src={heroImage} alt="hero" fill className="object-contain object-[60%_15%] lg:object-center" />
            <div className="absolute inset-0 bg-black/30" />
        </>
    )
};

export default Background;