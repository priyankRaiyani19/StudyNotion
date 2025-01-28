import React from 'react'
import Instructor from "../../../assets/Images/Instructor.png"
import HighlightText from './HighlightText'
import CTAButton from "../../common/CTAButton"
import { FaArrowRight } from 'react-icons/fa'

const InstructorSection = () => {
    return (
        <div className='mt-16 '>
            <div className='flex md:flex-row flex-col gap-20 items-center'>

                <div className='lg:w-[50%] w-[100%] shadow-[rgba(255,255,255,1)_-20px_-20px_10px_0px]'>
                    <img
                        src={Instructor}
                        alt="not found"
                        className='shadow-white'
                    />
                </div>

                <div className=' lg:w-[50%] sm:w-[100%] flex flex-col lg:gap-10 gap-9'>
                    <div className='text-4xl font-semobold lg:w-[50%] sm:w-[100%]'>
                        Become an
                        <HighlightText text={"Instructor"} />
                    </div>

                    <p className='font-medium text-[16px] md:w-[80%] w-[100%] text-richblack-300'>
                        Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
                    </p>

                    <div className='w-fit'>
                        <CTAButton active={true} linkto={"/signup"}>
                            <div className='flex flex-row gap-2 items-center'>
                                Start Learning Today
                                <FaArrowRight />
                            </div>
                        </CTAButton>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default InstructorSection
