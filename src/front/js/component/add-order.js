import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import GetCoordinates from "./getCoordinates";

export const AddOrder = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();
	const [order, setOrder] = useState({ user_id: '', total: '', begin_hour: '', end_hour: '', address: '' });

	useEffect(() => {
		setOrder((prevOrder) => ({ ...prevOrder, total: store.subtotal.toFixed(2) }));
	}, [store.subtotal]);

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
				navigate('/orders-user');
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
			<div className="container">
			  <div className="row">
				<div className="col-8">
				  <h1 className="addOrder-title mt-5">Delivery data</h1>
				  <div className="form-floating mb-3 mt-2">
					<input
					  type="number"
					  className="form-control"
					  id="floatingInputUserId"
					  placeholder="Enter the user"
					  value={order.user_id}
					  onKeyDown={onKeyDownSaveAndSendOrder}
					  onChange={(e) => setOrder({ ...order, user_id: e.target.value })}
					/>
					<label htmlFor="floatingInputUserId">User ID</label>
				  </div>
				  <div className="form-floating mb-3">
					<input
					  type="text"
					  className="form-control"
					  id="floatingInputTotal"
					  placeholder="Enter the total"
					  value={order.total}
					  onKeyDown={onKeyDownSaveAndSendOrder}
					  onChange={(e) => setOrder({ ...order, total: e.target.value })}
					/>
					<label htmlFor="floatingInputTotal">Total</label>
				  </div>
				  <div className="form-floating mb-3">
					<input
					  type="text"
					  className="form-control"
					  id="floatingInputBeginHour"
					  placeholder="Enter the start time"
					  value={order.begin_hour}
					  onKeyDown={onKeyDownSaveAndSendOrder}
					  onChange={(e) => setOrder({ ...order, begin_hour: e.target.value })}
					/>
					<label htmlFor="floatingInputBeginHour">Begin hour</label>
				  </div>
				  <div className="form-floating mb-3">
					<input
					  type="text"
					  className="form-control"
					  id="floatingInputEndHour"
					  placeholder="Enter the end time"
					  value={order.end_hour}
					  onKeyDown={onKeyDownSaveAndSendOrder}
					  onChange={(e) => setOrder({ ...order, end_hour: e.target.value })}
					/>
					<label htmlFor="floatingInputEndHour">End hour</label>
				  </div>
				  <div className="form-floating mb-3">
					<input
					  type="text"
					  className="form-control"
					  id="floatingInputAddress"
					  placeholder="Enter your address"
					  value={order.address}
					  onKeyDown={onKeyDownSaveAndSendOrder}
					  onChange={(e) => setOrder({ ...order, address: e.target.value })}
					/>
					<label htmlFor="floatingInputAddress">Address</label>
				  </div>
				</div>
				<div className="col-4 mt-5 text-center m-auto order-summary">
				  <div className="total-order">
					<div className="total text-end">
					  <h1>${store.subtotal.toFixed(2)}</h1>
					  <h2>TOTAL</h2>
					</div>
					<div className="info mt-5">
					  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-exclamation-circle-fill mx-2 mb-1" viewBox="0 0 16 16">
						<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
					  </svg>
					  <i>Shipping cost outside of Cdmx from $250</i>
					</div>
					<div className="info2 mt-2">
					  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
						<path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
					  </svg>
					  <i>Free shipping within Mexico City</i>
					</div>
					<div className="confirm-button mt-5">
					  <button type="button" className="btn btn-success" onClick={saveAndSendOrder}>
						Confirm order
						<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-check-square-fill ms-2 mb-1" viewBox="0 0 16 16">
						  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
						</svg>
					  </button>
					</div>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		</>
	  );
	};
	

