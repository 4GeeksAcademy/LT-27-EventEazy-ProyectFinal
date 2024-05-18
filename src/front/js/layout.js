import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { AddCategory } from "./component/add-category";
import { ViewCategory } from "./component/viewCategories";
import { CompanyForm } from "./component/companyForm";
import { companies} from "./component/companies"
import { CompaniesList } from "./pages/companiesList";
import { ProductForm } from "./component/productForm";
import { ProductsList } from "./pages/productsList";
import { ProductDetail } from "./pages/products";
import { ProductOrderForm} from "./component/productOrderForm";
import { ProductOrdersList } from "./pages/productOrdersList";
import {ProductOrderDetail} from  "./pages/productOrders";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                        <Route path="/categories" element={<ViewCategory />} />
                        <Route path="/add-category" element={<AddCategory />} />
                        <Route element={<CompaniesList />} path="/companies" />
                        <Route element={<CompanyForm />} path="/add-company" />
						<Route element={<CompanyForm />} path="/edit-company/:id" />
                        <Route element={<ProductsList />} path="/products" />
                        <Route element={<ProductDetail />} path="/productDetail/:id" />
                        <Route element={<ProductForm />} path="/add-product" />
						<Route element={<ProductForm />} path="/edit-product/:id" />
                        <Route element={<ProductOrdersList />} path="/product-orders" />
                        <Route element={<ProductOrderDetail />} path="/productOrderDetail/:id" />
                        <Route element={<ProductOrderForm />} path="/add-product-order" />
						<Route element={<ProductOrderForm />} path="/edit-product-order/:id" />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);