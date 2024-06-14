import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/login.css"

export const LoginForm = () => {
    const { store, actions } = useContext(Context);
    const [user, setUser] = useState({ email: '', password: '' });
    const [error, setError] = useState(null); 

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Sending Data");
        const response = await actions.login(user);
        console.log(response)
        if(response.ok ) {     
            if(response.role === "user"){
                navigate("/profile-user");
                console.log("a profile user")
            }
            else if(response.role ==="company"){               
                navigate("/profile-company")
                console.log("a profile company")
            }
        }
    };

    useEffect(() => {
        if (store.currentUser) {
            if(store.currentUser.role === "user"){
                navigate("/profile-user")
            } else if (store.currentUser.role === "company"){
                navigate("profile-company")
            }
        }
    }, [store.currentUser, navigate]);

    return (
        <>
            <nav className="login-navbar navbar m-5 w-25" style={{background: "transparent"}}>
                <div className="ml-auto">
                    <Link to="/signup-user" className="btn signup-btn">
                        <span className="login-navbar-brand navbar-brand mb-0 h1 text-white">Signup User</span>
                    </Link>
                </div>
                <div className="ml-auto mt-4">
                    <Link to="/signup-company" className="btn signup-btn">
                        <span className="login-navbar-brand navbar-brand mb-0 h1 text-white">Signup Company</span>
                    </Link>
                </div>
            </nav>

            <form className="login-container container" onSubmit={handleSubmit}>
                <h1 style={{color: 'black', fontFamily: 'Copperplate Gothic'}}>Login</h1>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="login-form-floating form-floating mb-3">
                    <input
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        type="email"
                        className="login-form-control form-control"
                        name="email"
                        value={user.email}
                        id="inputEmail"
                        placeholder="Enter Email"
                    />
                    <label htmlFor="inputEmail">Email </label>
                </div>
                <div className="login-form-floating form-floating mb-3">
                    <input
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        type="password"
                        className="login-form-control form-control"
                        name="password"
                        value={user.password}
                        id="inputPassword"
                        placeholder="Enter Password"
                    />
                    <label htmlFor="inputPassword">Password</label>
                </div>
                <div className="login-submit">
                    <button type="submit" className="login-btn btn btn-primary">Login</button>
                </div>
            </form>
        </>
    );
};
