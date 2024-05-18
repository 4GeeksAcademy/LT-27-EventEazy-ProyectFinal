import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link} from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/companies.css";


const ProductOrders = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()

    useEffect(()=>{
        console.log("se cargo product Order")
        console.log(store.productOrders)
        actions.getProductOrders()
        console.log(store.productOrders)

    },[])

    return (
        <>
            <div className="">
                <Link to="/add-product-order">
                    <button className="btn btn-primary ">Add new product Order</button>
                </Link>
            </div>
            <div className="container-fluid m-3 p-3 ">
                    <h1 className="text-center text-secondary">Product Order</h1>
                <div className="d-flex flex-wrap">
                    {store.productOrders &&
                        store.productOrders.length > 0 &&
                        store.productOrders.map((productOrder) => {
                            return (
                                <div key={productOrder.id} className="card w-25  m-3 border border-3 rounded  p-2 text-dark bg-opacity-10 " style={{ width: "480px" }}>
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
                                                <h5 className="card-title"><span className="border-bottom">Quantity:{productOrder.quantity}</span></h5>
                                                <p className="card-text"><span className="border-bottom">Order Id:{productOrder.order_id}</span></p>
                                                <p className="card-text">
                                                    <small className="text-body-secondary">
                                                        <span className="border-bottom">Product Id:{productOrder.product_id}</span>
                                                    </small>
                                                </p>
                                                <p className="card-text"><span className="border-bottom">Price:{productOrder.price}</span></p>
                                                {/* <p className="card-text"><span className="border-bottom">{productOrder.category_id}</span></p> */}
                                               


                                            </div>
                                        </div>
                                        
                                        <div className="d-flex col-2  justify-content-around my-5">
                                            <Link to={"/productOrderDetail/" + productOrder.id } className="btn btn-outline-primary" >
					                            <span>More Detaills</span>
					                        </Link>
                                            <div >
                                                <i role="button" onClick={() => navigate("/edit-productOrder/" + productOrder.id)} className="bi bi-pen-fill fs-5 rounded-circle" ></i>
                                            </div>
                                            <div>
                                                <i role="button" onClick={() => actions.deleteProductOrder(productOrder.id)} className="bi bi-trash-fill fs-5 rounded-circle"></i>
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

export default ProductOrders;
