/////// Archivo home.js:
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom"; // Importa Link
import rigoImageUrl from "../../img/rigo-baby.jpg"; // Importa la imagen que deseas usar
import "../../styles/home.css";
import { LoginForm } from "../component/loginForm";
import { Navigate, useNavigate } from "react-router-dom";
import { ProfileCompany } from "./profileCompany";
import Products from "../component/products";

export const Home = () => {
	const { store, actions } = useContext(Context);
    const navigate = useNavigate();

	return (
		<>
		<div className="body-home mt-5">
			<div className="container text-center">
				<div className="row">
					<div className="col">
						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuG_Z9h4fT0VSqOSJ8dRksD2UGQa0PQEWzJw&s" className="rounded" width="350px" height="200px" />
						<div className="catering1-products">
							<Link to="/catering-products">
								<button type="button" className="btn btn-secondary w-100" style={{background: 'rgb(138, 138, 248)'}}><b>Catering</b></button>
							</Link>
						</div>
					</div>
					<div className="col">
						<img src="https://irp.cdn-website.com/447425f7/MOBILE/jpg/901.jpg" className="rounded" width="350px" height="200px" />
						<div className="p-furniture1-products">
							<Link to="/party-furniture-products">
								<button type="button" className="btn btn-secondary w-100" style={{background: 'rgb(138, 138, 248)'}}><b>Party furniture</b></button>
							</Link>
						</div>
					</div>
					<div className="col">
						<img src="https://hips.hearstapps.com/hmg-prod/images/tiendas-decoracion-fiestas02-1531296060.jpg?crop=1.00xw:0.604xh;0,0.263xh&resize=1200:*" className="rounded" width="350px" height="200px" />
						<div className="decor1-products">
							<Link to="/decor-products">
								<button type="button" className="btn btn-secondary w-100" style={{background: 'rgb(138, 138, 248)'}}><b>Decor</b></button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="container text-center my-3">
				<div className="row">
					<div className="col party-animation m-auto">
						<img src="https://www.dondeir.com/wp-content/uploads/2018/09/fiesta-1.jpg" width="500px" height="350px" className="bounce-animation rounded" /> {/* Añadido clase bounce-animation */}
						<div className="decor1-products">
							<Link to="/products">
								<button type="button" className="btn btn-secondary w-100" style={{background: 'rgb(138, 138, 248)'}}><b>All the products</b></button>
							</Link>
						</div>
					</div>
					<div className="col my-3">
						<div className="body-login mb-5" style={{background: 'grey', maxWidth: '35rem'}}>
							<div className="container">
								{store.auth == true?   <Products /> : <LoginForm />}
							</div>
						</div>
					</div>
				</div>
			</div>
			
		</div>
		</>
	);
};

