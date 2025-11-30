
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: "",
        password: "",
    });

    const handleLogin = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const foundUser = users.find(
        u => u.email === email && u.password === password
        );
        if (!foundUser) {
            alert("User not found");
        } else {
            localStorage.setItem("user", JSON.stringify(foundUser)); 
        navigate("/");
        };
    }
    
    return (
        <div className="auth-wrapper">
            <h2 className="auth-title">Submit the form to sign in</h2>

            <form onSubmit={handleLogin} className="auth-form">

                <div className="auth-field">
                    <label htmlFor="email">E-mail</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={input.email}
                        onChange={(e) =>
                            setInput({ ...input, [e.target.name]: e.target.value })
                        }
                    />
                </div>

                <div className="auth-field">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={input.password}
                        onChange={(e) =>
                            setInput({ ...input, [e.target.name]: e.target.value })
                        }
                    />
                </div>

                <button type="submit" className="auth-btn">LOGIN</button>

                <p className="auth-text">
                    Not a member?{" "}
                    <Link to="/register" className="auth-link">Sign up</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
