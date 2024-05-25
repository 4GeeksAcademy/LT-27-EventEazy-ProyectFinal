import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {

    return (
        <nav className="navbar" style={{backgroundColor: '#e3f2fd'}}>
            <div className="container">
                <Link to="/">
                    <button className="btn btn-dark">HOME</button>
                </Link>
                <Link className="nav-link active" aria-current="page" to="/all-users">Users</Link>
                <Link className="nav-link active" aria-current="page" to="/categories">Categories</Link>
                <Link className="nav-link active" aria-current="page" to="/orders">Orders</Link>
            </div>
        </nav>
    );
};
