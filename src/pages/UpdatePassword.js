import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Loader from "../components/common/Loader";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {resetPassword} from "../services/oprations/authApi";

const UpdatePassword = () => {

    const {loading} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    });
    const {password,confirmPassword} = formData;

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    }
    const handleOnSubmit =(e)=>{
        e.preventDefault();
        dispatch(resetPassword(password, confirmPassword));
    }

    return (
        <div>
            {
                loading ? <Loader/> : (

                    <div>
                        <h1>
                            Choose New Password
                        </h1>
                        <p>
                            Almost done. Enter your new password and youre all set.
                        </p>

                        <form onSubmit={handleOnSubmit}>
                            <label htmlFor="newPassword">
                                <p>
                                    New password:
                                </p>
                                <input
                                    required
                                    type={showPassword ? "text" : "password"}
                                    name="newpassword"
                                    value={newpassword}
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
                                    className="absolute right-3 top-[38px] z-[10] cursor-pointer"
                                >
          {showConfirmPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>
          ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF"/>
          )}
                                </span>
                            </label>
                        </form>
                    </div>
                )
            }
        </div>
    );
};

export default UpdatePassword;