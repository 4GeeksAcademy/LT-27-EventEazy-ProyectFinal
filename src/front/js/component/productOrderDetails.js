import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams, Link} from "react-router-dom";
import { Context } from "../store/appContext";
import { BackendURL } from "./backendURL";

const ProductOrderDetails = () => {
    const { store, actions } = useContext(Context);
    const [productOrder, setProductOrder] = useState({ });
    const navigate = useNavigate();
    const params = useParams();
    
    
    useEffect(()=>{
        setProductOrder(actions.getProductOrder(params.id))
        // console.log("se cargo product")
        // console.log(store.product)
        // console.log(actions.getProduct(params))
        // console.log(params)
        // fetch(`${BackendURL}/product/${params.id}`)
        // .then((response) => response.json())
        // .then((data) => setProduct(data))
        // console.log(product)

    },[])

    return(
        <>
        <div className="container w-50 my-5  shadow p-3 mb-5 bg-body-tertiary rounded">
            <h1> Quantity : {store.singleProductOrder.quantity}</h1>
            <h3>Product Id: {store.singleProductOrder.product_id}</h3>
            <p><span>Price: {store.singleProductOrder.price}</span></p>
        </div>
        </>
    )
}

export default ProductOrderDetails;
