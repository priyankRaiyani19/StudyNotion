import React, {useState} from 'react'
import {FaArrowRight} from "react-icons/fa"
import {Link} from "react-router-dom"
import HighlightText from '../components/core/HomePage/HighlightText'
import CTAButton from "../components/core/HomePage/CTAButton"
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import TimelineSection from '../components/core/HomePage/TimelineSection'
import LearningLanguageSection from '../components/core/HomePage/LearningLangaugeSection'
import InstructorSection from '../components/core/HomePage/InstructorSection'
import Footer from '../components/common/Footer'
import ExploreMore from '../components/core/HomePage/ExploreMore'

const Home = () => {

    return (
        <div>
            {/*Section1  */}
            <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center
                    text-white justify-between'>

                <div className='ml-0 md:ml-auto group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold
                              text-richblack-200 transition-all duration-200 hover:scale-95 w-fit
                                shadow-[rgba(120,120,120,120)_1.5px_1.5px_2px_0px]'>
                    <Link to={"/signup"}>
                        <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                                        transition-all duration-200 group-hover:bg-richblack-900'>
                            <p>Become an Instructor</p>
                            <FaArrowRight/>
                        </div>
                    </Link>
                </div>

                <div className='lg:text-center text-4xl font-semibold mt-7'>
                    Empower Your Future with
                    <HighlightText text={"Coding Skills"}/>
                </div>

                <div className=' mt-4 md:w-[90%] w-[100%] md:text-center text-lg font-bold text-richblack-300'>
                    With our online coding courses, you can learn at your own pace, from anywhere in the world, and get
                    access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback
                    from instructors.
                </div>

                <div className='flex flex-row  gap-7 mt-8'>
                    <CTAButton active={true} linkto={"/signup"}>
                        Learn More
                    </CTAButton>

                    <CTAButton active={false} linkto={"/login"}>
                        Book a Demo
                    </CTAButton>
                </div>

                <div
                    className='md:mx-3 md:my-12 md:mt-12 mt-[50px] mb-10 shadow-[rgba(255,255,255,255)_20px_20px_5px_0px]'>
                    <video
                        muted
                        loop
                        autoPlay
                    >
                        <source src={Banner} type="video/mp4"/>
                    </video>
                </div>

                {/* Code Section 1 */}

                <div>
                    <CodeBlocks
                        position={"md:flex-row"}
                        heading={<div className='text-4xl font-semibold'>
                            Unlock Your
                            <HighlightText text={"coding potential"}/>
                            with our online courses
                        </div>}
                        subHeading={"Our courses are designed and taught by industry experts who have years of experience " +
                            "in coding and are passionate about sharing their knowledge with you."}
                        ctabtn1={{
                            btnText: "try it yourself", linkto: "/signup", active: true,
                        }}
                        ctabtn2={{
                            btnText: "learn more", linkto: "/login", active: false,
                        }}
                        codeBlock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</ \n title><linkrel="stylesheet"href="styles.css">\n/head>\n body>\nh1><ahref="/">Header</a> \n /h1>\n nav><ahref="one/">One</a><ahref="two/">Two</\n a><ahref="three/">Three</a>\n nav>`}
                        codeColor={"text-yellow-300"}
                        backgroundGradient={<div className="codeblock1 absolute"></div>}
                    />
                </div>

                {/* Code Section 2 */}
                <div>
                    <CodeBlocks
                        position={"md:flex-row-reverse"}
                        heading={<div className='text-4xl font-semibold'>
                            Start
                            <HighlightText text={"coding in seconds"}/>
                        </div>}
                        subHeading={"Go ahead, give it a try. Our hands-on learning environment means " + "you'll be" +
                            " writing real code from your very first lesson"}
                        ctabtn1={{
                            btnText: "try it yourself", linkto: "/signup", active: true,
                        }}
                        ctabtn2={{
                            btnText: "learn more", linkto: "/login", active: false,
                        }}
                        codeBlock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</ \n title><linkrel="stylesheet"href="styles.css">\n/head>\n body>\nh1><ahref="/">Header</a> \n /h1>\n nav><ahref="one/">One</a><ahref="two/">Two</\n a><ahref="three/">Three</a>\n nav>`}
                        codeColor={"text-blue-200"}
                        backgroundGradient={<div className="codeblock2 absolute"></div>}
                        headingWidth={"w-[50%]"}
                    />
                </div>

                <ExploreMore/>
            </div>

            {/* ? Section 2  */}

            <div className='bg-pure-greys-5 text-richblack-700'>
                <div className='homepage_bg h-[310px]'>

                    <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
                        <div className='h-[10px]'></div>
                        <div className='flex flex-row gap-7 text-white '>
                            <CTAButton active={true} linkto={"/signup"}>
                                <div className='flex items-center gap-3'>
                                    Explore Full Catalog
                                    <FaArrowRight/>
                                </div>

                            </CTAButton>
                            <CTAButton active={false} linkto={"/signup"}>
                                <div>
                                    Learn more
                                </div>
                            </CTAButton>
                        </div>

                    </div>


                </div>

                <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>

                    <div className='flex md:flex-row flex-col gap-5 lg:mb-10 mt-[95px]'>
                        <div className='text-4xl font-semibold lg:w-[45%] sm-[100%]'>
                            Get the Skills you need for a
                            <HighlightText text={"Job that is in demand"}/>
                        </div>

                        <div className='flex flex-col gap-10 lg:w-[40%] w-[100%] items-start'>
                            <div className='text-[16px]'>
                                The modern StudyNotion is the dictates its own terms. Today, to be a competitive
                                specialist requires more than professional skills.
                            </div>
                            <CTAButton active={true} linkto={"/signup"}>
                                <div>
                                    Learn more
                                </div>
                            </CTAButton>
                        </div>
                    </div>
                    <TimelineSection/>
                    <LearningLanguageSection/>
                </div>
            </div>


            {/*Section 3 */}

            <div
                className='w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter
                        bg-richblack-900 text-white'>

                <InstructorSection/>

                <h2 className='text-center text-4xl font-semobold mt-10'>review from Other Learners</h2>

                {/* Review Slider here */}

            </div>


            {/*Footer */}
            <Footer/>

        </div>)
}

export default Home
