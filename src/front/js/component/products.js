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
            <div className="container-fluid m-3 p-3 ">
                <h1 className="title-products text-center">Products</h1>
                <div className="d-flex flex-wrap justify-content-center">
                    {store.products &&
                        store.products.length > 0 &&
                        store.products.map((product) => {
                            return (
                                <div key={product.id} className="product-card">
                                    <div className="product-card-inner">
                                        <img
                                            src="https://m.media-amazon.com/images/I/81RIO6vKRDL._AC_UF350,350_QL80_.jpg"
                                            className="product-image"
                                            alt={product.name}
                                        />
                                        <div className="product-details">
                                                <h4 className="product-title">{product.name}</h4>
                                                <p className="product-description"><b>Description:</b> {product.description}</p>
                                                <p className="product-quantity"><b>Quantity:</b> {product.quantity}</p>
                                                <p className="product-price"><b>Price:</b> {product.price}</p>
                                                <p className="product-company-id"><b>Company Id:</b> {product.company_id}</p>
                                                <div className="product-actions justify-content-end mt-5">
                                                    <Link to={"/product-detail/" + product.id } className="btn btn-modern-1 me-2">
                                                        More Details
                                                    </Link>
                                                    <div className="add-cart">
                                                        {store.userType !== "company" && (
                                                            <button type="button" className="btn btn-cart" onClick={() => addAndSendProduct(product)}>
                                                                Add to cart
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart4 mb-1 ms-2" viewBox="0 0 16 16">
                                                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                                                                </svg>
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
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