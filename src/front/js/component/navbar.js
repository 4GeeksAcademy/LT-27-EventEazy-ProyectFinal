import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {

	const location = useLocation();
    const isAddCategoryRoute = location.pathname === '/add-category';
    const isCategoriesRoute = location.pathname === '/categories';
    const isHomeRoute = location.pathname === '/';
    const shouldShowCategoriesButton = !isCategoriesRoute && !isAddCategoryRoute;
    const shouldShowAddCategoryButton = !isAddCategoryRoute && !isHomeRoute;

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<button className="btn btn-dark">HOME</button>
				</Link>
				{shouldShowCategoriesButton && (
					<Link to="/categories">
						<a class="route-categories" onClick={()=> {shouldShowCategoriesButton}} href="#">Categories</a>
					</Link>
				)}
				{shouldShowAddCategoryButton && (
					<Link to="add-category">
						<button onClick={()=> {shouldShowAddCategoryButton}} type="button" class="btn btn-success">Add new category</button>
					</Link>
				)}
				{/* <div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div> */}
			</div>
		</nav>
	);
};