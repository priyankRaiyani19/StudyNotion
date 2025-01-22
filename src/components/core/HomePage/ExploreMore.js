import React, { useEffect, useRef, useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import CourseCard from "./CourseCard";
import HighlightText from "./HighlightText";
import { IoIosArrowDown } from "react-icons/io";

const tabsName = ["Free", "New to coding", "Most popular", "Skills paths", "Career paths"];

const ExploreMore = () => {
    const [currentTab, setCurrentTab] = useState(tabsName[0]);
    const [courses, setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const dropdownRef = useRef(null);

    const setMyCards = (value) => {
        setCurrentTab(value);
        const result = HomePageExplore.filter((course) => course.tag === value);
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div>
            {/* Explore More Section */}
            <div className="text-4xl font-semibold md:text-center my-10">
                Unlock the <HighlightText text="Power of Code" />
                <p className="md:text-center text-richblack-300 text-lg font-semibold mt-1">
                    Learn to Build Anything You Can Imagine
                </p>
            </div>

            {/* Tabs Section */}

            {/* Dropdown for Mobile */}
            <div className="sm:block lg:hidden relative mb-10 md:ml-[250px]" ref={dropdownRef}>
                <button
                    className="w-[50%] bg-richblack-800 text-richblack-200 p-2 rounded-full
            font-medium flex items-center justify-around"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                    {currentTab}
                    <IoIosArrowDown
                        className={`w-5 h-5 transition-transform ${dropdownOpen ? "rotate-180" : "rotate-0"}`}
                    />
                </button>
                {dropdownOpen && (
                    <ul className="absolute mt-2 w-full bg-richblack-800 text-richblack-200 rounded-md shadow-lg z-10">
                        {tabsName.map((ele, index) => (
                            <li
                                key={index}
                                className={`px-4 py-2 cursor-pointer rounded-md ${
                                    currentTab === ele
                                        ? "bg-richblack-900 text-richblack-5"
                                        : "hover:bg-richblack-900 hover:text-richblack-5"
                                }`}
                                onClick={() => {
                                    setMyCards(ele);
                                    setDropdownOpen(false);
                                }}
                            >
                                {ele}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Horizontal Tabs for Larger Screens */}
            <div className="hidden lg:flex gap-5 -mt-5 mx-auto w-max bg-richblack-800 text-richblack-200 p-1
        rounded-full font-medium drop-shadow-[0_1.5px_rgba(255,255,255,0.25)]">
                {tabsName.map((ele, index) => (
                    <div
                        key={index}
                        className={`text-[16px] flex flex-row items-center gap-2 ${
                            currentTab === ele
                                ? "bg-richblack-900 text-richblack-5 font-medium"
                                : "text-richblack-200"
                        } px-7 py-[7px] rounded-full transition-all duration-200 cursor-pointer 
              hover:bg-richblack-900 hover:text-richblack-5`}
                        onClick={() => setMyCards(ele)}
                    >
                        {ele}
                    </div>
                ))}
            </div>

            {/* Spacer for Desktop */}
            <div className="hidden lg:block lg:h-[200px]"></div>

            {/* Cards Group */}
            <div
                className="lg:absolute gap-10 justify-center lg:gap-0 flex lg:justify-between flex-wrap w-full lg:bottom-[0]
        lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[50%] text-black lg:mb-0 mb-[-25%] lg:px-0 px-3"
            >
                {courses.map((ele, index) => (
                    <CourseCard
                        key={index}
                        cardData={ele}
                        currentCard={currentCard}
                        setCurrentCard={setCurrentCard}
                    />
                ))}
            </div>
        </div>
    );
};

export default ExploreMore;
