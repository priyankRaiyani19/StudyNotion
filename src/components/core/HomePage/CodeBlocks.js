import React from 'react';
// import HighlightText from "./HighlightText";
import CTAButton from "../../common/CTAButton";
import {FaArrowRight} from "react-icons/fa";
import {TypeAnimation} from "react-type-animation";


const CodeBlocks = (
    {position, heading, subHeading, timer, ctabtn1, ctabtn2, codeBlock, headingWidth, backgroundGradient, codeColor}
) => {
    return (
        <div className={`flex ${position} md:flex-row flex-col md:my-20 my-5 justify-between gap-10`}>

            {/* * Section 1: content part  */}

            <div className=" lg:w-[50%] sm:[100%]  flex flex-col gap-8 ">
                <div className={` ${headingWidth}`}>
                    {heading}
                </div>
                <div className="text-richblack-300 font-bold    ">
                    {subHeading}
                </div>

                {/* * ctabuttons */}
                <div className="flex gap-7 mt-7 ">

                    <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
                        <div className="flex gap-2 items-center">
                            {ctabtn1.btnText}
                            <FaArrowRight/>
                        </div>
                    </CTAButton>

                    <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
                        {ctabtn2.btnText}
                    </CTAButton>
                </div>
            </div>

            {/* * Section 2: code part  */}
            <div className={`flex bg-transparent h-fit flex-row lg:text-[15px]  text-[13px] lg:w-[500px]  w-[90%] py-4`}>
                {/*todo create gradient in background/}*/}
                {backgroundGradient}
                {/*    <div className={` flex flex-row bg-gradient-to-t rounded-[100%] from-blue-25 to-blue-25 h-64 text-[15px]  w-[500px] py-4 `}>*/}
                <div className="  text-center z-10 flex flex-col w-[10%]   text-richblack-400 font-inter">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>11</p>
                    <p className={`md:hidden`}>12</p>
                    <p className={`md:hidden`}>13</p>
                    <p className={`md:hidden`}>14</p>

                </div>

                <div
                    className={` w-[60%] md:w-[90%] bg-transparent z-10 flex  flex-col gap-2 font-mono font-bold ${codeColor} pr-2`}>
                    <TypeAnimation
                        sequence={[codeBlock, timer, ""]}
                        repeat={Infinity}
                        cursor={true}

                        style={{
                            whiteSpace: 'pre-line',
                            display: 'block',
                        }}
                        omitDeletionAnimation={true}
                    />


                </div>
            </div>


        </div>

        // </div>
    );
};

export default CodeBlocks;