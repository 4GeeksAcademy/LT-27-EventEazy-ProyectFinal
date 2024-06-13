import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const totalProductsInCart = store.cart.reduce((total, product) => total + product.quantity, 0);

    const handleLogout = () => {
        actions.logout();
        navigate("/");
    };

    return (
        <nav className="navbar p-3" style={{ backgroundColor: '#e3f2fd' }}>
            <div className="container">
                <Link to="/"><button className="btn btn-dark">HOME</button></Link>
                <Link className="nav-link active" aria-current="page" to="/all-users">Users</Link>
                <Link className="nav-link active" aria-current="page" to="/categories">Categories</Link>
                <Link className="nav-link active" aria-current="page" to="/orders">Orders</Link>
                <Link className="nav-link active" aria-current="page" to="/cart-details">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart4 rounded" viewBox="0 0 16 16">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                    </svg>
                    <span className="badge bg-primary">{totalProductsInCart}</span>
                </Link>
                {store.auth && store.userType === "company" ? (
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                            </svg>
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item">
                                <Link className="profile-company" to="/profile-company">Company profile</Link>
                            </a></li>
                            <li><a className="dropdown-item">
                                <Link className="add-product" to="/add-product">Add new product</Link>
                            </a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" onClick={() => handleLogout()}>
                                <button type="button" class="btn btn-light">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left mb-1 me-2" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
                                        <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
                                    </svg>
                                    Logout
                                </button>
                            </a></li>
                        </ul>
                    </div>
                ) : (
                    <Link className="nav-link active" aria-current="page" to="/profile-user">User profile</Link>
                )}
            </div>
        </nav>
    );
};
