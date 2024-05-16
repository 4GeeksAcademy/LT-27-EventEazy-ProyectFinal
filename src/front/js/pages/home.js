import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CompanyForm } from "../component/companyForm";
import Companies from "../component/companies";
import { AddCategory } from "../component/add-category";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<Companies/>
		</div>
	);
};
