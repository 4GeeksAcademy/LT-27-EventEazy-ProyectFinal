import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams, Link} from "react-router-dom";
import { Context } from "../store/appContext";
import { BackendURL } from "./backendURL";

const ProductDetails = () => {
    const { store, actions } = useContext(Context);
    const [product, setProduct] = useState({ });
    const navigate = useNavigate();
    const params = useParams();
    
    
    useEffect(()=>{
        setProduct(actions.getProduct(params.id))
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
            <h1> Name : {store.product.name}</h1>
            <h3> Description: {store.product.email}</h3>
            <p>Quantity: {store.product.quantity}</p>
            <p>Price: {store.product.price}</p>
            <h3>Company: {store.product.category_id}</h3>
            <h3>Category: {store.product.company_id}</h3>
            
        </div>
        </>
    )
}

export default ProductDetails;
