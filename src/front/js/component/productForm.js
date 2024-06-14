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
            <div className="title1 ml-auto my-5 text-center">
                <Link to="/product-by-company">
                    <h2 className="navbar-brand mb-0 h1 back-to-products">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-up-left-circle-fill mb-1 me-3" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-5.904 2.803a.5.5 0 1 0 .707-.707L6.707 6h2.768a.5.5 0 1 0 0-1H5.5a.5.5 0 0 0-.5.5v3.975a.5.5 0 0 0 1 0V6.707z"/>
                        </svg>
                        Go to all products
                    </h2>
                </Link>
            </div>
            <form className="container edit-productC" onSubmit={handleSubmit}>
                <h1 className="title-editPC">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-pencil-square mb-2 me-2" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                    </svg>
                    {!params.id ? "Add a new product" : "Edit product " + params.id}</h1>
                <div className="form-floating mb-3">
                    <input onChange={(e) => setProduct({ ...product, name: e.target.value })} type="text" className="form-control" name="name" value={product.name} id="inputName" placeholder="Enter Name" />
                    <label htmlFor="inputName">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={(e) => setProduct({ ...product, description: e.target.value })} maxlength="45" type="text" className="form-control" name="description" value={product.description} id="inputDescription" placeholder="Enter description" />
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
                <div className="save-editProduct text-end">
                    <button type="submit" className="btn btn-saveP">Save</button>
                </div>
            </form>
        </>
    );
}
