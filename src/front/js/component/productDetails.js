import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link} from "react-router-dom";
import { Context } from "../store/appContext";

const ProductDetails = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()

    // useEffect(()=>{
    //     console.log("se cargo products")
    //     console.log(store.products)
    //     actions.getProduct()
    //     console.log(store.products)

    // },[])

    return(
        <h1>Hola</h1>
    )
}

export default ProductDetails;
