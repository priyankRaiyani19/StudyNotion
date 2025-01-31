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


function App() {
    return (
        <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter  ">
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

                </Route>



                <Route path="*" element={<Error/>}/>


            </Routes>
        </div>
    );
}

export default App;
