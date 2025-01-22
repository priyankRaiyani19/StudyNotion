import "./App.css";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import NavBar from "./components/common/NavBar";
import OpenRoute from "./components/core/Auth/OpneRoute"





function App() {
    return (
        <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter select-none ">
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
                        <Login/>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
