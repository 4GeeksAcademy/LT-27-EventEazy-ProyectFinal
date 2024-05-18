import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams, Link} from "react-router-dom";
import { Context } from "../store/appContext";
import { BackendURL } from "./backendURL";

const ProductDetails = () => {
    const { store, actions } = useContext(Context);
    const [product, setProduct] = useState({ name: '', description: '', quantity: '', price: '',category_id: '' });
    const navigate = useNavigate();
    const params = useParams();
    

    useEffect(()=>{
        // console.log("se cargo product")
        // console.log(store.product)
        // actions.getProduct(params)
        // console.log(actions.getProduct(params))
        // console.log(params)
        fetch(`${BackendURL}/product/${params.id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data))
        console.log(product)

    },[])

    return(
        <h1>{product.name}</h1>
    )
}

export default ProductDetails;
