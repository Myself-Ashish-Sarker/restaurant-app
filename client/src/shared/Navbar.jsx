import React from 'react';
import { Link } from "react-router";
import coupon from "../assets/icon/coupon.png";
import offer from "../assets/icon/offer.png";
import love from "../assets/icon/love.png";

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

                        {/* The main dropdown menu container */}
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-none z-10 mt-6 left-0 fixed w-72 p-0 shadow"
                        >
                            {/* Strictly bound vertical scrolling area */}
                            <div className="max-h-150 overflow-y-scroll overflow-x-hidden w-full p-2 block">

                                <li>
                                    <div className="pl-3 flex items-center font-semibold text-base hover:text-blue-500">
                                        <img className="w-5 h-5" src={coupon} alt="" />
                                        <Link to="/coupons">Coupons</Link>
                                    </div>
                                </li>

                                <li className="mt-2">
                                    <div className="pl-3 flex items-center font-semibold text-base hover:text-blue-500">
                                        <img className="w-5 h-5" src={offer} alt="" />
                                        <Link to="/offers">Offer</Link>
                                    </div>
                                </li>

                                <li className="mt-2">
                                    <div className="pl-3 flex items-center font-semibold text-base hover:text-blue-500">
                                        <img className="w-5 h-5" src={love} alt="" />
                                        <Link to="/favourites">Favourites</Link>
                                    </div>
                                </li>

                                <hr className="my-2 border-gray-200" />

                                {/* Accordion 1: Burgers */}
                                <div className="bg-base-100 collapse collapse-arrow">
                                    <input type="checkbox" className="peer" />
                                    <div className="collapse-title text-black peer-checked:text-indigo-600 font-bold">Burger & Slieders</div>
                                    <div className="collapse-content">
                                        <li className="hover:text-blue-500">
                                            <Link to="/category/chicken-burgers" className="font-semibold text-sm">Chicken Burgers</Link>
                                        </li>
                                        <li className="hover:text-blue-500">
                                            <Link to="/category/veggie-burgers" className="font-semibold text-sm">Veggie Burgers</Link>
                                        </li>
                                        <li className="hover:text-blue-500">
                                            <Link to="/category/beef-burgers" className="font-semibold text-sm">Beef Burgers</Link>
                                        </li>
                                    </div>
                                </div>

                                <hr className="my-1 border-gray-200" />

                                {/* Accordion 2: Pizza & Pasta */}
                                <div className="bg-base-100 collapse collapse-arrow">
                                    <input type="checkbox" className="peer" />
                                    <div className="collapse-title text-black peer-checked:text-indigo-600 font-bold">Pizza & Pasta</div>
                                    <div className="collapse-content">
                                        <li className="hover:text-blue-500">
                                            <Link to="/category/classic-pizzas" className="font-semibold text-sm">Classic Pizzas</Link>
                                        </li>
                                        <li className="hover:text-blue-500">
                                            <Link to="/category/premium-pizzas" className="font-semibold text-sm">Premium / Loaded Pizzas</Link>
                                        </li>
                                        <li className="hover:text-blue-500">
                                            <Link to="/category/baked-pastas" className="font-semibold text-sm">Baked Pastas</Link>
                                        </li>
                                    </div>
                                </div>

                                <hr className="my-1 border-gray-200" />

                                {/* Accordion 3: Fried Chicken */}
                                <div className="bg-base-100 collapse collapse-arrow">
                                    <input type="checkbox" className="peer" />
                                    <div className="collapse-title text-black peer-checked:text-indigo-600 font-bold">Fried & Crispy Chicken</div>
                                    <div className="collapse-content">
                                        <li className="hover:text-blue-500">
                                            <Link to="/category/fried-chicken" className="font-semibold text-sm">Fried Chicken Pieces</Link>
                                        </li>
                                        <li className="hover:text-blue-500">
                                            <Link to="/category/chicken-tenders" className="font-semibold text-sm">Chicken Tenders / Strips</Link>
                                        </li>
                                        <li className="hover:text-blue-500">
                                            <Link to="/category/hot-wings" className="font-semibold text-sm">Hot Wings</Link>
                                        </li>
                                    </div>
                                </div>

                                <hr className="my-1 border-gray-200" />

                                {/* Accordion 4: Sides */}
                                <div className="bg-base-100 collapse collapse-arrow">
                                    <input type="checkbox" className="peer" />
                                    <div className="collapse-title text-black peer-checked:text-indigo-600 font-bold">Sides & Appetizers</div>
                                    <div className="collapse-content">
                                        <li className="hover:text-blue-500">
                                            <Link to="/category/french-fries" className="font-semibold text-sm">French Fries & Wedges</Link>
                                        </li>
                                        <li className="hover:text-blue-500">
                                            <Link to="/category/onion-rings" className="font-semibold text-sm">Onion Rings</Link>
                                        </li>
                                        <li className="hover:text-blue-500">
                                            <Link to="/category/nuggets" className="font-semibold text-sm">Nuggets & Popcorn Chicken</Link>
                                        </li>
                                    </div>
                                </div>

                                <hr className="my-1 border-gray-200" />

                                {/* Accordion 5: Sides */}
                                <div className="bg-base-100 collapse collapse-arrow">
                                    <input type="checkbox" className="peer" />
                                    <div className="collapse-title text-black peer-checked:text-indigo-600 font-bold">French Fries & Wedges</div>
                                    <div className="collapse-content">
                                        <li className="hover:text-blue-500">
                                            <Link to="/category/french-fries" className="font-semibold text-sm">Shawarmas</Link>
                                        </li>
                                        <li className="hover:text-blue-500">
                                            <Link to="/category/onion-rings" className="font-semibold text-sm">Grilled Chicken Wraps</Link>
                                        </li>
                                        <li className="hover:text-blue-500">
                                            <Link to="/category/nuggets" className="font-semibold text-sm">Subway-style Sub Sandwiches</Link>
                                        </li>
                                    </div>
                                </div>

                                <hr className="my-1 border-gray-200" />

                                {/* Accordion 6: Sides */}
                                <div className="bg-base-100 collapse collapse-arrow">
                                    <input type="checkbox" className="peer" />
                                    <div className="collapse-title text-black peer-checked:text-indigo-600 font-bold">Beverages & Desserts</div>
                                    <div className="collapse-content">
                                        <li className="hover:text-blue-500">
                                            <Link to="/category/french-fries" className="font-semibold text-sm">Soft Drinks & Water</Link>
                                        </li>
                                        <li className="hover:text-blue-500">
                                            <Link to="/category/onion-rings" className="font-semibold text-sm">Milkshakes & Mocktails</Link>
                                        </li>
                                        <li className="hover:text-blue-500">
                                            <Link to="/category/nuggets" className="font-semibold text-sm">Waffles / Brownies</Link>
                                        </li>
                                    </div>
                                </div>

                            </div>
                        </ul>
                    </div>

                    <div className="px-5 font-bold">
                        <Link to="/" className="text-2xl font-briston">Sarker's</Link>
                    </div>
                </div>

                <div className="navbar-end">
                    <button className="btn px-7 py-3 bg-[#423ff4] text-white cursor-pointer">
                        <Link to="/login">Login</Link>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;