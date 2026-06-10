const ToTopButton = () => {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    return (
        <button
            onClick={handleClick}
            className="fixed bottom-6 right-6 z-50 bg-yellow-500 text-black p-3 rounded-full shadow-lg hover:scale-110 active:scale-95 transition"
        >
            ↑
        </button>
    );
};

export default ToTopButton;