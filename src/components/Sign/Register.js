import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem("users")) || [];
    
        const exists = users.find(u => u.email === input.email);
        if (exists) {
          alert("User already exists");
          return;
        }
    
        users.push(input);
        localStorage.setItem("user", JSON.stringify(users));
        localStorage.setItem("user", JSON.stringify(input));
        navigate("/");
    };
        


    return(
        <div className="auth-wrapper">
            <h2 className="auth-title">
                Register the new account
            </h2>
            <form onSubmit={handleSubmit} className="auth-form">
                <div className="auth-field">
                    <input
                        name="name"
                        value={input.name}
                        onChange={ (e) => setInput({...input, [e.target.name] : e.target.value})}
                        type="text"
                        id="form3Example1cg"
                        className="form-control form-control-lg"
                    />
                    <label className="auth-card" htmlFor="form3Example1cg">
                        Username
                    </label>
                </div>
                <div className="auth-field">
                    <input
                        name="email"
                        value={input.email}
                        onChange={ (e) => setInput({...input, [e.target.name] : e.target.value})}
                        type="email"
                        id="form3Example3cg"
                        className="form-control form-control-lg"
                    />
                    <label className="auth-card" htmlFor="form3Example3cg">
                        E-mail
                    </label>
                </div>
                <div className="auth-field">
                    <input
                        name="password"
                        value={input.password}
                        onChange={ (e) => setInput({...input, [e.target.name] : e.target.value})}
                        type="password"
                        id="form3Example4cg"
                        className="form-control form-control-lg"
                    />
                    <label className="auth-card" htmlFor="form3Example4cg">
                        Password
                    </label>
                </div>
                
                <div className="auth-btn">
                    <button
                        type="submit"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-white"
                    >
                        SIGN ME UP
                    </button>
                </div>
                <p className="auth-text">
                    Already a member?{" "}
                <Link to="/login" className="auth-link">
                    <u>Sign in</u>
                </Link>
                </p>


            </form>
        </div>
    );
};
export default Register;