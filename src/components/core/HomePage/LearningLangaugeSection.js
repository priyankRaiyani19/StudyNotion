import React from 'react';
import HighlightText from "./HighlightText";
import knowYourProgress from "../../../assets/Images/Know_your_progress.png";
import compareWithOthers from "../../../assets/Images/Compare_with_others.png";
import planYourLessons from "../../../assets/Images/Plan_your_lessons.png";
import CTAButton from "./CTAButton";



const LearningLangaugeSection = () => {
    return (
        <div className="mt-[80px] mb-[100px]">

            <div className={`flex flex-col gap-5  items-center`}>
                <div className={`text-4xl font-semibold text-center`}>
                    Your swiss knife for
                    <HighlightText text={" learning any language"}/>
                </div>

                <div className={`text-center text-richblack-600 mx-auto font-medium w-8/12 `}>
                    Using spin making learning multiple languages easy. with 20+ languages realistic voice-over,
                    progress tracking, custom schedule and more.
                </div>


            <div className="flex flex-row items-center justify-center mt-5">

                <img src={knowYourProgress}
                     alt="knowYourProgress"
                     loading="lazy"
                     className={`object-contain mr-[-80px] mb-[30px]`}
                />

                <img src={compareWithOthers}
                     alt="compareWithOthers"
                     loading="lazy"
                     className={`object-contain mr-[-50px] ml-[-40px]`}/>

                <img src={planYourLessons}
                     alt="planYourLessons"
                     loading="lazy"
                     className={`object-contain ml-[-105px] mb-[30px]`}/>
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