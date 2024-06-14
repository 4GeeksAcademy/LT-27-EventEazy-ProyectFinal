import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import logo from "../../img/event-eazy-logo.png";
import "../../styles/navbar.css";

export const Navbar = () => {
    const { store, actions } = useContext(Context);
    const navigatingToMain = useNavigate();
    const totalProductsInCart = store.auth ? store.cart.reduce((total, product) => total + product.quantity, 0) : 0;

    const handleLogout = () => {
        actions.logout();
        navigatingToMain("/login");
    };

    return (
        <nav className="navbar" style={{backgroundColor: '#00ADB5'}}>
            <div className="container">
                <Link to="/">
                    <img width="130px" height="100px" src={logo} />
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
                
                {!store.auth || store.userType !== "company" ? (
                    <Link className="nav-link active text-white" aria-current="page" to="/cart-details">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart4 rounded" viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                        </svg>
                        <span className="badge" style={{backgroundColor: 'rgba(178, 34, 235, 0.719)'}}>{totalProductsInCart}</span>
                    </Link>
                ) : null}
                
                {store.auth && (
                    <>
                        <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-hdd-stack-fill" viewBox="0 0 16 16">
                                <path d="M2 9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2zm.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"/>
                            </svg>
                        </button>
                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                            <div className="offcanvas-header" style={{background: 'black', color: 'white', fontFamily: 'Rockwell'}}>
                                <h4 className="offcanvas-title" id="offcanvasRightLabel">Active Session</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                {store.userType === "company" ? (
                                    <>
                                        <div>
                                            <Link to="/profile-company" className="btn btn-outline-primary mt-5 mb-2">Profile Company</Link>
                                        </div>
                                        <div>
                                            <Link to="/products-by-company" className="btn btn-outline-primary mt-2 mb-2">Products company Id</Link>
                                        </div>
                                        <div>
                                            <Link to="/company-orders" className="btn btn-outline-primary mt-2">My Orders</Link>
                                        </div> 
                                    </>
                                ) : (
                                    <>
                                        <div>
                                            <Link to="/profile-user" className="btn btn-outline-primary mt-5">Profile User</Link>
                                        </div>
                                        <div>
                                            <Link to={"/orders-user" } className="btn btn-outline-primary mt-3" ><span>My Orders</span></Link>
                                        </div>
                                    </>
                                )}
                                <button className="btn btn-danger mt-5" onClick={handleLogout}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-box-arrow-left mb-1 me-3" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
                                        <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 .708 0L3 10.5a.5.5 0 1 1-.708.708L1 9.707v3.793a.5.5 0 0 1-1 0V9.707L.854 9.146a.5.5 0 1 1 .708-.708L2 10.5l-1.854-1.854z"/>
                                    </svg>
                                    Logout
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </nav>
    );
};
