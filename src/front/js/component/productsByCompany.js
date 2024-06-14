import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link} from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/companies.css";


const ProductsByCompany = (props) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()

    useEffect(()=>{
        console.log("se cargo productByCompany")
        console.log(store.productByCompany)
        actions.getProductByCompany(props.company_id)
        console.log(store.productByCompany)

    },[])

    return (
        <>
        <div className="add-product-btn-container">
            <Link to="/add-product">
                <button className="btn btn-primary ">Add new product</button>
            </Link>
        </div>
        <div className="container-fluid m-3 p-3">
            <h1 className="text-center text-secondary">Products</h1>
            <div className="row flex-row flex-nowrap" style={{ overflowX: 'auto' }}>
                {store.productByCompany && store.productByCompany.length > 0 && store.productByCompany.map((product) => {
                    return (
                        <div key={product.id} className="card-custom card-horizontal">
                            <div className="row g-0">
                                <div className="col-md-5">
                                    <img
                                        src="https://www.telemundo.com/sites/nbcutelemundo/files/styles/fit-760w/public/articulos-para-fiesta-de-ve.jpg?ramen_itok=iqwQftIcTf"
                                        className="img-fluid"
                                        alt={product.name}
                                    />
                                </div>
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <h4 className="card-title mb-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-clipboard-data-fill mb-2 me-2" viewBox="0 0 16 16">
                                                <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
                                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5zM10 8a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4-3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1"/>
                                            </svg> 
                                            {product.name}</h4>
                                        <p className="card-text"><b>Description</b><i class="bi bi-caret-right-fill"></i> {product.description}</p>
                                        <p className="card-text"><b>Quantity</b><i class="bi bi-caret-right-fill"></i> {product.quantity} <b>units</b></p>
                                        <p className="card-text"><b>Price</b><i class="bi bi-caret-right-fill"></i> <b>$</b> {product.price}</p>
                                        <div className="button-moreD my-2">
                                            <Link to={"/product-detail/" + product.id} className="btn btn-moder2">
                                                More Details
                                            </Link> 
                                        </div>
                                        <div className="buttons-d-e">    
                                            <i role="button" onClick={() => navigate("/edit-product/" + product.id)} className="bi bi-pen-fill fs-5 rounded-circle icon-button edit-icon"></i>
                                            <i role="button" onClick={() => actions.deleteProduct(product.id)} className="bi bi-trash-fill fs-5 rounded-circle icon-button delete-icon"></i>
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

export default ProductsByCompany;
