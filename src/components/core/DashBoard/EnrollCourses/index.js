import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {getUserEnrolledCourses} from "../../../../services/operations/profileAPI";
import Loader from "../../../common/Loader";
import ProgressBar from "@ramonak/react-progress-bar";


const EnrolledCourses = () => {

    const {token} = useSelector((state) => state.auth);
    const [enrolledCourses, setEnrolledCourses] = useState([]);

    const getEnrollCourses = async () => {
        try {
            const response = await getUserEnrolledCourses(token);
            console.log(response);
            setEnrolledCourses(response);
        } catch (error) {
            console.log("Unable to retrieve enroll courses...", error);
        }
    }

    useEffect(() => {

        getEnrollCourses();


        // [] this is use for first render call
    },[]);


    return (
        <div className="flex flex-col mx-auto my-auto gap-5">

            <div className={`text-center text-white text-3xl my-auto mx-auto`}>
                Enroll Courses
            </div>

            {
                !enrolledCourses
                    ? (
                        <div>
                            <Loader/>
                        </div>)
                    : !enrolledCourses.length
                        ? (
                            <div className="text-center text-white text-3xl my-auto mx-auto">
                                You have not enrolled any course...
                            </div>)
                        : (
                            <div>
                                <p>
                                    Course Name
                                </p>
                                <p>
                                    Duration
                                </p>
                                <p>
                                    Progress
                                </p>

                                {/*card data*/}

                                {
                                    enrolledCourses.map((ele, index) => (
                                        <div>

                                            <div>
                                                <img src={ele.thumbnail} alt=""/>
                                                <div>
                                                    <p>
                                                        {ele.name}
                                                    </p>
                                                    <p>
                                                        {ele.description}
                                                    </p>
                                                </div>
                                            </div>

                                            <div>
                                                {ele?.duration}
                                            </div>

                                            <div>
                                                    <p>
                                                        progress: {ele.progressPercentage || 0}%
                                                    </p>
                                                        <ProgressBar completed={ele.progressPercentage || 0}
                                                        height='8px'
                                                        isLabelVisible={false}
                                                        />

                                            </div>
                                        </div>
                                    ))
                                }


                            </div>
                        )
            }


        </div>
    );
};

export default EnrolledCourses;