import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const SignupForm= () => {
    const { store, actions } = useContext(Context);
    const [user, setUser] = useState({name:'', email: '', password: '' });
    const [error, setError] = useState(null); // Estado para manejar errores

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
            <nav className="navbar navbar-light m-5">
                <div className="ml-auto">
                    <Link to="/login">
                        <span className="navbar-brand mb-0 h1">Login</span>
                    </Link>
                </div>
            </nav>
            <form className="container" onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                {error && <div className="alert alert-danger">{error}</div>} 
                <div className="form-floating mb-3">
                    <input 
                        onChange={(e) => setUser({...user, name: e.target.value})} 
                        type="text" 
                        className="form-control" 
                        name="name" 
                        value={user.name} 
                        id="inputName" 
                        placeholder="Enter Name" 
                    />
                    <label htmlFor="inputName">Name </label>
                </div>
                
                <div className="form-floating mb-3">
                    <input 
                        onChange={(e) => setUser({...user, email: e.target.value})} 
                        type="email" 
                        className="form-control" 
                        name="email" 
                        value={user.email} 
                        id="inputEmail" 
                        placeholder="Enter Email" 
                    />
                    <label htmlFor="inputEmail">Email </label>
                </div>
                <div className="form-floating mb-3">
                    <input 
                        onChange={(e) => setUser({...user, password: e.target.value})} 
                        type="password" 
                        className="form-control" 
                        name="password" 
                        value={user.password} 
                        id="inputPassword" 
                        placeholder="Enter Password" 
                    />
                    <label htmlFor="inputPassword">Password</label>
                </div>
                <div className="">
                    <button type="submit" className="btn btn-primary">Signup</button>
                </div>
            </form>
        </>
    );
};
