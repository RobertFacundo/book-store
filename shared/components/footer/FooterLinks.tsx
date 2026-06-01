const links = [
    { title: "Explore", items: ["Home", "Best Sellers", "New Releases"] },
    { title: "Categories", items: ["Fiction", "Fantasy", "History"] },
    { title: "Support", items: ["Contact", "FAQ", "Shipping"] },
    { title: "Follow", items: ["Instagram", "X", "Facebook"] }
];

const FooterLinks = () => {
    return (
        <div className="flex flex-row space-around pb-5 pt-2 px-5 gap-6 border-b border-white/10">
            <div className="w-1/3">
                <h2 className="lg:text-5xl text-2xl text-yellow-500 font-[family-name:var(--font-display)] tracking-wide">
                    BookStore
                </h2>
                <p className="mt-3 text-zinc-400 lg:text-md text-[14px] leading-relaxed lg:w-2/3  w-full" >
                    Discover carefully curated books, timeless stories and
                    new adventures for every reader.
                </p>
            </div>
           <div className="w-2/3 grid grid-cols-2 lg:grid-cols-4 text-center gap-3">
             {links.map(link => (
                 <div key={link.title}>
                     <h3 className="text-white font-medium lg:mb-4 lg:text-3xl text-xl">
                         {link.title}
                     </h3>
                     <ul className="flex flex-col items-center lg:space-y-2 text-zinc-400 lg:text-base text-[13px]">
                         {link.items?.map(item => (
                             <li key={item} className="nav-link w-fit cursor-pointer hover:text-yellow-500/70">{item}</li>
                         ))}
                     </ul>
                 </div>
             ))}
           </div>
        </div>
    )
};

export default FooterLinks;