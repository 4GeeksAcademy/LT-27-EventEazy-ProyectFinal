import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddOrder = () => {
	const { store, actions } = useContext(Context);
    const navigate = useNavigate();
	const [order, setOrder] = useState({ user_id: '', total: '', begin_hour: '', end_hour: '', address: '' });

	const saveAndSendOrder = async () => {
		if (order.user_id.trim() === '' || 
            order.total.trim() === '' || 
            order.begin_hour.trim() === '' || 
            order.end_hour.trim() === '' ||
            order.address.trim() === '') {
			alert('Please enter all fields!')
		} else {
            console.log(order)
			const success = await actions.addOrder(order);
			if (success) {
				navigate('/orders');
			}
		}
	};

	const onKeyDownSaveAndSendOrder = (e) => {
		if (e.key === 'Enter') {
			saveAndSendOrder();
		}
	};

	return (
		<>
			<div className="addOrder-body">
				<Link to="/orders">
					<h5>Return to orders</h5>
                </Link>
                <h1 className="addOrder-title mt-5">Add a new order</h1>
				<div className="form-floating mb-3 mt-2">
					<input type="number" className="form-control" id="floatingInput" placeholder="Enter the user"
						value={order.user_id} onKeyDown={onKeyDownSaveAndSendOrder} onChange={(e) => setOrder({ ...order, user_id: e.target.value })} />
					<label htmlFor="floatingInput">User ID</label>
				</div>
				<div className="form-floating mb-3">
					<input type="text" className="form-control" id="floatingInput" placeholder="Enter the total"
						value={order.total} onKeyDown={onKeyDownSaveAndSendOrder} onChange={(e) => setOrder({ ...order, total: e.target.value })} />
					<label htmlFor="floatingInput">Total</label>
				</div>
				<div className="form-floating mb-3">
					<input type="text" className="form-control" id="floatingInput" placeholder="Enter the start time"
						value={order.begin_hour} onKeyDown={onKeyDownSaveAndSendOrder} onChange={(e) => setOrder({ ...order, begin_hour: e.target.value })} />
					<label htmlFor="floatingInput">Begin hour</label>
				</div>
                <div className="form-floating mb-3">
					<input type="text" className="form-control" id="floatingInput" placeholder="Enter the end time"
						value={order.end_hour} onKeyDown={onKeyDownSaveAndSendOrder} onChange={(e) => setOrder({ ...order, end_hour: e.target.value })} />
					<label htmlFor="floatingInput">End hour</label>
				</div>
                <div className="form-floating mb-3">
					<input type="text" className="form-control" id="floatingInput" placeholder="Enter your address"
						value={order.address} onKeyDown={onKeyDownSaveAndSendOrder} onChange={(e) => setOrder({ ...order, address: e.target.value })} />
					<label htmlFor="floatingInput">Address</label>
				</div>
				<div className="save-order text-end mt-3">
					<button type="button" className="btn btn-primary" onClick={saveAndSendOrder}>Save</button>
				</div>  
			</div>
		</>
	);
};
