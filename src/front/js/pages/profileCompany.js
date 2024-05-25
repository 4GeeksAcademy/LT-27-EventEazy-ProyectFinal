import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams, Link, Navigate} from "react-router-dom";
import { Context } from "../store/appContext";
import CompanyDetails from "../component/companyDetails";



export const ProfileCompany= () => {
    const { store, actions } = useContext(Context);
    const [user, setUser] = useState({ });
    const navigate = useNavigate();
    const params = useParams();

    const handleSubmit = async (e) => {
        actions.logout()
        navigate("/")
    };
    
    
    useEffect(()=>{
        //  setUser(actions.getUser(store.currentUser.id))
        // console.log("se cargo product")
        // console.log(store.product)
        // console.log(actions.getProduct(params))
        // console.log(params)
        // fetch(`${BackendURL}/product/${params.id}`)
        // .then((response) => response.json())
        // .then((data) => setProduct(data))
        // console.log(product)
        setUser(localStorage.getItem("currentUser"));
        console.log(user, "desde storage")
        

    },[])

    return(
        <>
        <h1>Profile Company</h1>
        {/* {store.auth === true? Navigate("/profile-company") : Navigate("/login")} */}

        {/* <CompanyDetails /> */}
        {/* <div className="container w-50 my-5  shadow p-3 mb-5 bg-body-tertiary rounded">
            <h1> Name: {store.currentUser.name}</h1>
            <h3>email: {store.currentUser.email}</h3>
            //aqui creo que tendria que comparar si el current user.id == products.company.id y mapear los productos de la compañia de este perfil
            <p><span>Products: {store.product.company_id.map(()=>{})}</span></p>
        </div> */}
        {/* {!localStorage.getItem('access_token')? <h1>Enviar a login</h1> : <div><h1>muestra perfil</h1><h1>{store.currentUser.id}</h1></div>} */}
        <button onClick={()=>handleSubmit()}>Logout</button>
        </>
    )
}

 