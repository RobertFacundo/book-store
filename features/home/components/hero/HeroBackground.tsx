import heroImage from '@/shared/assets/images/heroImage.png'
import Image from 'next/image';

const HeroBackground = () => {
    return (
        <>
        <Image src={heroImage} alt='hero-image' fill className='object-cover z-0' priority/>
        <div className='absolute inset-0 bg-black/20 z-10'/>
        </>
    )
};

export default HeroBackground;