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
        <div className="container-fluid m-3 p-3">
            <h1 className="text-center text-secondary">Products</h1>
            <div className="row flex-row flex-nowrap" style={{ overflowX: 'auto' }}>
                {store.productByCompany && store.productByCompany.length > 0 && store.productByCompany.map((product) => {
                    return (
                        <div key={product.id} className="card-custom card-horizontal">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img
                                        src="https://www.telemundo.com/sites/nbcutelemundo/files/styles/fit-760w/public/articulos-para-fiesta-de-ve.jpg?ramen_itok=iqwQftIcTf"
                                        className="img-fluid rounded-start"
                                        alt={product.name}
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h4 className="card-title">{product.name}</h4>
                                        <p className="card-text"><b>Description:</b> {product.description}</p>
                                        <p className="card-text"><b>Quantity:</b> {product.quantity}</p>
                                        <p className="card-text"><b>Price: $</b> {product.price}</p>
                                        <div className="button-moreD my-3">
                                            <Link to={"/product-detail/" + product.id} className="btn btn-moder2">
                                                More Details
                                            </Link> 
                                        </div>
                                        <div className="buttons-d-e">    
                                            <i role="button" onClick={() => navigate("/edit-product/" + product.id)} className="bi bi-pen-fill fs-5 rounded-circle icon-button edit-icon me-4"></i>
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
    );
};

export default ProductsByCompany;