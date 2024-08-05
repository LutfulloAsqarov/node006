import React from "react";
import "./login.css";

const Login = () => {
    return (
        <div>
            <div className="container">
                <div className="sign-up-container" signinIn={signIn}>
                    <form className="form">
                        <div className="title">Create Account</div>
                        <input
                            className="input"
                            type="text"
                            placeholder="Name"
                        />
                        <input
                            className="input"
                            type="email"
                            placeholder="Email"
                        />
                        <input
                            className="input"
                            type="password"
                            placeholder="Password"
                        />
                        <button className="button">Sign Up</button>
                    </form>
                </div>

                <div className="sign-in-container" signinIn={signIn}>
                    <form className="form">
                        <div className="title">Sign in</div>
                        <input
                            className="input"
                            type="email"
                            placeholder="Email"
                        />
                        <input
                            className="input"
                            type="password"
                            placeholder="Password"
                        />
                        <div className="anchor" href="#">
                            Forgot your password?
                        </div>
                        <button className="button">Sigin In</button>
                    </form>
                </div>

                <div className="overlay-container" signinIn={signIn}>
                    <div className="overlay" signinIn={signIn}>
                        <div className="left-overlay-panel" signinIn={signIn}>
                            <div className="title">Welcome Back!</div>
                            <p className="text">
                                To keep connected with us please login with your
                                personal info
                            </p>
                            <button
                                className="ghost-button"
                                onClick={() => toggle(true)}
                            >
                                Sign In
                            </button>
                        </div>

                        <div className="right-overlay-panel" signinIn={signIn}>
                            <div className="title">Hello, Friend!</div>
                            <p className="text">
                                Enter Your personal details and start journey
                                with us
                            </p>
                            <button
                                className="ghost-button"
                                onClick={() => toggle(false)}
                            >
                                Sigin Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
