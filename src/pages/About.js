import React from 'react';
import HighlightText from "../components/core/HomePage/HighlightText";
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import Quote from "../components/core/AboutPage/Quote";
import FoundingStory from "../assets/Images/FoundingStory.png";
import StatsComponents from "../components/core/AboutPage/StatsComponents";
import LearningGrid from "../components/core/AboutPage/LearningGrid";
import ContactFormSection from "../components/core/AboutPage/ContactFormSection";


const About = () => {
    return (
        <div className={`mt-[100px] text-white mx-auto`}>

            {/*section 1: Brighter future */}

            <section
                className={`flex flex-col max-w-maxContent items-center justify-between w-11/12 mx-auto gap-[40px]`}>
                <div className={`flex flex-col items-center justify-between gap-5 w-[100%]`}>
                    <header className={`lg:text-[31px] text-[25px] flex flex-col  lg:px-0 px-4 lg:place-items-center`}>
                        Driving Innovation in Online Education for a <HighlightText text={"Brighter Future"}/>
                    </header>
                    <p className={`lg:text-lg text-[16px]  mx-auto flex flex-col items-center justify-between`}>
                        Studynotion is at the forefront of driving innovation in online education.
                        We're passionate about creating a <br/>brighter future by offering cutting-edge courses,
                        leveraging emerging technologies, and nurturing a <br/> vibrant learning community.
                    </p>

                </div>
                <div className={`flex lg:flex-row flex-col gap-[25px] items-center justify-between`}>
                    <img src={BannerImage1} alt="not found"/>
                    <img src={BannerImage2} alt="not found"/>
                    <img src={BannerImage3} alt="not found"/>
                </div>

            </section>

            {/*section 2 :quote  */}

            <section>
                <div
                    className={`mt-[100px]  max-w-maxContent flex flex-col items-center justify-between w-11/12 mx-auto gap-[40px]`}>
                    <Quote/>
                </div>
            </section>


            {/*section 3 : Founding story div */}

            <section>
                <div
                    className={`flex flex-col  max-w-maxContent items-center justify-between w-11/12 mx-auto gap-[40px]`}>
                    {/* Founding story div */}

                    <div className="flex flex-col lg:flex-row mt-[100px] lg:gap-0 gap-8 items-center justify-between">
                        {/* founding story left box*/}
                        <div className={`lg:w-[45%] w-[100%] flex flex-col gap-[25px]`}>
                            <h1 className={`text-[35px]`}>
                                Our Founding Story
                            </h1>

                            <p>
                                Our e-learning platform was born out of a shared vision and passion for transforming
                                education. It all began with a group of educators, technologists, and lifelong learners
                                who recognized the need for accessible, flexible, and high-quality learning
                                opportunities in a rapidly evolving digital world.
                            </p>
                            <p>
                                As experienced educators ourselves, we witnessed firsthand the limitations and
                                challenges of traditional education systems. We believed that education should not be
                                confined to the walls of a classroom or restricted by geographical boundaries. We
                                envisioned a platform that could bridge these gaps and empower individuals from all
                                walks of life to unlock their full potential.
                            </p>
                        </div>
                        {/* founding story right box*/}
                        <div>
                            <img src={FoundingStory} alt="not found"/>
                        </div>
                    </div>

                    {/*our vision and mission div*/}

                    <div className="flex lg:flex-row flex-col lg:gap-0 gap-8 items-center justify-between lg:mt-[100px] mt-[100px]">

                        {/*our vision div*/}

                        <div className={`lg:w-[45%] w-[100%] flex flex-col gap-[25px]`}>
                            <h1 className={`text-[35px] text-red`}>
                                Our Vision
                            </h1>
                            <p>
                                With this vision in mind, we set out on a journey to create an e-learning platform that
                                would revolutionize the way people learn. Our team of dedicated experts worked
                                tirelessly to develop a robust and intuitive platform that combines cutting-edge
                                technology with engaging content, fostering a dynamic and interactive learning
                                experience.
                            </p>
                        </div>

                        {/*our mission div*/}

                        <div className="flex lg:w-[45%] flex-col w-[100%] justify-between gap-[25px]">
                            <h1 className={`text-[35px] `}>
                                <HighlightText text={"Our Mission"}/>
                            </h1>
                            <p>
                                our mission goes beyond just delivering courses online. We wanted to create a vibrant
                                community of learners, where individuals can connect, collaborate, and learn from one
                                another. We believe that knowledge thrives in an environment of sharing and dialogue,
                                and we foster this spirit of collaboration through forums, live sessions, and networking
                                opportunities.
                            </p>
                        </div>


                    </div>
                </div>
            </section>

            {/*section 4 StatsComponents */}

            <div className={`h-[100%] w-[100%]  bg-richblack-800`}>
                <StatsComponents/>
            </div>


            {/*section 5 : Learning grid*/}

            <div className={`mt-[100px] w-11/12 mx-auto`}>
                <LearningGrid />
            </div>

            {/*section 6 : Get in touch */}

            <div className={`mx-auto w-11/12 `}>
                <ContactFormSection/>
            </div>


        </div>
    );
};

export default About;