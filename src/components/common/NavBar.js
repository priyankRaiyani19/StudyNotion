import React from 'react';
import {Link, matchPath} from "react-router-dom";
import Logo from '../../assets/Logo/Logo-Full-Light.png';
import {NavbarLinks} from '../../data/navbar-links'
import {IoIosArrowDown} from "react-icons/io";
import {useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {IoCartOutline} from "react-icons/io5";

const NavBar = () => {


    //? fetch data from reducer for that use UseSelector hook
    const {token} = useSelector(state => state.auth);
    const {user} = useSelector(state => state.profile);
    const {totalItems} = useSelector(state => state.cart);

    // ! ***************************************
    const location = useLocation('');
    const matchRoute = (route) => {
        return matchPath({path: route}, location.pathname)
    }


    return (
        <div className="flex w-[100%] items-center justify-center h-14 border-b-[1px] border-b-richblack-600">

            <div className={`flex flex-row items-center justify-between max-w-maxContent w-11/12 rounded-full `}>

                {/* ? image add*/}

                <Link to="/">
                    <img src={Logo} alt="not found" width="160" height="42" loading={"lazy"}/>
                </Link>

                {/* ?  Nav links add  */}

                <nav>
                    <ul className={`flex flex-row items-center justify-between gap-x-6 text-[14px] text-richblack-25 `}>
                        {NavbarLinks.map((ele, index) => {
                            // in this we need return if we write {} this brackets
                            return (<li key={index}>
                                {ele.title === "Catalog" ? (
                                        <div className={`flex flex-row w-full justify-center items-center gap-1`}>
                                            <div>
                                                {ele?.title}
                                            </div>
                                            <div>
                                                <IoIosArrowDown/>
                                            </div>
                                        </div>)
                                    : (<Link to={ele?.path}>

                                        <div
                                            className={`${matchRoute(ele.path) ? "text-yellow-5 font-semibold"
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
                                <IoCartOutline/>
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

                </div>
            </div>
        </div>);
};

export default NavBar;