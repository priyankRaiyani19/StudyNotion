import React from 'react';
import Logo1 from '../../../assets/TimeLineLogo/Logo1.svg'
import Logo2 from '../../../assets/TimeLineLogo/Logo2.svg'
import Logo3 from '../../../assets/TimeLineLogo/Logo3.svg'
import Logo4 from '../../../assets/TimeLineLogo/Logo4.svg'
import timeLineImage from '../../../assets/Images/TimelineImage.png'


const timeLine = [
    {
        Logo: Logo1,
        heading: "LeaderShip",
        description: "Fully commited to success company",
    },
    {
        Logo: Logo2,
        heading: "Responsibility",
        description: "Students will always be our top priority",
    },
    {
        Logo: Logo3,
        heading: "Flexibility",
        description: "The ability to switch is an important skills",
    },
    {
        Logo: Logo4,
        heading: "Solve the problem",
        description: "Code your way to a solution",
    }
]


const TimelineSection = () => {
    return (
        <div>

            <div className=" flex md:flex-row flex-col gap-14  md:mt-[100px] mt-[0px] md:mb-[100px] ">

                {/* ? part 1 left box*/}

                <div className="flex flex-col md:w-[45%] sm:w-[100%] gap-5 mr-auto mt-16">

                    {
                        timeLine.map((element, index) => {
                            return (
                                <div className="flex flex-row gap-10" key={index}>

                                    <div className="flex  w-[50px] h-[50px] rounded-[50%] bg-white items-center  justify-center
                                          shadow-[rgb(120,120,120)_1px_0px_10px_0px] ">
                                        <img src={element.Logo} alt="not found"/>
                                    </div>

                                    <div className="flex  flex-col g" key={index}>

                                        <h2 className=" font-semibold text-[18px]">
                                            {element.heading}
                                        </h2>

                                        <p className="text-base ">
                                            {element.description}
                                        </p>

                                    </div>
                                </div>
                            );
                        })
                    }
                </div>

                {/*  ? part 2 :right   */}

                <div className="relative shadow-blue-200 ">

                    <img src={timeLineImage}
                         alt="not found"
                         className="rounded-md md:object-cover object-none md:h-fit h-[100%] w-[100%]  shadow-[rgb(80,80,80)_21px_22px_10px_0px]"/>

                    <div className="absolute  bg-caribbeangreen-700 md:flex-row gap-[10px] flex-col flex text-white uppercase
                     md:py-7 py-[15px] md:left-[50%] left-[70%] translate-x-[-50%] md:bottom-[-10%] bottom-[3%]  ">

                        <div className="flex md:mt-0 mt-[10px] flex-row gap-5 items-center justify-center
                        md:border-r-4 md:border-b-0 border-b-4 md:pb-0 pb-2  border-caribbeangreen-300 md:px-5 px-7 ">
                            <p className="text-3xl font-bold">
                                10
                            </p>
                            <p className="text-caribbeangreen-300 text-sm ">
                                Years Of Experience
                            </p>
                        </div>

                        <div className="flex flex-row gap-5 items-center justify-center px-5">

                            <p className="text-3xl font-bold">
                                250
                            </p>
                            <p className="text-caribbeangreen-300 text-sm ">
                                Type Of Courses
                            </p>

                        </div>


                        <div></div>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default TimelineSection;