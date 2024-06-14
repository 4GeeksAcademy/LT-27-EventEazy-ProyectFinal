import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams, Link} from "react-router-dom";
import { Context } from "../store/appContext";
import { DetailsUser } from "../component/details-users";
import Map  from "../component/map"
import OrdersByUser from "../component/ordersByUser";



export const ProfileUser = () => {
    const { store, actions } = useContext(Context);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("currentUser")));
    const navigate = useNavigate();
    const params = useParams();
    
    const handleSubmit = async (e) => {
        console.log("hola")
        navigate("/")
        actions.logout()
    };
    
    

    return ( 
            <>
                <div className="email-U text-end me-5">
                    <h3 className="si mt-5 ms-5">
                        <svg xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(100, 219, 63)'}} width="28" height="28" fill="currentColor" className="bi bi-envelope-at-fill mb-2 me-2" viewBox="0 0 16 16">
                            <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
                            <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
                        </svg>
                        User email
                    </h3>
                    <span className="email ms-5">{user.email}</span>
                </div>

                <div className="body-totalU mx-5">
                    <div className="foto-perfil">
                        <div className="row">
                            <div className="col-4">
                                <img src="https://media0.giphy.com/media/sPE10urWXK7YLZ7oli/giphy.gif?cid=6c09b9524815fx1vla60yxw5n4a2tbir56j851v24po4hlky&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g"  height="300px" />
                            </div>
                            <div className="col-8 imagen-perfil align-content-end">
                                <h1 className="titleG" style={{fontSize: '60px'}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-exclude mb-3 me-3" viewBox="0 0 16 16">
                                        <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm12 2H5a1 1 0 0 0-1 1v7h7a1 1 0 0 0 1-1z"/>
                                    </svg>
                                    {user.name}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>                
            </>
        

    )
}

 
