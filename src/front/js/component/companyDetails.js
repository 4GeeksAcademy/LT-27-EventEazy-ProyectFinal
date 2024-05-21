import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams, Link} from "react-router-dom";
import { Context } from "../store/appContext";
import { BackendURL } from "./backendURL";

const CompanyDetails = () => {
    const { store, actions } = useContext(Context);
    const [company, setCompany] = useState({ });
    const navigate = useNavigate();
    const params = useParams();
    
    
    useEffect(()=>{
        setCompany(actions.getCompany(params.id))
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
            <h1> Name : {store.company.name}</h1>
            <h3> Email: {store.company.email}</h3>
            
        </div>
        </>
    )
}

export default CompanyDetails;
