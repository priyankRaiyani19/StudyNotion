import React, { useEffect, useState } from "react";
import { Link, matchPath } from "react-router-dom";
import Logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import { IoIosArrowDown, IoIosMenu, IoIosClose } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoCartOutline } from "react-icons/io5";
import ProfileDropDown from "../core/Auth/ProfileDropDown";
import { apiConnector } from "../../services/apiConnector";
import { categories } from "../../services/apis";

const NavBar = () => {
    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile);
    const { totalItems } = useSelector((state) => state.cart);
    const location = useLocation();

    const [subLinks, setSubLinks] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

    const fetchSublinks = async () => {
        try {
            const result = await apiConnector("GET", categories.CATEGORIES_API);
            setSubLinks(result.data.data);
        } catch (error) {
            console.log("Could not fetch the category list");
        }
    };

    useEffect(() => {
        fetchSublinks();
    }, []);

    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname);
    };

    return (
        <div className="flex w-full items-center justify-center h-14 border-b-[1px] border-b-richblack-600 bg-richblack-900">
            <div className="flex flex-row items-center justify-between max-w-maxContent w-11/12">

                {/* Hamburger Menu Icon (Mobile and Tablet) */}
                <div className="lg:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? (
                            <IoIosClose className="text-2xl text-white" />
                        ) : (
                            <IoIosMenu className="text-2xl text-white" />
                        )}
                    </button>
                </div>

                {/* Logo */}
                <Link to="/" className="flex-none">
                    <img src={Logo} alt="Logo" width="160" height="42" loading="lazy" />
                </Link>

                {/* Nav Links (Mobile and Tablet) */}
                <nav
                    className={`${
                        isMenuOpen ? "block" : "hidden"
                    } lg:flex absolute lg:ml-auto lg:static top-14 left-0 w-full lg:w-auto bg-richblack-900 lg:bg-transparent z-10 lg:z-auto`}
                >
                    <ul className="flex flex-col lg:flex-row items-center gap-x-6 lg:gap-x-8 text-[14px] text-richblack-25 lg:justify-center">
                        {NavbarLinks.map((ele, index) => (
                            <li key={index} className="py-2 lg:py-0">
                                {ele.title === "Catalog" ? (
                                    <div className="relative group flex flex-col lg:flex-row items-center gap-1">
                                        <div>{ele.title}</div>
                                        <IoIosArrowDown />
                                        <div
                                            className="invisible absolute left-1/2 top-full lg:top-[50%] transform -translate-x-1/2 translate-y-2 lg:translate-y-[15%]
                        flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-200
                        group-hover:opacity-100 lg:group-hover:visible w-[300px]"
                                        >
                                            <div className="absolute left-[55%] bottom-full h-6 w-6 rotate-45 bg-richblack-5"></div>
                                            {subLinks.length ? (
                                                subLinks.map((link, idx) => (
                                                    <Link
                                                        to={`${link.link}`}
                                                        key={idx}
                                                        className="h-[30px] py-[20px] px-2 text-richblack-900 text-[17px] rounded-md flex hover:bg-richblack-100 items-center"
                                                    >
                                                        {link.name}
                                                    </Link>
                                                ))
                                            ) : (
                                                <div>No categories</div>
                                            )}
                                        </div>
                                    </div>
                                ) : (
                                    <Link to={ele.path}>
                                        <div
                                            className={`${
                                                matchRoute(ele.path)
                                                    ? "text-yellow-5 font-semibold"
                                                    : "text-richblack-25"
                                            }`}
                                        >
                                            {ele.title}
                                        </div>
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Profile and Cart Buttons (Always on right) */}
                <div className="flex items-center gap-x-4 ml-auto">
                    {user && user?.accountType !== "Instructor" && (
                        <Link to="/dashboard/cart" className="relative">
                            <IoCartOutline className="text-white text-2xl" />
                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
                            )}
                        </Link>
                    )}
                    {token === null ? (
                        <>
                            <Link to="/login">
                                <button className="lg:border lg:border-richblack-700 lg:bg-richblack-800 lg:py-2 lg:px-4 text-richblack-100 lg:rounded-md hover:bg-richblack-900">
                                    Log In
                                </button>
                            </Link>
                            <Link to="/signup">
                                <button className="lg:border lg:border-yellow-500 lg:bg-yellow-500 lg:py-2 lg:px-4 text-white rounded-md lg:hover:bg-yellow-600">
                                    Sign Up
                                </button>
                            </Link>
                        </>
                    ) : (
                        <ProfileDropDown />
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
