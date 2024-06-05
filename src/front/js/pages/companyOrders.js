import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { LoginForm } from "../component/loginForm";
import { Navigate, useNavigate } from "react-router-dom";
import { ProfileCompany } from "./profileCompany";
import  Products  from "../component/products"
import ProductOrdersByCompany from "../component/productOrdersByCompany";



export const CompanyOrders = () => {
	const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    



	return (
		<>
		<h1>Vistas orders</h1>
        <ProductOrdersByCompany  />

		</>
	);
};
