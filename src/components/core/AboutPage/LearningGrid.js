import React from 'react';
import HighlightText from "../HomePage/HighlightText";
import CTAButton from "../../common/CTAButton";

const LearningGridArray = [
    {
        order: -1,
        heading: "World-Class Learning for",
        highlightText: "Anyone, Anywhere",
        description:
            "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
        BtnText: "Learn More",
        BtnLink: "/",
    },
    {
        order: 1,
        heading: "Curriculum Based on Industry Needs",
        description:
            "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs."
    },
    {
        order: 2,
        heading: "Our Learning Methods",
        description:
            "The learning process uses the namely online and offline."
    },
    {
        order: 3,
        heading: "Certification",
        description:
            "You will get a certificate that can be used as a certification during job hunting."
    },
    {
        order: 4,
        heading: `Rating "Auto-grading"`,
        description:
            "You will immediately get feedback during the learning process without having to wait for an answer or response from the mentor."
    },
    {
        order: 5,
        heading: "Ready to Work",
        description:
            "Connected with over 150+ hiring partners, you will have the opportunity to find a job after graduating from our program."
    },
];


const LearningGrid = () => {
    return (
        <div className={`grid mx-auto lg:grid-cols-4  grid-cols-1 mb-10`}>
            {
                LearningGridArray.map((card, index) => (
                    <div key={index} className={`${index === 0 && "lg:col-span-2"}
                    ${
                        card.order % 2 === 1 ? "bg-richblack-700" : "bg-richblack-800 "
                    }
                    ${
                        card.order === -1 && "bg-transparent"
                    }
                    
                 ${card.order === 3 && "lg:col-start-2"}
                 `}>
                        {
                            card.order < 0
                                ? (
                                    <div className={`flex flex-col gap-8 p-[40px]`}>
                                        <div className={` lg:text-3xl text-[1.685rem]`}>
                                            {card.heading}
                                            <br/>
                                            <HighlightText text={card.highlightText}/>
                                        </div>
                                        <p className={`text-[15px] lg:w-[70%] text-richblack-200`}>
                                            {card.description}
                                        </p>
                                        <div className={`lg:w-[25%]`}>
                                            <CTAButton linkto={card.BtnLink} active={true}>
                                                Learn More
                                            </CTAButton>
                                        </div>
                                        <div>

                                        </div>
                                    </div>


                                )
                                : (<div className={` flex flex-col gap-8 p-[40px] h-[325px] w-[300px]`}>
                                    <h1 className={`text-white text-[20px] font-bold w-[100%]`}>
                                        {card.heading}
                                    </h1>
                                    <p className={`text-richblack-200 text-[15px] w-[225px]`}>
                                        {card.description}
                                    </p>
                                </div>)
                        }
                    </div>
                ))
            }
        </div>
    );
};

export default LearningGrid;