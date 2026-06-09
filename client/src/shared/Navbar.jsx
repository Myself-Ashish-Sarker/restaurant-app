import React from 'react';
import { Link } from "react-router";

const Navbar = () => {
    return (
        <>
            <div className="navbar fixed z-10 bg-linear-to-b from-[#ffdcfd] from-1% via-white border border-gray-400">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-5 w-5 font-bold cursor-pointer" 
                                fill="none" viewBox="0 0 24 24" 
                                stroke="currentColor"> 
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-none z-10 mt-6 mr-0 w-72 p-2 shadow">
                            <li className="hover:text-blue-500"><Link>Coupons</Link></li>
                            <li className="hover:text-blue-500"><Link>Portfolio</Link></li>
                            <li className="hover:text-blue-500"><Link>About</Link></li>

                            <div className="bg-base-100 collapse collapse-arrow">
                                <input type="checkbox" className="peer" />
                                <div className="collapse-title text-black peer-checked:text-indigo-600 font-bold">Burgers & Sliders</div>
                                <div className="collapse-content">
                                    <li className="hover:text-blue-500"><Link>Chicken Burgers</Link></li>
                                    <li className="hover:text-blue-500"><Link>Veggie Burgers</Link></li>
                                    <li className="hover:text-blue-500"><Link>Beef Burgers</Link></li>
                                </div>
                            </div>

                            <hr />

                            <div className="bg-base-100 collapse collapse-arrow">
                                <input type="checkbox" className="peer" />
                                <div className="collapse-title ">Beauty</div>
                                <div className="collapse-content">
                                    <li><Link>Sun Screen</Link></li>
                                    <li><Link>Face Wash</Link></li>
                                    <li><Link>Cleaner</Link></li>
                                </div>
                            </div>

                        </ul>
                    </div>

                    <div className="px-5 font-bold">
                        <Link className="text-2xl">BaalSaal</Link>
                    </div>
                </div>

                <div className="navbar-end">
                    <button className="btn px-7 py-3 bg-[#423ff4] text-white">
                        <Link>Login</Link>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;