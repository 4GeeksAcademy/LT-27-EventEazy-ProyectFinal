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
            <div className="">
                <Link to="/add-product">
                    <button className="btn btn-primary ">Add new product</button>
                </Link>
            </div>
            <div className="container-fluid m-3 p-3 ">
                    <h1 className="text-center text-secondary">Products</h1>
                <div className="row flex-row flex-nowrap " style={{overflowX:'auto'}}>
                    {store.productByCompany && 
                        store.productByCompany.length > 0 &&
                        store.productByCompany.map((product) => {
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
                                                <h5 className="card-title"><span className="border-bottom">Name:{product.name}</span></h5>
                                                <p className="card-text"><span className="border-bottom">Description:{product.description}</span></p>
                                                <p className="card-text">
                                                    <small className="text-body-secondary">
                                                        <span className="border-bottom">Quantity:{product.quantity}</span>
                                                    </small>
                                                </p>
                                                <p className="card-text"><span className="border-bottom">Price:{product.price}</span></p>
                                                {/* <p className="card-text"><span className="border-bottom">{product.category_id}</span></p> */}
                                                {/* <p className="card-text"><span className="border-bottom">Company Id:{product.company_id}</span></p> */}


                                            </div>
                                        </div>
                                        
                                        <div className="d-flex col-2  justify-content-around my-5">
                                            <Link to={"/product-detail/" + product.id } className="btn btn-outline-primary" >
					                            <span>More Detaills</span>
					                        </Link>
                                            <div >
                                                <i role="button" onClick={() => navigate("/edit-product/" + product.id)} className="bi bi-pen-fill fs-5 rounded-circle" ></i>
                                            </div>
                                            <div>
                                                <i role="button" onClick={() => actions.deleteProduct(product.id)} className="bi bi-trash-fill fs-5 rounded-circle"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )

                        })}
                </div>
            </div>
        </>
    );
};

export default ProductsByCompany;