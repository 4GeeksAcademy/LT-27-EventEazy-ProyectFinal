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
        if(response.ok ) {     
            if(response.role === "user"){
                navigate("/profile-user");
                console.log("a profile user")
            }
            else if(response.ok ==="company"){               
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
            <nav className="navbar navbar-light m-5 w-25 ">
                <div className="ml-auto ">
                    <Link to="/signup-user" className="btn btn-dark " >
                        <span className="navbar-brand mb-0 h1 text-white">Signup User</span>
                    </Link>
                </div>
                <div className="ml-auto">
                    <Link to="/signup-company" className="btn btn-dark " >
                        <span className="navbar-brand mb-0 h1 text-white">Signup Company</span>
                    </Link>
                </div>
            </nav>
            <form className="container" onSubmit={handleSubmit}>
                <h1>Login</h1>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="form-floating mb-3">
                    <input
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
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
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
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
