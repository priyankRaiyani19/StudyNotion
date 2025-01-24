import React, {useEffect, useState} from 'react';
import {Link, matchPath} from "react-router-dom";
import Logo from '../../assets/Logo/Logo-Full-Light.png';
import {NavbarLinks} from '../../data/navbar-links'
import {IoIosArrowDown} from "react-icons/io";
import {useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {IoCartOutline} from "react-icons/io5";
import ProfileDropDown from "../core/Auth/ProfileDropDown";
import {apiConnector} from "../../services/apiConnector";
import {categories} from "../../services/apis";


const NavBar = () => {
    // console.log("Printing base url: ", process.env.REACT_APP_BASE_URL);
    const {token} = useSelector((state) => state.auth);
    const {user} = useSelector((state) => state.profile);
    const {totalItems} = useSelector((state) => state.cart)
    const location = useLocation();

    const [subLinks, setSubLinks] = useState([]);

    const fetchSublinks = async () => {
        try {
            const result = await apiConnector("GET", categories.CATEGORIES_API);
            // console.log("Printing SubLinks result:", result);
            setSubLinks(result.data.data);
            // console.log("Printing SubLinks result:", subLinks);
        } catch (error) {
            console.log("Could not fetch the category list");
        }
    }

    useEffect(() => {
        fetchSublinks();
    }, [])

    // ! ***************************************

    const matchRoute = (route) => {
        return matchPath({path: route}, location.pathname)
    }


    return (
        <div className="flex w-[100%] items-center justify-center h-14 border-b-[1px] border-b-richblack-600">

            <div className={`flex flex-row items-center justify-between max-w-maxContent w-11/12 rounded-full`}>

                {/* ? image add*/}

                <Link to="/">
                    <img src={Logo} alt="not found" width="160" height="42" loading={"lazy"}/>
                </Link>

                {/* ?  Nav links add  */}

                <nav>
                    <ul className={`flex flex-row items-center justify-between gap-x-6 text-[14px] text-richblack-25`}>
                        {NavbarLinks.map((ele, index) => {
                            // in this we need return if we write {} this brackets
                            return (<li key={index}>
                                {ele.title === "Catalog" ? (
                                        <div
                                            className={`z-10 flex flex-row w-full relative
                                             justify-center items-center gap-1 group`}>
                                            <div>
                                                {ele?.title}
                                            </div>
                                            <div>
                                                <IoIosArrowDown/>
                                            </div>

                                            {/* ? after hover this block is visible  */}

                                            <div className={` invisible absolute left-[50%] top-[50%]
                                            translate-x-[-50%] translate-y-[15%]
                                             flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900
                                              opacity-0 transition-all duration-200  group-hover:opacity-100
                                                group-hover:visible   
                                             w-[300px] 
                                              `}>
                                                <div className={`absolute left-[55%] rounded-[3px]  bottom-[93.5%] h-6 w-6 rotate-45    
                                                bg-richblack-5 `}></div>

                                                {
                                                    subLinks.length ? (
                                                        subLinks.map((ele, index) => (
                                                                <Link to={`${ele.link}`} key={index}
                                                                      className={`h-[30px] py-[20px] px-2 text-richblack-900 text-[17px] rounded-md flex hover:bg-richblack-100 items-center`}>
                                                                    {ele.name}

                                                                </Link>

                                                            )
                                                        )
                                                    ) : (<div></div>)
                                                }
                                            </div>
                                        </div>) :
                                    (<Link to={ele?.path}>
                                        <div
                                             // we are use isActive is easy to highlight to selected route
                                             // (isActive is inbuilt component)
                                            className={`${matchRoute(ele.path)
                                                ? "text-yellow-5 font-semibold"
                                                : "text-richblack-25"}`}>
                                            {ele?.title}
                                        </div>

                                    </Link>)}
                            </li>);
                        })}
                    </ul>
                </nav>

                {/* ? buttons : login signUp and dashboard */}
                {/*todo:add styling*/}
                <div className={`flex flex-row items-center gap-x-4`}>
                    {
                        user && user?.accountType !== "Instructor" && (
                            <Link to={"/dashboard/cart"} className={`relative`}>
                                <IoCartOutline className={`text-white`}/>
                                {
                                    totalItems > 0 && (
                                        <span>
                                            {totalItems}
                                        </span>
                                    )
                                }
                            </Link>
                        )
                    }
                    {
                        token === null && (
                            <Link to="/login">
                                <button className={`border border-richblack-700 bg-richblack-800 py-[5px] px-[10px]
                                text-richblack-100 rounded-md  hover:bg-richblack-900`}>
                                    Log in
                                </button>
                            </Link>
                        )
                    }
                    {
                        token === null && (
                            <Link to="/signup">
                                <button className={`border border-richblack-700 bg-richblack-800 py-[5px] px-[10px]
                                text-richblack-100 rounded-md  hover:bg-richblack-900`}>
                                    Sign Up
                                </button>
                            </Link>
                        )
                    }
                    {
                        token !== null && (<ProfileDropDown/>)
                    }
                </div>
            </div>
        </div>);
};

export default NavBar;