import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link} from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/companies.css";


const ProductOrdersByCompany = (props) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()
    const [company,SetCompany] = useState(props.company_id)

    useEffect(()=>{
        console.log("se cargo productOrdersByCompany")
        console.log(store.productByCompany)
        actions.getProductOrderByCompany(props.company_id)
        console.log(store.getProductOrderByCompany)
        // const result = ProductOrderByCompany.filter(company_id = company)
        console.log(result)

    },[])

    return (
        <>
            {/* <div className="">
                <Link to="/add-product">
                    <button className="btn btn-primary ">Add new product</button>
                </Link>
            </div> */}
            <div className="container-fluid m-3 p-3 ">
                    <h1 className="text-center text-secondary">Product Orders</h1>
                <div className="row flex-row flex-nowrap " style={{overflowX:'auto'}}>
                    {store.productOrderByCompany && 
                        store.productOrderByCompany.length > 0 &&
                        store.productOrderByCompany.map((productOrder) => {
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
                                                <h5 className="card-title"><span className="border-bottom">Product:{productOrder.product_id}</span></h5>
                                                <p className="card-text"><span className="border-bottom">Order Id:{productOrder.order_id}</span></p>
                                                <p className="card-text">
                                                    <small className="text-body-secondary">
                                                        <span className="border-bottom">Quantity:{productOrder.quantity}</span>
                                                    </small>
                                                </p>
                                                <p className="card-text"><span className="border-bottom">Price:{productOrder.price}</span></p>
                                                


                                            </div>
                                        </div>
                                        
                                        <div className="d-flex col-2  justify-content-around my-5">
                                            <Link to={"/product-order-detail/" + productOrder.id } className="btn btn-outline-primary" >
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

export default ProductOrdersByCompany;
