import "./App.css";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import NavBar from "./components/common/NavBar";
import OpenRoute from "./components/core/Auth/OpneRoute"
import ForgotPassword from "./pages/ForgotPassword";
import OpneRoute from "./components/core/Auth/OpneRoute";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Error from "./pages/Error";
import MyProfile from "./components/core/DashBoard/MyProfile";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import DashBoard from "./pages/DashBoard";
import Settings from "./components/core/DashBoard/Setting";
// import EnrollCourses from "./components/core/DashBoard/EnrollCourses";
import {ACCOUNT_TYPE} from "./utils/constants";
import EnrolledCourses from "./components/core/DashBoard/EnrollCourses";
import Cart from "./components/core/DashBoard/Cart";
import {useSelector} from "react-redux";
import AddCourse from "./components/core/DashBoard/AddCourse";


function App() {

    const { user } = useSelector((state) => state.profile)
    return (
        <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter overflow-y-hidden  ">
            <NavBar/>
            <Routes>

                <Route path="/" element={<Home/>}/>

                <Route
                    path="signup"
                    element={
                        <OpenRoute>
                            <Signup/>
                        </OpenRoute>
                    }
                />

                <Route
                    path="login"
                    element={
                        <OpenRoute>
                            <Login/>
                        </OpenRoute>
                    }
                />

                <Route
                    path="forgot-password"
                    element={
                        <OpenRoute>
                            <ForgotPassword/>
                        </OpenRoute>
                    }
                />

                <Route path="update-password/:id"
                       element={
                           <OpneRoute>
                               <UpdatePassword/>
                           </OpneRoute>
                       }
                />
                <Route path="verify-email"
                       element={
                           <OpneRoute>
                               <VerifyEmail/>
                           </OpneRoute>
                       }
                />

                <Route path="about"
                       element={<About/>}
                />

                <Route path="contact" element={

                    <ContactUs/>}/>

                <Route
                    element={
                        <PrivateRoute>
                            <DashBoard />
                        </PrivateRoute>
                    }
                >
                    <Route path="dashboard/my-profile" element={<MyProfile/>}/>
                    <Route path="dashboard/settings" element={<Settings />} />
                    {/*<Route path="dashboard/enrolled-courses" element={<EnrollCourses />} />*/}


                    {
                        user?.accountType === ACCOUNT_TYPE.STUDENT && (
                            <>
                                <Route path="dashboard/cart" element={<Cart />} />
                                <Route path="dashboard/enrolled-courses" element={<EnrolledCourses />} />
                            </>
                        )
                    }


                    {
                        user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
                            <>
                                <Route path="dashboard/add-course" element={<AddCourse />} />

                            </>
                        )
                    }

                </Route>



                <Route path="*" element={<Error/>}/>


            </Routes>
        </div>
    );
}

export default App;
