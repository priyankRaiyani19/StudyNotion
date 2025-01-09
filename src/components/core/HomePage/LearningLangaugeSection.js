import React from 'react';
import HighlightText from "./HighlightText";
import knowYourProgress from "../../../assets/Images/Know_your_progress.png";
import compareWithOthers from "../../../assets/Images/Compare_with_others.png";
import planYourLessons from "../../../assets/Images/Plan_your_lessons.png";
import CTAButton from "./CTAButton";



const LearningLangaugeSection = () => {
    return (
        <div className="mt-[80px] mb-[50px] ">

            <div className={`flex flex-col gap-5  items-center pb-[100px] `}>
                <div className={`md:text-4xl text-3xl font-semibold lg:text-center`}>
                    Your swiss knife for
                    <HighlightText text={" learning any language"}/>
                </div>

                <div className={`md:text-center text-richblack-600 mx-auto font-medium md:w-8/12 w-full lg:pb-0 pb-[30px] `}>
                    Using spin making learning multiple languages easy. with 20+ languages realistic voice-over,
                    progress tracking, custom schedule and more.
                </div>


            <div className="flex md:flex-row flex-col items-center justify-center mt-5">

                <img src={knowYourProgress}
                     alt="knowYourProgress"
                     loading="lazy"
                     className={`object-contain lg:h-[100%] lg:w-[100%]  md:h-[50%px] md:w-[40%] md:mr-[-80px] md:mb-[30px]`}
                />

                <img src={compareWithOthers}
                     alt="compareWithOthers"
                     loading="lazy"
                     className={`object-contain  md:h-[50%px] md:w-[40%]  lg:h-[100%] lg:w-[100%] lg:mr-[-50px]  lg:ml-[-40px]`}/>

                <img src={planYourLessons}
                     alt="planYourLessons"
                     loading="lazy"
                     className={`object-contain lg:h-[100%] lg:w-[100%]  md:h-[50%px] md:w-[40%]  md:ml-[-105px] md:mb-[30px]`}/>
            </div>
            <div className={`w-fit mt-[75px]`}>
                <CTAButton active={true} linkto={"signup"}>
                    <div>
                        Learn more
                    </div>
                </CTAButton>
            </div>

        </div>
        </div>
    );
};

export default LearningLangaugeSection;