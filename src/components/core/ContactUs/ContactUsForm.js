import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";

const ContactUsForm = () => {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitSuccessful}
    } = useForm()

    const submitContactForm = async (data) => {


    }


    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                email: "",
                firstname: "",
                lastname: "",
                message: "",
                phoneNo: "",
            }, [reset, isSubmitSuccessful]);

        }
    })

    return (
        <div>
            <form onSubmit={handleSubmit(submitContactForm)}>
                <div className={`flex flex-row justify-center  gap-8 `}>
                    {/*first name*/}

                    <div className="flex flex-col">
                        <label htmlFor="FirstName">
                            First Name:
                        </label>
                        <input
                            type="text"
                            name ="FirstName"
                            id="FirstName"
                            placeholder="Enter First Name"
                            // this is help by useForm HOOk*/
                            {...register("FirstName", { required: true })}
                         />
                        {
                            errors.firstName && (
                                <span >
                                    Please enter first name.
                                </span>
                            )
                        }
                    </div>

                    {/*last name*/}

                    <div className="flex flex-col">
                        <label htmlFor="LastName">
                            Last Name:
                        </label>
                        <input
                            type="text"
                            name ="LastName"
                            id="LastName"
                            placeholder="Enter First Name"
                            // this is help by useForm HOOk*/
                            {...register("LastName", {required: false })}
                         />
                    </div>




                </div>

            </form>

        </div>
    );
};

export default ContactUsForm;