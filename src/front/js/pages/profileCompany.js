import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams, Link, Navigate} from "react-router-dom";
import { Context } from "../store/appContext";
import CompanyDetails from "../component/companyDetails";
import ProductsByCompany from "../component/productsByCompany";
import ProductOrdersByCompany from "../component/productOrdersByCompany";
import OrdersByCompany from "../component/ordersByCompany";

export const ProfileCompany= () => {
    const { store, actions } = useContext(Context);
    const [user, setUser] = useState({ });
    const navigate = useNavigate();
    const params = useParams();

    const handleSubmit = async (e) => {
        actions.logout()
        navigate("/")
    };
    
    // setUser(localStorage.getItem("currenUser"))
    
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
        setUser(JSON.parse(localStorage.getItem("currentUser")));
        // setUser(store.currentUser)
        // console.log(user, "desde storage")
        // const companyProducts = store.products.find((product)=>{product.company_id == store.user_id })

    },[])

    return(
        <>
        <div className="body-total mx-5">
        <div className="title-name-company mt-5">
            <h1> 
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-building-check mb-4 me-2" viewBox="0 0 16 16">
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514"/>
                    <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6.5a.5.5 0 0 1-1 0V1H3v14h3v-2.5a.5.5 0 0 1 .5-.5H8v4H3a1 1 0 0 1-1-1z"/>
                    <path d="M4.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
                </svg>
                {user.name} 
            </h1>
        </div>
        {/* {store.userType} */}
        {/* {store.products.company_id == store.user_id} */}
        <div className="email-company mt-5">
            <h3>Company email</h3>
            {user.email}
        </div>
        
        <div className="botones¿?¿? mt-3">
            <Link to={"/products-by-company" } className="btn btn-outline-primary" >
                <span>Products company Id</span>
            </Link>
            <Link to={"/Orders" } className="btn btn-outline-primary" >
                <span>orders company Id</span>
            </Link>
            <Link to={"/product-orders" } className="btn btn-outline-primary" >
                <span>Product orders company Id</span>
            </Link>
        </div>         

        {/* {store.auth === true? Navigate("/profile-company") : Navigate("/login")} */}

        {/* <CompanyDetails /> */}
        {/* <div className="container w-50 my-5  shadow p-3 mb-5 bg-body-tertiary rounded">
            <h1> Name: {store.currentUser.name}</h1>
            <h3>email: {store.currentUser.email}</h3>
            //aqui creo que tendria que comparar si el current user.id == products.company.id y mapear los productos de la compañia de este perfil
            <p><span>Products: {store.product.company_id.map(()=>{})}</span></p>
        </div> */}
        {/* {!localStorage.getItem('access_token')? <h1>Enviar a login</h1> : <div><h1>muestra perfil</h1><h1>{store.currentUser.id}</h1></div>} */}
        
        <ProductsByCompany company_id={user.id} />
        <OrdersByCompany company_id={user.id} />
        <ProductOrdersByCompany company_id={user.id} />
        </div>
        </>
    )
}

 
