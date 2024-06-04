import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import GetCoordinates from "./getCoordinates";

const OrdersByUser = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getOrdersByUser();
    }, [actions]);

    const handleCityChange = (orderID, newCity) => {
        // Puedes realizar aquí cualquier lógica necesaria
        console.log(`Nueva ciudad seleccionada para la orden ${orderID}:`, newCity);
    };

    const handleEditOrder = (order) => {
        // Implementa la lógica para editar la orden aquí
        console.log("Editar orden:", order);
    };

    return (
        <div className="container mt-5">
            <h1 className="title-orders mt-5">Orders</h1>
            <div className="row">
                {store.ordersByUser.map(order => (
                    <div key={order.id} className="card-order col-md-4 w-50">
                        <div className="card my-3">
                            <div className="row g-0">
                                <div className="col-md-4 m-auto">
                                    <img src="https://cdn-icons-png.flaticon.com/512/2649/2649223.png" width="80" height="80" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <span>
                                            <b>USER</b>
                                            <p className="card-userID">{order.user_id}</p>
                                        </span>
                                        <span>
                                            <b>TOTAL</b>
                                            <p className="card-total">{order.total}</p>
                                        </span>
                                        <span>
                                            <b>BEGIN HOUR</b>
                                            <p className="card-beginHour">{order.begin_hour}</p>
                                        </span>
                                        <span>
                                            <b>END HOUR</b>
                                            <p className="card-endHour">{order.end_hour}</p>
                                        </span>
                                        <span>
                                            <b>ADDRESS</b>
                                            <p className="card-address">{order.address}</p>
                                        </span>
                                        <GetCoordinates city={order.city} orderID={order.id} onCityChange={handleCityChange} />
                                        <button className="btn btn-danger ms-2" onClick={() => actions.deleteOrder(order.id)}>Delete</button>
                                        <button className="btn btn-warning ms-2" onClick={() => handleEditOrder(order)}>Edit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrdersByUser;
