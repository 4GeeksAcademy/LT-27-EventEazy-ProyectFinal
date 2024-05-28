import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ProductForm = (props) => {
    const { store, actions } = useContext(Context);
    const [product, setProduct] = useState({ name: '', description: '', quantity: '', price: '', category_id: '',company_id: userId });
    const navigate = useNavigate();
    const params = useParams();
    const [userId, setUserId] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        let response;
        if (!params.id) {
            response = await actions.addProduct(product);
        } else {
            response = await actions.editProduct(product, params.id);
        }
        if (response) {
            navigate("/product-by-company");
        }
    }

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (currentUser) {
            setUserId(currentUser.id);
        }

        if (params.id ) {
            const selectedProduct = store.productByCompany.find(product => product.id == params.id);
            if (selectedProduct) {
                setProduct(selectedProduct);
            }
        } else {
            setProduct({ name: '', description: '', quantity: '', price: '', category_id: '',company_id: userId });
        }
    }, [userId, params.id, store.productByCompany]);

    return (
        <>
            <nav className="navbar navbar-light m-5">
                <div className="ml-auto">
                    <Link to="/product-by-company">
                        <span className="navbar-brand mb-0 h1">Back To My Products</span>
                    </Link>
                </div>
            </nav>
            <form className="container" onSubmit={handleSubmit}>
                <h1>{!params.id ? "Add a new product" : "Edit product " + params.id}</h1>
                <div className="form-floating mb-3">
                    <input onChange={(e) => setProduct({ ...product, name: e.target.value })} type="text" className="form-control" name="name" value={product.name} id="inputName" placeholder="Enter Name" />
                    <label htmlFor="inputName">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={(e) => setProduct({ ...product, description: e.target.value })} type="text" className="form-control" name="description" value={product.description} id="inputDescription" placeholder="Enter description" />
                    <label htmlFor="inputDescription">Description</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={(e) => setProduct({ ...product, quantity: e.target.value })} value={product.quantity} name="quantity" type="number" className="form-control" id="inputQuantity" placeholder="Enter Quantity" />
                    <label htmlFor="inputQuantity">Quantity</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={(e) => setProduct({ ...product, price: e.target.value })} value={product.price} name="price" type="number" className="form-control" id="inputPrice" placeholder="Enter Price" />
                    <label htmlFor="inputPrice">Price</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={(e) => setProduct({ ...product, category_id: e.target.value })} value={product.category_id} name="category_id" type="number" className="form-control" id="inputCategory_id" placeholder="Enter Category id" />
                    <label htmlFor="inputCategory_id">Category_id</label>
                </div>
                <div className="">
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
        </>
    );
}
