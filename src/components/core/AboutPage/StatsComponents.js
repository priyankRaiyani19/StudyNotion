import React from 'react';


const Stats = [{
    count: "5k", label: "Active Students",
}, {
    count: "10+", label: "Members",
}, {
    count: "200+", label: "Courses",
}, {
    count: "50+", label: "Awards",
}];


const StatsComponents = () => {
    return(
        <section>
            <div className={`w-[100%] mt-[100px] py-[50px] `}>
                <div className={`flex justify-around items-center `}>
                    {
                        Stats.map((data, index) => {
                            return (
                                <div key={index} className={`flex flex-col items-center justify-center  `}>
                                    <h1 className={`font-bold text-2xl `}>
                                        {data.count}
                                    </h1>
                                    <h2 className={`font-bold text-sm text-richblack-200`}>
                                        {data.label}
                                    </h2>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>



    );
};

export default StatsComponents;