import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Loader from "../components/common/Loader";
import OTPInput from "react-otp-input";
import {Link, useNavigate} from "react-router-dom";
import {IoMdArrowBack} from "react-icons/io";
import {PiArrowClockwiseBold} from "react-icons/pi";
import {sendOtp, signUp} from "../services/oprations/authApi";
import colors from "tailwindcss/colors";


const VerifyEmail = () => {
    const {signupData, loading} = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    const [otp, setOtp] = React.useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (!signupData) {
            navigate("/signup");
        }
    }, []);

    const handleVerifyAndSignup = (e) => {
        e.preventDefault();
        // fetch data from signUpData which is in auth.slice and it's fetch from payload
        const {
            accountType,
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        } = signupData;

        // console.log(firstName, lastName, email, password);
        dispatch(signUp(
            accountType,
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            otp,
            navigate))
    }


    return (
        <div className={`text-white flex mx-[35%] w-full my-auto`}>
            {
                loading
                    ? (<div className={`ml-[10%] items-center`}>
                        <Loader/>
                    </div>)
                    : (

                        <div className={`flex ml-[50px] flex-col justify-center items-start gap-2`}>

                            <h1 className={` text-white text-3xl font-bold`}>
                                Verify Email
                            </h1>

                            <p className="mt-1 w-[85%] text-richblack-300">
                                A verification code has been sent to you. Enter the code below
                            </p>

                            <form onSubmit={handleVerifyAndSignup}
                                  className={`mt-[20px] flex flex-col w-full  gap-[10px] mx-auto`}>

                                <OTPInput
                                    inputStyle={{
                                        width: '50px',
                                        height: '50px',
                                        fontSize: '25px',
                                        border: '2px solid #ccc',
                                        background: "#2C333F",
                                        borderRadius: '10px',
                                        textAlign: 'center',
                                        marginLeft: '10px',
                                        marginRight: '20px',

                                    }}

                                    value={otp}
                                    onChange={setOtp}
                                    numInputs={6}
                                    placeholder={'******'}
                                    renderSeparator={<span>-</span>}
                                    renderInput={(props) => <input {...props}
                                    />}
                                />

                                <button type={"submit"} className={`bg-yellow-100 flex justify-center  items-center
                                 rounded-md w-[98%]  h-[45px]`}>
                                    Verify Email
                                </button>
                            </form>

                            <div className={`mt-5 w-full text-white flex justify-between`}>
                                <Link to="/login" className={`flex  items-center gap-2`}>
                                    <div><IoMdArrowBack/>
                                    </div>
                                    <p>
                                        Back To SignUp
                                    </p>
                                </Link>

                                <Link to="/verify-email" className={`flex  items-center gap-2`}>
                                    <button
                                        onClick={() => dispatch(sendOtp(signupData.email))}
                                        className={`flex  items-center  justify-center text-blue-200 gap-2`}
                                    >
                                        <PiArrowClockwiseBold/>
                                        Resend It
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )
            }
        </div>
    );
};

export default VerifyEmail;