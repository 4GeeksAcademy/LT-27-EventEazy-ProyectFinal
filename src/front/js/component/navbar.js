import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
    const { store, actions } = useContext(Context);


    return (
        <nav className="navbar" style={{backgroundColor: '#e3f2fd'}}>
            <div className="container">
                <Link to="/">
                    <button className="btn btn-dark">HOME</button>
                </Link>
                <Link className="nav-link active" aria-current="page" to="/all-users">Users</Link>
                <Link className="nav-link active" aria-current="page" to="/categories">Categories</Link>
                <Link className="nav-link active" aria-current="page" to="/orders">Orders</Link>
                {store.userType == "company"? <Link className="nav-link active" aria-current="page" to="/profile-company">Profile Company</Link> : <Link className="nav-link active" aria-current="page" to="/profile-user">Profile User</Link>} 
                        

            </div>
        </nav>
    );
};
