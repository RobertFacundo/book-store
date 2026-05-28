import HeroContent from './HeroContent';
import HeroBackground from './HeroBackground';
import HeroLayout from './HeroLayout';

const HeroSection = ()=>{
    return(
        <div className='relative min-h-screen'>
            <HeroBackground />

            <HeroLayout>
                <HeroContent />
            </HeroLayout>
        </div>
    )
};

export default HeroSection;