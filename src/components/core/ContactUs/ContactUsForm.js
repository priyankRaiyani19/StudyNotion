import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
// import {apiConnector} from "../../../services/apiConnector"
// import {contactusEndpoint} from "../../../services/apis"
import CountryCode from "../../../data/countrycode.json"

const ContactUsForm = () => {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitSuccessful}
    } = useForm()

    const submitContactForm = async (data) => {
        console.log("data of contact form", data);

        try {
            setLoading(true);
            // const res = await apiConnector(
            //     "POST",
            //     contactusEndpoint.CONTACT_US_API,
            //     data
            // )
            const res = {status: "OK"}
            console.log("response of contact form data ", res);
            setLoading(false)
        } catch (err) {
            console.log("error in contact form", err.message);
            setLoading(false)
        }
    }


    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                Email: "",
                FirstName: "",
                LastName: "",
                message: "",
                PhoneNo: "",
            }, [reset, isSubmitSuccessful]);
        }
    })
    return (
        <div>
            <form onSubmit={handleSubmit(submitContactForm)}>
                <div>

                    {/*name */}

                    <div className={`flex flex-row justify-center  gap-8 `}>
                        {/*first name*/}

                        <div className="flex flex-col gap-5">
                            <label htmlFor="FirstName">
                                First Name:
                            </label>
                            <input
                                type="text"
                                name="FirstName"
                                id="FirstName"
                                placeholder="Enter First Name"
                                // this is help by useForm HOOk*/
                                {...register("FirstName", {required: true})}
                                className={` className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5 border-b border-b-richblack-200`}
                            />
                            {
                                errors.firstName && (
                                    <span>
                                    Please enter your first name.
                                </span>
                                )
                            }
                        </div>

                        {/*last name*/}

                        <div className="flex flex-col gap-5">
                            <label htmlFor="LastName">
                                Last Name:
                            </label>
                            <input
                                type="text"
                                name="LastName"
                                id="LastName"
                                placeholder="Enter Last Name"
                                // this is help by useForm HOOk*/
                                {...register("LastName", {required: false})}
                                className={` className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5 border-b border-b-richblack-200`}
                            />
                        </div>

                    </div>

                    {/*Email*/}

                    <div className="flex flex-col gap-5 mt-[30px]">
                        <label htmlFor="LastName">
                            Email:
                        </label>
                        <input
                            type="email"
                            name="Email"
                            id="Email"
                            placeholder="Enter email"
                            // this is help by useForm HOOk*/
                            {...register("Email", {required: true})}
                            className={` className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5 border-b border-b-richblack-200`}
                        />
                        {
                            errors.Email && (
                                <span>
                                    Please enter your email.
                                </span>
                            )
                        }
                    </div>

                    {/*phone no*/}

                    <div className="flex flex-col gap-5 mt-[30px]">

                        <label htmlFor="PhoneNo" className="lable-style">
                            Phone Number
                        </label>

                        <div className="flex gap-5 ">
                            <div className="flex w-[81px] flex-col gap-2 text-richblack-5">
                                <select
                                    name="dropdown"
                                    id="dropdown"
                                    {...register("countrycode", {required: true})}
                                    className={`rounded-[0.5rem]  bg-richblack-800  
                                    text-richblack-5 p-[12px] border-b border-b-richblack-200`}

                                >
                                    {
                                        CountryCode.map((ele, index) => (
                                            <option key={index} value={ele.code}>
                                                {ele.code} - {ele.country}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="flex w-[calc(100%-90px)] flex-col gap-2">
                                <input
                                    type="number"
                                    name="PhoneNo"
                                    id="PhoneNo"
                                    placeholder="12345 67890"
                                    className={` className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5 border-b border-b-richblack-200`}
                                    {...register("PhoneNo", {
                                        required: {
                                            value: true,
                                            message: "Please enter your Phone Number.",
                                        },
                                        maxLength: {value: 12, message: "Invalid Phone Number"},
                                        minLength: {value: 10, message: "Invalid Phone Number"},
                                    })}
                                />
                            </div>
                        </div>
                        {errors.PhoneNo && (
                            <span className="-mt-1 text-[12px] text-yellow-100">
                                   {errors.PhoneNo.message}
                              </span>
                        )}
                    </div>

                    {/*message box*/}

                    <div>
                        <div className="flex flex-col gap-5 mt-[30px]">
                            <label htmlFor="message">
                                Message:
                            </label>

                            <textarea
                                name="message"
                                id="message"
                                rows="7"
                                cols="30"
                                placeholder="Enter your message here"
                                // this is help by useForm HOOk*/
                                {...register("message", {required: true})}
                                className={` className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5 border-b border-b-richblack-200`}
                            />
                            {
                                errors.message && (
                                    <span>
                                    Please enter your message  .
                                </span>
                                )
                            }
                        </div>
                    </div>

                    {/*submit button*/}

                    <button
                        type={"submit"}
                        className={`flex flex-col gap-5 mt-[30px] text-[16px] mx-auto 
                        items-center py-3 rounded-md bg-yellow-100 text-black w-full `}
                    >
                        Send Message
                    </button>
                </div>


            </form>
        </div>
    );
};

export default ContactUsForm;