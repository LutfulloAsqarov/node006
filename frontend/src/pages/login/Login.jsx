import React, { useEffect, useState } from "react";
import "./login.css";
import { useSignInMutation } from "../../context/api/usersApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../context/slices/authSlice";
import { toast } from "react-toastify";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [signIn, { isError, isLoading, isSuccess, data }] =
        useSignInMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isSuccess) {
            dispatch(setToken(data.token));
            dispatch(setUser(data.user));
            toast.success("Successfully logged in!");
            navigate("/home");
        }
        if (isError) {
            toast.error("Xato kiritingiz");
        }
    }, [isSuccess, isError]);
    const handelSubmit = (e) => {
        e.preventDefault();
        signIn({
            username: username,
            password: password,
        });
    };
    // console.log(data?.token);
    return (
        <div className="login-container">
            <div className="login">
                <form onSubmit={handelSubmit} className="login__form" action="">
                    <div className="login__input">
                        <label htmlFor="username">Username</label>
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            id="username"
                        />
                    </div>
                    <div className="login__input">
                        <label htmlFor="password">Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            id="password"
                        />
                    </div>
                    <button>LOGIN</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
