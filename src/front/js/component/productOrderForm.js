import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ProductOrderForm = () => {
    const { store, actions } = useContext(Context);
    const [productOrder, setProductOrder] = useState({ quantity: '', price: '',product_id: '', order_id: ''  }); 
    const navigate = useNavigate();
    const params = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let response;
        if (!params.id) {
            response = await actions.addProductOrder(productOrder);
        } else {
            response = await actions.editProductOrder(productOrder, params.id);
        }
        if (response) {
            navigate("/product-orders");
        }
    }

    useEffect(() => {
        if (params.id) {
            const selectedProductOrder = store.productOrders.find(productOrder => productOrder.id == params.id);
            if (selectedProductOrder) {
                setProductOrder(selectedProductOrder);
            }
        } else {
            setProductOrder({ quantity: '', price: '',product_id: '', order_id: '' }); 
        }
    }, [params, store.productOrders]);

    return (
        <>
            <nav className="navbar navbar-light m-5">
                <div className="ml-auto">
                    <Link to="/product-orders">
                        <span className="navbar-brand mb-0 h1">Back to Product Orders</span>
                    </Link>
                </div>
            </nav>
            <form className="container" onSubmit={handleSubmit}>
                <h1>{!params.id ? "Add a new product Order" : "Edit product Order " + params.id}</h1>
                <div className="form-floating mb-3">
                    <input onChange={(e) => setProductOrder({ ...productOrder, quantity: e.target.value })} type="text" className="form-control" name="quantity" value={productOrder.quantity} id="inputQuantity" placeholder="Enter Quantity" />
                    <label htmlFor="inputQuantity">Quantity</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={(e) => setProductOrder({ ...productOrder, price: e.target.value })} type="text" className="form-control" name="price" value={productOrder.price} id="inputPrice" placeholder="Enter Price" />
                    <label htmlFor="inputPrice">Price</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={(e) => setProductOrder({ ...productOrder, product_id: e.target.value })} value={productOrder.product_id} name="productId" type="number" className="form-control" id="inputProductId" placeholder="Enter Product Id" />
                    <label htmlFor="inputProductId">Product Id</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={(e) => setProductOrder({ ...productOrder, order_id: e.target.value })} value={productOrder.order_id} name="order_id" type="number" className="form-control" id="inputOrder_id" placeholder="Enter Order id" />
                    <label htmlFor="inputOrder_id">Order_id</label>
                </div>

                {/* <div className="form-floating mb-3">
                    <select
                        onChange={(e) => setProductOrder({ ...productOrder, category_id: e.target.value })}
                        value={product.category_id}
                        name="category_id"
                        className="form-select"
                        id="inputCategory_id"
                        aria-label="Select category"
                    >
                        <option value="">Select Category</option>
                        <option value="1">Decor</option>
                        <option value="2">Furniture</option>
                        <option value="3">Catering</option>
                    </select>
                    <label htmlFor="inputCategory_id">Category</label>
                </div> */}
                <div className="">
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
            <h1></h1>
        </>
    )
}
