import React from 'react';
import ContactUsForm from "../ContactUs/ContactUsForm";

const ContactFormSection = () => {
    return (
        <div className={`mx-auto flex flex-col items-center justify-center gap-4`}>
            <h1>
                Get In Touch
            </h1>
            <p>
                We’d love to here for you, Please fill out this form.
            </p>
            <div>
                <ContactUsForm />
            </div>
        </div>
    );
};

export default ContactFormSection;