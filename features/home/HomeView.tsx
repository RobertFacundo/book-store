import heroImage from '@/shared/assets/images/heroImage.png'
import Image from 'next/image';

const HomeView = () => {
    return (
        <div className='min-h-height'>
            <Image src={heroImage} alt="hero image" fill className='z-10'/>
        </div>
    )
};

export default HomeView;