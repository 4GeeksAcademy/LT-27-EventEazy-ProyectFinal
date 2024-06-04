import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/companies.css";

const Products = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        actions.getProducts();
    }, []);

    const addAndSendProduct = (product) => {
        actions.addToCart(product);
    };

    return (
        <>
            <div className="">
                <Link to="/add-product">
                    <button className="btn btn-primary ">Add new product</button>
                </Link>
            </div>
            <div className="container-fluid m-3 p-3 ">
                <h1 className="text-center text-secondary">Products</h1>
                <div className="d-flex flex-wrap">
                    {store.products &&
                        store.products.length > 0 &&
                        store.products.map((product) => {
                            return (
                                <div key={product.id} className="card w-25  m-3 border border-3 rounded  p-2 text-dark bg-opacity-10 " style={{ width: "480px" }}>
                                    <div className="row flex-column ">
                                        <div className="col-2 ">
                                            <img
                                                src={rigoImage}
                                                className="rounded-circle"
                                                alt="..."
                                            />
                                        </div>
                                        <div className="col-8 ">
                                            <div className="card-body ms-3">
                                                <h5 className="card-title"><span className="border-bottom">Name: {product.name}</span></h5>
                                                <p className="card-text"><span className="border-bottom">Description: {product.description}</span></p>
                                                <p className="card-text">
                                                    <small className="text-body-secondary">
                                                        <span className="border-bottom">Quantity: {product.quantity}</span>
                                                    </small>
                                                </p>
                                                <p className="card-text"><span className="border-bottom">Price: {product.price}</span></p>
                                                <p className="card-text"><span className="border-bottom">Company Id: {product.company_id}</span></p>
                                            </div>
                                        </div>
                                        
                                        <div className="d-flex col-2  justify-content-around my-5">
                                            <Link to={"/product-detail/" + product.id } className="btn btn-outline-primary" >
                                                <span>More Details</span>
                                            </Link>
                                            <div>
                                                <i role="button" onClick={() => navigate("/edit-product/" + product.id)} className="bi bi-pen-fill fs-5 rounded-circle"></i>
                                            </div>
                                            <div>
                                                <i role="button" onClick={() => actions.deleteProduct(product.id)} className="bi bi-trash-fill fs-5 rounded-circle"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <button type="button" className="btn btn-outline-danger" onClick={() => addAndSendProduct(product)}>
                                                Add to cart
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart4 mx-2" viewBox="0 0 16 16">
                                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
};

export default Products;