import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import logo from "../../img/event-eazy-logo.png";
import "../../styles/navbar.css";



export const Navbar = () => {
    
    const { store } = useContext(Context);

    const totalProductsInCart = store.cart.reduce((total, product) => total + product.quantity, 0);

    return (
        <nav className="navbar" style={{backgroundColor: '#00ADB5'}}>
            <div className="container">
                <Link to="/">
                    <img width="130px" height="100px" src={logo} />
                    
                    {/* <button className="btn btn-dark">HOME</button> */}
                </Link>
                <ul>
                    <li>
                        <Link className="nav-link active text-white" aria-current="page" to="/products">Products</Link>
                    </li>
                    <li>
                        <Link className="nav-link active text-white" aria-current="page" to="/blog">Blog</Link>
                    </li>
                    <li> 
                        <Link className="nav-link active text-white" aria-current="page" to="/about-us">About Us</Link>
                    </li>
                    <li>
                        <Link className="nav-link active text-white" aria-current="page" to="/contact-us">Contact Us</Link>
                    </li>
                </ul>
                <Link className="nav-link active text-white" aria-current="page" to="/cart-details">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart4 rounded" viewBox="0 0 16 16">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                    </svg>
                    <span className="badge"  style={{backgroundColor: '#40e0d0'}}>{totalProductsInCart}</span>
                </Link>
                {/* {store.auth == true && store.userType == "company"? <Link className="nav-link active" aria-current="page" to="/profile-company">Profile Company</Link> : <Link className="nav-link active" aria-current="page" to="/profile-user">Profile User</Link>}  */}
                {store.auth && store.userType === "company" && (
                    <Link to="/profile-company" className="btn btn-outline-primary">
                        <span>Profile Company</span>
                    </Link>
                )} 
                {store.auth && store.userType === "user" && (
                    <Link to="/profile-user" className="btn btn-outline-primary">
                        <span>Profile User</span>
                    </Link>
                )} 
                       

            </div>
        </nav>
    );
};