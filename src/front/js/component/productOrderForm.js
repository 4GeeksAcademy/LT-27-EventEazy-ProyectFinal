import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ProductOrderForm = () => {
    const { store, actions } = useContext(Context);
    const [productOrder, setProductOrder] = useState({ quantity: '', price: '',product_id: '', order_id: ''  }); 
    const navigate = useNavigate();
    const params = useParams();

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const existingProductOrder = store.productOrders.find(order => order.id === parseInt(id));
            if (existingProductOrder) {
                setProductOrder(existingProductOrder);
            }
        }
    }, [id, store.productOrders]);

    const handleChange = (e) => {
        setProductOrder({ ...productOrder, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = id ? await actions.editProductOrder(id, productOrder) : await actions.addProductOrder(productOrder);
        if (success) {
            navigate("/product-orders");
        } else {
            alert("Failed to save product order");
        }
    };

    return (
        <div className="container mt-5">
            <h1>{id ? "Edit Product Order" : "Add Product Order"}</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Quantity</label>
                    <input
                        type="number"
                        name="quantity"
                        value={productOrder.quantity}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={productOrder.price}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Product ID</label>
                    <input
                        type="number"
                        name="product_id"
                        value={productOrder.product_id}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Order ID</label>
                    <input
                        type="number"
                        name="order_id"
                        value={productOrder.order_id}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    {id ? "Update" : "Add"} Product Order
                </button>
                <Link to="/product-orders" className="btn btn-secondary ms-3">Cancel</Link>
            </form>
        </div>
    );
};

