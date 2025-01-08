import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

const CtaButton = ({children, active, linkto}) => {
    return (<Link to={linkto}>
            {/* !******************************************************** */}
            <div className={`text-center text-[13px] px-6 py-3 rounded-md font-bold
             ${active ? "bg-yellow-100 text-black shadow-[rgba(120,120,120,120)_3px_3px_5px_0px]" : "bg-richblack-800 shadow-[rgba(120,120,120,120)_3px_3px_5px_0px]"}
             hover:scale-95 transition-all duration-200`}>
                {children}
            </div>
        </Link>);
};

export default CtaButton;