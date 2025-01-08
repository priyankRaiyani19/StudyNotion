import React from 'react'
import {FaArrowRight} from "react-icons/fa"
import {Link} from "react-router-dom"
import HighlightText from '../components/core/HomePage/HighlightText'
import CTAButton from "../components/core/HomePage/CTAButton"
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import CtaButton from "../components/core/HomePage/CTAButton";

const Home = () => {
    return (
        <div>
            {/* * Section1  */}
            <div className='relative mx-auto flex flex-col w-11/12
            max-w-maxContent items-center text-white justify-between'>

                <Link to={"/signup"}>
                    <div className=' group mt-16 p-1 mx-auto rounded-full
             bg-richblack-800 font-bold text-richblack-200
            transition-all duration-200 hover:scale-95 w-fit shadow-[rgb(255,255,255)_0.5px_0.5px_0px_0px]'>
                        <div className='flex flex-row items-center gap-2
                 rounded-full px-10 py-[5px]
                transition-all duration-200 group-hover:bg-richblack-900'>
                            <p>Become an Instructor</p>
                            <FaArrowRight/>
                        </div>
                    </div>

                </Link>

                <div className='text-center text-4xl font-semibold mt-7'>
                    Empower Your Future with
                    <HighlightText text={"Coding Skills"}/>
                </div>

                <div className=' mt-4 w-[90%] text-center text-lg font-bold
        text-richblack-300'>
                    With our online coding courses, you can learn at your own pace, from anywhere in the world, and get
                    access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback
                    from instructors.
                </div>

                <div className='flex flex-row gap-7 mt-8'>
                    <CTAButton active={true} linkto={"/signup"}>
                        Learn More
                    </CTAButton>

                    <CTAButton active={false} linkto={"/login"}>
                        Book a Demo
                    </CTAButton>
                </div>

                <div className='mx-3 my-12 shadow-[rgb(255,255,255)_20px_20px_3px_0px]'>
                    <video
                        muted
                        loop
                        autoPlay
                        className='shadow-[-10px_-10px_50px_rgba(8,_112,_184,_0.7)'>
                        <source src={Banner} type="video/mp4"/>
                    </video>
                </div>

                {/* Code Section 1 */}
                <div>
                    <CodeBlocks
                        position={"lg:flex-row"}
                        heading={
                            <div className='text-4xl font-semibold'>
                                Unlock Your
                                <HighlightText text={"coding potential"}/>
                                with our online courses
                            </div>
                        }
                        subHeading={
                            "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                        }
                        ctabtn1={
                            {
                                btnText: "try it yourself",
                                linkto: "/signup",
                                active: true,
                            }
                        }
                        ctabtn2={
                            {
                                btnText: "learn more",
                                linkto: "/login",
                                active: false,
                            }
                        }

                        codeBlock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</ \n title><linkrel="stylesheet"href="styles.css">\n/head>\n body>\nh1><ahref="/">Header</a> \n /h1>\n nav><ahref="one/">One</a><ahref="two/">Two</\n a><ahref="three/">Three</a>\n nav>`}
                        codeColor={"text-yellow-200"}
                        backgroundGradient={"yellow-200"}
                    />
                </div>

                {/* Code Section 2 */}
                <div>
                    <CodeBlocks
                        position={"lg:flex-row-reverse"}
                        heading={
                            <div className='text-4xl font-semibold'>
                                Start
                                <HighlightText text={"coding in seconds"}/>
                            </div>
                        }
                        subHeading={
                            "Go ahead, give it a try. Our hands-on learning environment means " +
                            "you'll be writing real code from your very first lesson"}
                        ctabtn1={
                            {
                                btnText: "try it yourself",
                                linkto: "/signup",
                                active: true,
                            }
                        }
                        ctabtn2={
                            {
                                btnText: "learn more",
                                linkto: "/login",
                                active: false,
                            }
                        }

                        codeBlock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</ \n title><linkrel="stylesheet"href="styles.css">\n/head>\n body>\nh1><ahref="/">Header</a> \n /h1>\n nav><ahref="one/">One</a><ahref="two/">Two</\n a><ahref="three/">Three</a>\n nav>`}
                        codeColor={"text-blue-100"}
                    />
                </div>

            </div>

            {/* * Section 2  */}

            <div className="bg-pure-greys-5 text-richblack-700">

                {/* ? part 1*/}

                <div className="homepage_bg h-[310px] ">

                    {/*  ! if we can sentence uncomment which is comment thats working same */}
                    {/*<div className="w-11/12 max-w-maxContent  flex items-center justify-center gap-5 mx-auto ">*/}
                    <div
                        className="w-11/12 max-w-maxContent  flex flex-col items-center  justify-between gap-5 mx-auto ">
                        <div className="h-[150px]"></div>
                        <div className="flex flex-row gap-7 text-white  ">
                            {/*<div className="flex flex-row gap-7 text-white mt-[150px] ">*/}
                            <CTAButton active={true} linkto={"/signup"}>
                                {/*<div className="flex flex-row gap-2  items-center justify-center "  >*/}
                                <div className="flex flex-row gap-2  items-center ">
                                    Explore Full Catalog
                                    <FaArrowRight/>
                                </div>
                            </CTAButton>
                            <CTAButton active={false} linkto={"/signup"}>
                                <div>
                                    Learn More
                                </div>
                            </CTAButton>

                        </div>

                    </div>

                </div>

                {/* ?  part 2*/}

                <div
                    className="mx-auto w-11/12 mt-[125px] max-w-maxContent  flex flex-col items-center   justify-between">

                    <div className="flex flex-row gap-7 w-full">

                        <div className="w-[45%] text-4xl font-semibold">
                            Get the skills you need for a
                            <HighlightText text={"job that is in demand."}></HighlightText>
                        </div>

                        <div className="w-[45%] ml-auto flex flex-col items-start  gap-10 justify-between">

                            <div className="font-semibold">
                                The modern StudyNotion is the dictates its own terms. Today, to be a competitive
                                specialist requires more than professional skills.
                            </div>
                            <div>
                                <CtaButton active={true} linkto={"/signup"}>Learn More</CtaButton>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/*Section 3 */}


            {/*Footer */}


        </div>
    )
}

export default Home
