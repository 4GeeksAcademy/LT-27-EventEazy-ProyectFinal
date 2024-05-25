import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { LoginForm } from "../component/loginForm";
import { Navigate, useNavigate } from "react-router-dom";
import { ProfileCompany } from "./profileCompany";


export const Home = () => {
	const { store, actions } = useContext(Context);
    const navigate = useNavigate();


	return (
		<>
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
			
			{store.auth == true? navigate("/profile-company") : <LoginForm />}
			
		</div>
		</>
	);
};
