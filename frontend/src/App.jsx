import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./components/form/Form";
import Users from "./components/users/Users";
import Login from "./pages/login/Login";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Auth />}>
                    <Route path="/home" element={<Home />} />
                </Route>
            </Routes>
            <ToastContainer />
        </>
    );
}

export default App;
