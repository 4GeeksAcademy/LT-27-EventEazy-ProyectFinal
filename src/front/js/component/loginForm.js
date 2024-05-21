import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const LoginForm = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    // const params = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("send Data");
        console.log(email,password)
       
    }

    useEffect(() => {

    },[]);

    return (
        <>
            <nav className="navbar navbar-light m-5">
                <div className="ml-auto">
                    <Link to="/sign-up">
                        <span className="navbar-brand mb-0 h1">Sign Up</span>
                    </Link>
                </div>
            </nav>
            <form className="container" onSubmit={handleSubmit}>
                <h1>Log in</h1>
                <div className="form-floating mb-3">
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" name="email" value={email} id="inputEmail" placeholder="Enter Email" />
                    <label htmlFor="inputEmail">Email </label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={(e) => setPassword( e.target.value)} type="password" className="form-control" name="password" value={password} id="inputPassword" placeholder="Enter Password" />
                    <label htmlFor="inputPassword">Password</label>
                </div>
                <div className="">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </form>
            <h1></h1>
        </>
    )
}
