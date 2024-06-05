import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams, Link} from "react-router-dom";
import { Context } from "../store/appContext";
import { DetailsUser } from "../component/details-users";
import Map  from "../component/map"
import OrdersByUser from "../component/ordersByUser";



export const ProfileUser = () => {
    const { store, actions } = useContext(Context);
    const [user, setUser] = useState({ });
    const navigate = useNavigate();
    const params = useParams();
    
    const handleSubmit = async (e) => {
        actions.logout()
        console.log("logout",actions.logout)
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
        setUser(JSON.parse(localStorage.getItem("currentUser")));
        

        console.log(user, "desde storage")
        // {store.auth == true? navigate("/profile-user") : navigate("/")}

    },[])

    return(
        <>
            <h1>Profile User</h1>
            <h1>Profile User:{user.id}</h1>
            {store.userType}
            {/* {store.products.company_id == store.user_id} */}
            {user.email}
            
            {/* <DetailsUser store.users.id={store.user_id} role={store.user-type}/> */}
            {/* <div className="container w-50 my-5  shadow p-3 mb-5 bg-body-tertiary rounded">
                <h1> Name: {store.currentUser.name}</h1>
                <h3>email: {store.currentUser.email}</h3>
                //aqui creo que tendria que comparar si el current user.id == products.company.id y mapear los productos de la compañia de este perfil
                <p><span>Products: {store.product.company_id.map(()=>{})}</span></p>
            </div> */}
            {/* {!localStorage.getItem('access_token')? <h1>Enviar a login</h1> : <div><h1>muestra perfil</h1><h1>{store.currentUser.id}</h1></div>} */}
        
            <Link to={"/orders-user" } className="btn btn-outline-primary" >
                <span>My Orders</span>
            </Link>
            <button onClick={()=>handleSubmit()}>Logout</button>
            
        </>
    )
}

 
