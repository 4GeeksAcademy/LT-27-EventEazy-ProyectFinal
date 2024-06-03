import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link} from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/companies.css";


const OrdersByUser = (props) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()
    const [user,setUser] = useState()

    useEffect(()=>{
        console.log("se cargo orders by user")
        console.log("orders",store.ordersByUser)
        // let user = JSON.parse( localStorage.getItem("currentUser"));
        // console.log("user_id",user.id)
        actions.getOrdersByUser()
        console.log("orders by user",store.ordersByUser)

    },[])

    return (
        <>
            {/* <div className="">
                <Link to="/add-product">
                    <button className="btn btn-primary ">Add new product</button>
                </Link>
            </div> */}
             
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
                                            {editedIndex === order.id ? (
                                                <>
                                                    <input 
                                                        type="text" 
                                                        value={editedOrder.user_id} 
                                                        onChange={(e) => setEditedOrder({ ...editedOrder, user_id: e.target.value })} 
                                                        className="form-control mb-2"
                                                        placeholder="User ID"
                                                    />
                                                    <input 
                                                        type="text" 
                                                        value={editedOrder.total} 
                                                        onChange={(e) => setEditedOrder({ ...editedOrder, total: e.target.value })} 
                                                        className="form-control mb-2"
                                                        placeholder="Total"
                                                    />
                                                    <input 
                                                        type="text" 
                                                        value={editedOrder.begin_hour} 
                                                        onChange={(e) => setEditedOrder({ ...editedOrder, begin_hour: e.target.value })} 
                                                        className="form-control mb-2"
                                                        placeholder="Begin hour"
                                                    />
                                                    <input 
                                                        type="text" 
                                                        value={editedOrder.end_hour} 
                                                        onChange={(e) => setEditedOrder({ ...editedOrder, end_hour: e.target.value })} 
                                                        className="form-control mb-2"
                                                        placeholder="End hour"
                                                    />
                                                    <input 
                                                        type="text" 
                                                        value={editedOrder.address} 
                                                        onChange={(e) => setEditedOrder({ ...editedOrder, address: e.target.value })} 
                                                        className="form-control mb-2"
                                                        placeholder="Address"
                                                    />
                                                    <button className="btn btn-success ms-2" onClick={saveEditedOrder}>Save</button>
                                                </>
                                            ) : (
                                                <>
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
                                                    <button className="btn btn-danger ms-2" onClick={() => actions.deleteOrder(order.id)}>Delete</button>
                                                    <button className="btn btn-warning ms-2" onClick={() => handleEditOrder(order)}>Edit</button>
                                                </>
                                            )}
                                            < GetCoordinates />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default OrdersByUser;
