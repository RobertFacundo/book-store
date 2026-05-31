const FooterContact = () => {
    return (
        <div className="flex flex-row justify-between items-center gap-3 p-6 lg:text-md text-[14px] text-zinc-500 tracking-wide">
            <p>© 2026 BookNest. All rights reserved.</p>
            <p>Designed & Developed by {" "}
                <a
                    href="https://github.com/RobertFacundo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lg:text-4xl text-xl cursor-pointer font-[family-name:var(--font-display)] transition-all ease-in-out duration-500 hover:text-yellow-500"
                >
                    Robert
                </a>
            </p>
        </div>
    );
};

export default FooterContact;