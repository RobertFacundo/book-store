import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";

const Footer = () => {
    return ( 
        <div className="bg-zinc-900 py-2 px-6">
           <div className="w-full mx-auto ">
             <FooterLinks />
             <FooterContact/>
           </div>
        </div>
    )
};

export default Footer;