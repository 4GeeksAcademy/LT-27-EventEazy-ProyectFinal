import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const LoginForm = () => {
    const { store, actions } = useContext(Context);
    const [user, setUser] = useState({ email: '', password: '' });
    const [error, setError] = useState(null); // Estado para manejar errores

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Sending Data");
        const response = await actions.login(user);
        if (response) {
            navigate("/profile"); // Redirigir a profile
            console.log("a profile")
        } else {
            setError("Invalid email or password");
        }
    };

    // useEffect(() => {
    //     if (store.currentUser) {
    //         navigate("/"); // tambien dirigir a profile?
    //     }
    // }, [store.currentUser, navigate]);

    return (
        <>
            <nav className="navbar navbar-light m-5">
                <div className="ml-auto">
                    <Link to="/signup">
                        <span className="navbar-brand mb-0 h1">Sign Up</span>
                    </Link>
                </div>
            </nav>
            <form className="container" onSubmit={handleSubmit}>
                <h1>Log in</h1>
                {error && <div className="alert alert-danger">{error}</div>} {/* Mostrar mensaje de error si existe */}
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
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </form>
        </>
    );
};
