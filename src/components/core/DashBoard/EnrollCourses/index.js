import React from 'react';
import {useSelector} from "react-redux";

const EnrollCourses = () => {

        const {token} = useSelector((state) => state.auth);




    return (
        <div>

            <div>
                Enroll Courses
            </div>
            
        </div>
    );
};

export default EnrollCourses;