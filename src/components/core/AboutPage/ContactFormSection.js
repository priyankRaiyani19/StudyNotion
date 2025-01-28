import React from 'react';
import ContactUsForm from "../ContactUs/ContactUsForm";

const ContactFormSection = () => {
    return (
        <div className={`mx-auto flex flex-col items-center justify-center `}>
            <h1 className={`text-4xl font-bold  mb-4`}>
                Get in Touch
            </h1>
            <p className={`text-richblack-200`}>
                We’d love to here for you, Please fill out this form.
            </p>
            <div className={`mt-[70px]`}>
                <ContactUsForm />
            </div>
        </div>
    );
};

export default ContactFormSection;