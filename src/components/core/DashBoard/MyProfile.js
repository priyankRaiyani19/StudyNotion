import React from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {RiEditBoxLine} from "react-icons/ri";
import IconButton from "../../common/IconButton";


const MyProfile = () => {
    const { user } = useSelector((state) => state.profile)
    const navigate = useNavigate()


    return (
        <div>
            <h1 className="mb-14 text-3xl font-medium text-richblack-5">
                My Profile
            </h1>
            <div className="flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
                <div className="flex items-center gap-x-4">
                    <img
                        src={user?.image}
                        alt={`profile-${user?.firstName}`}
                        className="aspect-square w-[78px] rounded-full object-cover"
                    />
                    <div className="space-y-1">
                        <p className="text-lg font-semibold text-richblack-5">
                            {user?.firstName + " " + user?.lastName}
                        </p>
                        <p className="text-sm text-richblack-300">{user?.email}</p>
                    </div>
                </div>
                <IconButton
                    text="Edit"
                    onclick={() => {
                        navigate("/dashboard/settings")
                    }}
                >
                    <RiEditBoxLine />
                </IconButton>
            </div>

        </div>
    );
};

export default MyProfile;