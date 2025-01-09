import React from 'react'
import {HomePageExplore} from "../../../data/homepage-explore"
import HighlightText from './HighlightText';
import {useState} from 'react';
import CourseCard from './CourseCard';

const tabsName = [

    "Free", "New To Coding", "Most Popular", "Skill Path", "Carrer Path"]

const ExploreMore = () => {

    const [currentTab, setCurrentTab] = useState(tabsName[0]);
    const [courses, setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);


    const setMyCard = (value) => {
        setCurrentTab(value);
        const result = HomePageExplore.filter((course) => (course.tag === value));
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);
    }

    return (<div className="   ">

        {/*? heading*/}

        <div className="lg:text-center  text-4xl font-semibold mt-7">
            Unlock The
            <HighlightText text={"Power Of Code"}/>
        </div>

        <div className=' mt-3 md:w-[90%] w-[100%] md:text-center text-lg  text-richblack-300'>

            Learn to Build Anything You Can Imagine
        </div>

        {/*  ? Tab portion  */}

        <div className=" flex  flex-row rounded-full  bg-richblack-700 mt-8 px-1 py-1 ">

            {tabsName.map((ele, index) => {
                return (<div key={index}
                             className={`text-[16px] flex flex-row items-center gap-3  
                             ${currentTab === ele ? "bg-richblack-900 text-richblack-5 font-medium"
                                 : " bg-richblack-700 text-richblack-100 font-thin"} 
                            rounded-full duration-200 cursor-pointer hover:bg-richblack-900 px-7  py-2`}
                             onClick={() => setMyCard(ele)}

                >
                    {ele}
                </div>)
            })

            }

        </div>

        <div className={`md:h-[150px] `}></div>

        {/* ? card component */}

        {/* * group of cards*/}

        <div className={`absolute flex flex-row justify-between w-full gap-10`}>
            {

                courses.map((ele, index) => {

                    <CourseCard
                        key={index}
                        cardData={ele}
                        currentCard={currentCard}
                        currentCard={setCurrentCard}/>
                })
            }
        </div>
    </div>)
}


export default ExploreMore
