import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/signup.css"



export const SignupUserForm = () => {
    const { store, actions } = useContext(Context);
    const [user, setUser] = useState({ name:'', email: '', password: '' });
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Sending Data");
        const response = await actions.signup(user);
        if (response) {
            navigate("/login");
        } else {
            setError("Invalid email or password");
        }
    };

    useEffect(() => {
        
    }, []);

    return (
        <>
            <nav className="signup-navbar navbar  m-5" style={{background: "transparent", }}>
                <div className="ml-auto">
                    <Link to="/login">
                        <span className="signup-navbar-brand navbar-brand mb-0 h1" style={{fontSize: "50px"}}>Login</span>
                    </Link>
                </div>
            </nav>
            <form className="signup-container container" onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                {error && <div className="alert alert-danger">{error}</div>} 
                <div className="signup-form-floating form-floating mb-3">
                    <input 
                        onChange={(e) => setUser({...user, name: e.target.value})} 
                        type="text" 
                        className="signup-form-control form-control" 
                        name="name" 
                        value={user.name} 
                        id="inputName" 
                        placeholder="Enter Name" 
                    />
                    <label htmlFor="inputName">Name </label>
                </div>
                
                <div className="signup-form-floating form-floating mb-3">
                    <input 
                        onChange={(e) => setUser({...user, email: e.target.value})} 
                        type="email" 
                        className="signup-form-control form-control" 
                        name="email" 
                        value={user.email} 
                        id="inputEmail" 
                        placeholder="Enter Email" 
                    />
                    <label htmlFor="inputEmail">Email </label>
                </div>
                <div className="signup-form-floating form-floating mb-3">
                    <input 
                        onChange={(e) => setUser({...user, password: e.target.value})} 
                        type="password" 
                        className="signup-form-control form-control" 
                        name="password" 
                        value={user.password} 
                        id="inputPassword" 
                        placeholder="Enter Password" 
                    />
                    <label htmlFor="inputPassword">Password</label>
                </div>
                <div className="signup-submit">
                    <button type="submit" className="signup-btn btn btn-primary">Signup</button>
                </div>
            </form>
        </>
    );
};
