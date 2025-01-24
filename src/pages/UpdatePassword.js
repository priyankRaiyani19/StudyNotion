import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Loader from "../components/common/Loader";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {resetPassword} from "../services/oprations/authApi";
import {Link, useLocation} from "react-router-dom";
import login from "./Login";
import {IoMdArrowBack} from "react-icons/io";

const UpdatePassword = () => {

    const {loading} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
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
        dispatch(resetPassword(password, confirmPassword, token));
    }

    return (
        <div>
            {
                loading ?
                    (<div className={`ml-[10%] items-center`}>
                        <Loader/>
                    </div>)
                    : (

                        <div>

                            <h1>
                                Choose New Password
                            </h1>

                            <p>
                                Almost done. Enter your new password and you are all set.
                            </p>

                            <form onSubmit={handleOnSubmit}>

                                {/*Password*/}
                                <label htmlFor="newPassword">
                                    <p>
                                        New password:
                                    </p>
                                    <input
                                        required
                                        type={showPassword ? "text" : "password"}
                                        name="newpassword"
                                        value={password}
                                        onChange={handleOnChange}
                                        placeholder="Enter Password"
                                        style={{
                                            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                        }}
                                        className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
                                    />
                                    <span
                                        onClick={() => setShowPassword((prev) => !prev)}
                                        className="absolute right-3 top-[38px] z-[10] cursor-pointer"
                                    >
          {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>
          ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF"/>
          )}
                                </span>
                                </label>

                                {/*confirm Password*/}
                                <label htmlFor="confirmPassword">
                                    <p>
                                        Confirm Password:
                                    </p>
                                    <input
                                        required
                                        type={showConfirmPassword ? "text" : "password"}
                                        name="confirmpassword"
                                        value={confirmPassword}
                                        onChange={handleOnChange}
                                        placeholder="Enter Password"
                                        style={{
                                            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                        }}
                                        className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
                                    />
                                    <span
                                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                                        className="absolute right-3 top-[38px] z-[10] cursor-pointer">
          {showConfirmPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>
          ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF"/>
          )}
                                </span>
                                </label>

                                <button type={"submit"}>
                                    Reset Password
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

export default UpdatePassword;