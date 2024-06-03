import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link} from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/companies.css";


const ProductOrdersByCompany = (props) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()
    const [company,SetCompany] = useState()
    console.log("props",props)

    function updateOrderStatus(status){
        let user =JSON.parse( localStorage.getItem("currentUser"));
        console.log("user", user)
        console.log("user.id", user.id)
        console.log("status", status)
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");


        const raw = JSON.stringify({
        "status": status
        });

            const requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
            };

        fetch(`${process.env.BACKEND_URL}/api/product-orders-status/${user.id}`, requestOptions)
        .then((response) => response.text())
        .then((result) => store.orderStatus(result))
        .catch((error) => console.error(error));
    }

    useEffect(()=>{
        console.log("se cargo productOrderByCompany")
        console.log(store.productOrderByCompany)
        console.log("props",props)

        console.log("props.company",props.company_id)
        let user =JSON.parse( localStorage.getItem("currentUser"));
        console.log("user", user)
        console.log("user.id", user.id)

        


        actions.getProductOrderByCompany(user.id)
        
        
        console.log(store.productOrderByCompany)
        // const result = ProductOrderByCompany.filter(company_id = company)
        // console.log(result)
        

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
                                            <div>
                                                <button onClick={() => updateOrderStatus("En proceso")}>Procesar</button>
                                                <button onClick={() => updateOrderStatus("Completada")}>Completada</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )

                        })}
                </div>
            </div>
            <div classname="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" classname="btn-check" name="confirmada" id="confirmada" autocomplete="off" checked />
                <label classname="btn btn-outline-primary" for="confirmada">Confirmada</label>

                <input type="radio" classname="btn-check" name="enProceso" id="enProceso" autocomplete="off" />
                <label classname="btn btn-outline-primary" for="enProceso">En proceso</label>

                <input type="radio" classname="btn-check" name="completada" id="completada" autocomplete="off" />
                <label classname="btn btn-outline-primary" for="completada">Completada</label>
            </div>
        </>
    );
};

export default ProductOrdersByCompany;
