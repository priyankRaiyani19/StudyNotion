import React from 'react';
import HighlightText from "../components/core/HomePage/HighlightText";
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import Quote from "../components/core/AboutPage/Quote";
import FoundingStory from "../assets/Images/FoundingStory.png";


const About = () => {
    return (
        <div className={`mt-[100px] text-white max-w-maxContent mx-auto`}>

            {/*section 1*/}

            <section className={`flex flex-col items-center justify-between w-11/12 mx-auto gap-[40px]`}>
                <div className={`flex flex-col items-center justify-between gap-5 w-[100%]`}>
                    <header className={`text-[31px] flex flex-col place-items-center`}>
                        Driving Innovation in Online Education for a <HighlightText text={"Brighter Future"}/>
                    </header>
                    <p className={`text-lg   flex flex-col items-center justify-between`}>
                        Studynotion is at the forefront of driving innovation in online education.
                        We're passionate about creating a <br/>brighter future by offering cutting-edge courses,
                        leveraging emerging technologies, and nurturing a <br/> vibrant learning community.
                    </p>

                </div>
                <div className={`flex gap-[25px] items-center justify-between`}>
                    <img src={BannerImage1} alt="not found"/>
                    <img src={BannerImage2} alt="not found"/>
                    <img src={BannerImage3} alt="not found"/>
                </div>

            </section>

            {/*section 2*/}

            <section className={`flex flex-col items-center justify-between w-11/12 mx-auto gap-[40px]`}>
                <div>
                    <Quote/>
                </div>
            </section>


            {/*section 3*/}

            <section className={`flex flex-col items-center justify-between w-11/12 mx-auto gap-[40px]`}>
                <div>
                    <div className="flex items-center justify-between">
                        <div className={`w-[45%] flex flex-col gap-[25px]`}>
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
                        <div>
                            <img src={FoundingStory} alt="not found"/>

                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default About;