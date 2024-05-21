import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailsUser = () => {

    const { theid } = useParams();
    const { store, actions } = useContext(Context);
    const [userDetails, setUserDetails] = useState('');

    useEffect(() => {
        const user = store.users.find(u => u.id === parseInt(theid));
        if (user) {
            setUserDetails(user);
        }
    }, [theid, store.users]);

    if (!userDetails) {
        return <div>Ok</div>;
    }

    return (
        <>
            <div className="bodycard-details">
                <Link to="/all-users">
                    <h5>Return to users</h5>
                </Link>
                <div className="card-detail mt-5">
                    <div className="card-header">
                        Details
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{userDetails.name}</h5>
                        <p className="card-email">{userDetails.email}</p>
                        <p className="card-orders">Orders:</p> {/*Aquí podemos agregar las ordenes que ha hecho el cliente ¿?*/}
                        <p className="card-more-details">Details:</p> {/* Aqui sobre el paso podemos agregar mas detalles del cliente, esto es solo de momento */}
                    </div>
                </div>
            </div>
        </>
    );
};
