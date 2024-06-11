import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/signup-company.css"; 

export const CompanyForm = () => {
    const { store, actions } = useContext(Context);
    const [company, setCompany] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();
    const params = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let response;
        if (!params.id) {
            response = await actions.addCompany(company);
        } else {
            response = await actions.editCompany(company, params.id);
        }
        if (response) {
            navigate("/login");
        }
    }

    useEffect(() => {
        if (params.id) {
            const selectedCompany = store.companies.find(company => company.id == params.id);
            if (selectedCompany) {
                setCompany(selectedCompany);
            }
        } else {
            setCompany({ name: '', email: '', password: '' });
        }
    }, [params, store.companies]);

    return (
        <>
            <nav className="company-navbar navbar navbar-light m-5" style={{background: "transparent", }}>
                <div className="ml-auto">
                    <Link to="/login">
                        <span className="company-navbar-brand navbar-brand mb-0 h1" style={{fontSize: "50px"}}> Login</span>
                    </Link>
                </div>
            </nav>
            <form className="company-container container" onSubmit={handleSubmit}>
                <h1>{!params.id ? "Signup company" : "Edit company " + params.id}</h1>
                <div className="form-floating mb-3">
                    <input onChange={(e) => setCompany({ ...company, name: e.target.value })} type="text" className="company-form-control form-control" name="name" value={company.name} id="inputName" placeholder="Enter Name" />
                    <label htmlFor="inputName">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={(e) => setCompany({ ...company, email: e.target.value })} type="email" className="company-form-control form-control" name="email" value={company.email} id="inputEmail" placeholder="Enter Email" />
                    <label htmlFor="inputEmail">Email</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={(e) => setCompany({ ...company, password: e.target.value })} value={company.password} name="password" type="password" className="company-form-control form-control" id="inputPassword" placeholder="Enter Password" />
                    <label htmlFor="inputPassword">Password</label>
                </div>
                <div className="">
                    <button type="submit" className="company-btn btn btn-primary">Save</button>
                </div>
            </form>
            <h1></h1>
        </>
    )
}
