import React from 'react';
import HighlightText from "../HomePage/HighlightText";

const Quote = () => {
    return (
        <div>
            <blockquote>
                We are passionate about revolutionizing the way we learn. Our innovative platform
                <HighlightText text={"combines technology"}/>

                <span className={`text-red`}>
                {" "}
                    expertise
            </span>
                <span>
                {" "}
                    and community to create an
            </span>
                <span className="text-red">
                {" "}
                    unparalleled educational experience
            </span>
                .
            </blockquote>
        </div>
    );
};

export default Quote;