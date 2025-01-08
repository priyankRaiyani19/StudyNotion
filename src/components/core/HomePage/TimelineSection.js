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

            <div className=" flex flex-row gap-14  mt-[100px] mb-[100px] ">

                {/* ? part 1 left box*/}

                <div className="flex flex-col w-[45%] gap-5 mr-auto mt-16">

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
                         className="rounded-md object-cover h-fit  shadow-[rgb(80,80,80)_21px_22px_10px_0px]"/>

                    <div className="absolute  bg-caribbeangreen-700 flex-row flex text-white uppercase py-7
                 left-[50%] translate-x-[-50%] bottom-[-10%]  ">

                        <div className="flex flex-row gap-5 items-center justify-center
                        border-r-4 border-caribbeangreen-300 px-5 ">
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