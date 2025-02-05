import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Loader from "../components/common/Loader";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {resetPassword} from "../services/operations/authApi";
import {Link, useLocation} from "react-router-dom";
import login from "./Login";
import {IoMdArrowBack} from "react-icons/io";
import { useNavigate } from "react-router-dom";

const UpdatePassword = () => {

    const {loading} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const location = useLocation();
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    });
    const {password, confirmPassword} = formData;

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const token = location.pathname.split("/").at(-1);
        login(token);
        dispatch(resetPassword(password, confirmPassword, token,navigate));
    }

    return (
        <div  className={`text-white min-h-[calc(100vh-3.5rem)] grid place-items-center`}>
            {
                loading ?
                    (<div className={`ml-[10%] items-center`}>
                        <Loader/>
                    </div>)
                    : (

                        <div className="flex ml-[50px] flex-col justify-center items-start gap-2">

                            <h1 className={` text-white text-3xl font-bold`} >
                                Choose New Password
                            </h1>

                            <p  className="mt-1 w-[100%] text-richblack-300">
                                Almost done. Enter your new password and you are all set.
                            </p>

                            <form
                                onSubmit={handleOnSubmit}
                                className={` flex flex-col justify-center w-full gap-[25px]  mt-[10px] `}>

                                {/*Password*/}

                            <div className="flex gap-[25px] flex-col" >
                                <label className="relative">
                                    <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                                        New Password <sup className="text-pink-200">*</sup>
                                    </p>
                                    <input
                                        required
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={password}
                                        onChange={handleOnChange}
                                        placeholder="Enter Password"
                                        style={{
                                            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                        }}
                                        className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-richblack-5"
                                    />
                                    <span
                                        onClick={() => setShowPassword((prev) => !prev)}
                                        className="absolute right-3 top-[38px] z-[10] cursor-pointer"
                                    >
              {showPassword ? (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              ) : (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              )}
            </span>
                                </label>
                                <label className="relative">
                                    <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                                        Confirm Password <sup className="text-pink-200">*</sup>
                                    </p>
                                    <input
                                        required
                                        type={showConfirmPassword ? "text" : "password"}
                                        name="confirmPassword"
                                        value={confirmPassword}
                                        onChange={handleOnChange}
                                        placeholder="Confirm Password"
                                        style={{
                                            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                        }}
                                        className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-richblack-5"
                                    />
                                    <span
                                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                                        className="absolute right-3 top-[38px] z-[10] cursor-pointer"
                                    >
              {showConfirmPassword ? (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />

              ) : (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              )}
            </span>
                                </label>
                            </div>

                                <button type={"submit"}   className={`bg-yellow-100 flex justify-center  items-center
                                 rounded-md w-[100%]  h-[45px]`}>
                                    Reset Password
                                </button>

                            </form>

                            <div className={`mt-2 text-white`}>
                                <Link to="/login" className={`flex  items-center gap-2`}>
                                    <div><IoMdArrowBack/>
                                    </div>
                                    <p>
                                        Back To Login
                                    </p>
                                </Link>
                            </div>

                        </div>
                    )
            }
        </div>
    );
};

export default UpdatePassword;