import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";

export const CartDetails = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getCart();
        actions.calculateSubtotal();
    }, []);

    const handleQuantityChange = (productId, delta) => {
        const product = store.cart.find(product => product.id === productId);
        if (product.quantity + delta > 0) {
            actions.updateProductQuantity(productId, delta);
            actions.calculateSubtotal();
        }
    };

    return (
        <>
            <h1 className="title-cart my-5 text-center">
                YOUR CART
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart-check mb-2 ms-3" viewBox="0 0 16 16">
                    <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                </svg>
            </h1>
            <div className="body-cart mt-5"> 
                <div className="row">
                    <div className="col-sm-8">
                        {store.cart.map((product, index) => (
                            <div key={index} className="card mb-3 w-75 ms-5">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={rigoImage} className="rounded-circle my-2" width="250px" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{product.name}</h5>
                                            <p className="card-text">{product.description}</p>
                                            <p className="card-text"><small className="text-body-secondary">Quantity: {product.quantity}</small></p>
                                            <p className="card-text">Price: {product.price}</p>
                                            <button onClick={() => actions.removeProductFromCart(product.id)} className="btn btn-danger">Eliminate</button>
                                            <div className="input-group mt-2">
                                                <button onClick={() => handleQuantityChange(product.id, -1)} className="btn btn-outline-secondary">-</button>
                                                <span className="mx-2">{product.quantity}</span>
                                                <button onClick={() => handleQuantityChange(product.id, 1)} className="btn btn-outline-secondary">+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="col-md-4 sticky-summary">
                        <div className="summary">
                            <div className="subtotal text-end">
                                <h2>${store.subtotal.toFixed(2)}</h2>   
                                <h1>Subtotal</h1>
                            </div>
                            <div className="info mt-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-circle-fill me-2" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                                </svg>
                                <i>Shipping costs calculator when entering location data</i>
                            </div> 
                        </div>
                        <div className="button-reserve text-center mt-3">
                            <Link to="/add-order">
                                <button type="button" className="btn btn-dark">RESERVE</button>
                            </Link>
                        </div>
                    </div>
                        <div className="keep-buying text-start ms-5">
                            <Link to="/products">
                                <button type="button" className="btn btn-success">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-bar-left" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"/>
                                    </svg>
                                    KEEP BUYING
                                </button>
                            </Link>
                        </div>
                </div>
            </div>
        </>
    );
};
