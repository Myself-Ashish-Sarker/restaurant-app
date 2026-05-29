import { useState, useEffect } from "react";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [expandedItems, setExpandedItems] = useState({});
    const [isPagesHovered, setIsPagesHovered] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const toggleSubmenu = (item, e) => {
        e.stopPropagation();
        setExpandedItems((prev) => ({
            ...prev,
            [item]: !prev[item],
        }));
    };

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <nav className="bg-white shadow-md relative z-9999">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-gray-800">Navbar</div>

                {/* Mobile Menu Button */}
                <button
                    className="text-gray-700 text-lg focus:outline-none lg:hidden relative z-10000"
                    onClick={toggleMenu}
                >
                    {isMobileMenuOpen ? "Close" : "Menu"}
                </button>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex space-x-6 items-center relative">
                    <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Home</li>
                    <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Tour</li>
                    <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Destination</li>

                    {/* Pages with Hover Dropdown */}
                    <li
                        className="relative group text-gray-700 hover:text-blue-500 cursor-pointer"
                        onMouseEnter={() => setIsPagesHovered(true)}
                        onMouseLeave={() => setIsPagesHovered(false)}
                    >
                        Pages
                        {/* Dropdown Menu */}
                        <ul
                            className={`absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md py-2 w-48 transition-all duration-200 ${isPagesHovered ? "opacity-100 visible" : "opacity-0 invisible"
                                }`}
                        >
                            <li className="px-4 py-2 hover:bg-gray-100 text-gray-700">About</li>
                            <li className="px-4 py-2 hover:bg-gray-100 text-gray-700">Gallery</li>
                            <li className="px-4 py-2 hover:bg-gray-100 text-gray-700">FAQ Page</li>
                        </ul>
                    </li>

                    <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Shop</li>
                    <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Blog</li>
                    <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Dashboard</li>
                    <li>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                            Buy Now
                        </button>
                    </li>
                </ul>
            </div>

            {/* FIXED MOBILE MENU */}
            {isMobileMenuOpen && (
                <>
                    {/* 1. BACKDROP - Now properly positioned to cover the entire viewport */}
                    <div
                        className="fixed inset-0 bg-black/50 z-9997"
                        onClick={closeMenu}
                        aria-label="Close menu"
                    />

                    {/* 2. MENU CARD */}
                    <div className="fixed lg:hidden left-0 right-0 top-18 bg-gray-50 p-4 shadow-2xl border-t border-gray-200 z-9998 max-h-[calc(100vh-72px)] overflow-y-auto">
                        <ul className="space-y-2">
                            <li className="text-gray-700 border-b border-gray-200 py-2" onClick={closeMenu}>Home</li>
                            <li className="text-gray-700 border-b border-gray-200 py-2" onClick={closeMenu}>Tour</li>
                            <li className="text-gray-700 border-b border-gray-200 py-2" onClick={closeMenu}>Destination</li>

                            <li className="text-gray-700 border-b border-gray-200 py-2">
                                <div className="flex justify-between items-center cursor-pointer" onClick={(e) => toggleSubmenu("pages", e)}>
                                    <span>Pages</span>
                                    <button className="text-gray-500 font-bold px-2">
                                        {expandedItems.pages ? "-" : "+"}
                                    </button>
                                </div>
                                {expandedItems.pages && (
                                    <ul className="pl-4 pt-2 space-y-1">
                                        <li className="text-gray-600 border-b py-2" onClick={closeMenu}>
                                            <span>--- </span><span className="hover:text-emerald-500">About</span>
                                        </li>
                                        <li className="text-gray-600 border-b py-2" onClick={closeMenu}>
                                            <span>--- </span><span className="hover:text-emerald-500">Gallery</span>
                                        </li>
                                        <li className="text-gray-600 py-1" onClick={closeMenu}>
                                            <span>--- </span><span className="hover:text-emerald-500">FAQ Page</span>
                                        </li>
                                    </ul>
                                )}
                            </li>

                            <li className="text-gray-700 border-b border-gray-200 py-2" onClick={closeMenu}>Shop</li>
                            <li className="text-gray-700 border-b border-gray-200 py-2" onClick={closeMenu}>Blog</li>
                            <li className="text-gray-700 border-b border-gray-200 py-2" onClick={closeMenu}>Dashboard</li>
                            <li onClick={closeMenu}>
                                <button className="bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600">
                                    Buy Now
                                </button>
                            </li>
                        </ul>
                    </div>
                </>
            )}
        </nav>
    );
};

export default Navbar;