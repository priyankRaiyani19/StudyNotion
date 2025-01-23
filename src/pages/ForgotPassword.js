import React from 'react';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {IoMdArrowBack} from "react-icons/io";
import {getPasswordResetToken} from "../services/oprations/authApi";
import Loader from "../components/common/Loader";



const ForgotPassword = () => {

    const {loading} = useSelector((state) => state.auth);
    const [email, setEmail] = useState("");
    const [emailSent, setEmailSent] = useState(false);
    const dispatch = useDispatch();
    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(getPasswordResetToken(email, setEmailSent));
    }

    return (
        <div className={`text-white flex mx-[37%] w-full my-auto`}>
            {
                loading
                    ? (<div className={`ml-[10%] items-center`}>
                        <Loader/>

                    </div>)
                    : (
                        <div className="flex ml-[50px] flex-col justify-center items-start gap-2">
                            <h1 className={` text-white text-3xl font-bold`}>
                                {
                                    !emailSent ? "Reset Your Password" : "Check Your Email "
                                }
                            </h1>
                            <p className="mt-1 w-[52%] text-richblack-300">
                                {
                                    !emailSent
                                        ? "Have no fear. We’ll email you instructions to reset your password.  If you dont have access to your email we can try account recovery"
                                        : `We have sent the reset email to ${email}`
                                }
                            </p>
                            <form onSubmit={handleOnSubmit}
                                  className={` flex flex-col justify-center w-full gap-4  mt-[10px] `}>
                                {
                                    !emailSent
                                    && (
                                        <label htmlFor="email" className={`flex w-[50%] flex-col gap-2 `}>
                                            <p className={` text-[0.875rem] text-richblack-300`}>
                                                Email address <sup
                                                className={`text-pink-200`}>*</sup></p>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Enter Your Email Address"
                                                className={`w-full h-[45px] bg-richblack-800 px-2 rounded-md border-b border-b-richblack-200`}
                                            />
                                        </label>
                                    )
                                }
                                <button className={`flex items-center`}>
                                    {
                                        !emailSent ? <div
                                                className={`bg-yellow-100 flex justify-center  items-center rounded-md w-[50%]  h-[45px]`}>Reset
                                                Password</div>
                                            : <div
                                                className={`bg-yellow-100 flex justify-center  items-center rounded-md hover:scale-95 w-[100%] mt-2  h-[45px]`}>Resend
                                                Email</div>
                                    }
                                </button>
                            </form>
                            <div className={`mt-2`}>
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

export default ForgotPassword;