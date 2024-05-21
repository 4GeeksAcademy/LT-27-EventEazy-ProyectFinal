import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddUser = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();
	const [user, setUser] = useState({ name: '', email: '', password: '' });

	const saveAndSendUser = async () => {
		if (user.name.trim() === '' || user.email.trim() === '' || user.password.trim() === '') {
			alert('Please enter all fields!')
		} else {
			const success = await actions.addUser(user);
			if (success) {
				navigate('/all-users');
			}
		}
	};

	const onKeyDownSaveAndSendUser = (e) => {
		if (e.key === 'Enter') {
			saveAndSendUser();
		}
	};

	return (
		<>
			<div className="addUser-body">
				<Link to="/all-users">
					<h5>Return to users</h5>
				</Link>

				<h1 className="addUser-title mt-5">Add a new user</h1>
				<div className="form-floating mb-3 mt-2">
					<input type="text" className="form-control" id="floatingInput" placeholder="Enter your full name"
						value={user.name} onKeyDown={onKeyDownSaveAndSendUser} onChange={(e) => setUser({ ...user, name: e.target.value })} />
					<label htmlFor="floatingInput">Full name</label>
				</div>
				<div className="form-floating mb-3">
					<input type="email" className="form-control" id="floatingInput" placeholder="Enter your email"
						value={user.email} onKeyDown={onKeyDownSaveAndSendUser} onChange={(e) => setUser({ ...user, email: e.target.value })} />
					<label htmlFor="floatingInput">Email</label>
				</div>
				<div className="form-floating">
					<input type="password" className="form-control" id="floatingPassword" placeholder="Enter a password"
						value={user.password} onKeyDown={onKeyDownSaveAndSendUser} onChange={(e) => setUser({ ...user, password: e.target.value })} />
					<label htmlFor="floatingPassword">Password</label>
				</div>
				<div className="save-user text-end mt-3">
					<button type="button" className="btn btn-primary" onClick={saveAndSendUser}>Save</button>
				</div>
			</div>
		</>
	);
};
