import React from 'react';
// import HighlightText from "./HighlightText";
import CTAButton from "./CTAButton";
import {FaArrowRight} from "react-icons/fa";
import {TypeAnimation} from "react-type-animation";


const CodeBlocks = (
    {position, heading, subHeading, ctabtn1, ctabtn2, codeBlock, backgroundGradient, codeColor}
) => {
    return (
        <div className={`flex ${position} lg:flex-row flex-col my-20 justify-between gap-10`}>

            {/* * Section 1: content part  */}

            <div className=" lg:w-[50%] sm:[100%]  flex flex-col gap-8 ">

                {heading}
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
            <div className={` flex  h-fit flex-row text-[15px] lg:w-[500px]  w-[100%] py-4`}>
            {/*todo create gradient in background/}*/}

                <div className="text-center flex flex-col w-[10%] text-richblack-400 font-inter">
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
                </div>

                <div className={`w-[90%] flex  flex-col gap-2 font-mono font-bold ${codeColor} pr-2`}>
                    <TypeAnimation
                    sequence={[codeBlock,2500,""]}
                    repeat={Infinity}
                    cursor={true}

                    style={{
                        whiteSpace:'pre-line',
                        display:'block',
                    }}
                        omitDeletionAnimation={true}
                    />


                </div>



            </div>

        </div>
    );
};

export default CodeBlocks;