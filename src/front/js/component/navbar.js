import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {

    const location = useLocation();
    const isAddCategoryRoute = location.pathname === '/add-category';
    const isCategoriesRoute = location.pathname === '/categories';
    const isAllUsersRoute = location.pathname === '/all-users';
    const isAddUserRoute = location.pathname === '/add-user';
    const isHomeRoute = location.pathname === '/';

    const shouldShowAllUsersButton = !isAllUsersRoute && !isAddUserRoute;
    const shouldShowAddUserButton = !isAddUserRoute && !isHomeRoute;
    const shouldShowCategoriesButton = !isCategoriesRoute && !isAddCategoryRoute;
    const shouldShowAddCategoryButton = !isAddCategoryRoute && !isHomeRoute;

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <Link to="/">
                    <button className="btn btn-dark">HOME</button>
                </Link>
                {shouldShowAllUsersButton && !isCategoriesRoute && !isAddCategoryRoute && (
                    <Link to="/all-users">
                        <a class="nav-link active" aria-current="page" href="#">Users</a>
                    </Link>
                )}
                {shouldShowAddUserButton && !isCategoriesRoute && !isAddCategoryRoute && (
                    <Link to="/add-user">
                        <button type="button" className="btn btn-success">Add new user</button>
                    </Link>
                )}
                {shouldShowCategoriesButton && !isAllUsersRoute && !isAddUserRoute && (
                    <Link to="/categories">
                        <a class="nav-link active" aria-current="page" href="#">Categories</a>
                    </Link>
                )}
                {shouldShowAddCategoryButton && !isAllUsersRoute && !isAddUserRoute && (
                    <Link to="/add-category">
                        <button type="button" className="btn btn-success">Add new category</button>
                    </Link>
                )}
            </div>
        </nav>
    );
};
