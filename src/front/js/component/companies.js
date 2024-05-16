import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link} from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";


const Companies = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()

    return (
        <>
            <div className="">
                <Link to="/add">
                    <button className="btn btn-primary ">Add new company</button>
                </Link>
            </div>
            <div className="container-fluid m-3 p-3 ">
                <div className=" ">
                    <h1 className="text-center text-secondary">Companies</h1>
                    {store.companies &&
                        store.companies.length > 0 &&
                        store.companies.map((company) => {
                            return (
                                <div key={company.id} className="card w-100  m-3 border border-3 rounded  p-2 text-dark bg-opacity-10" style={{ width: "540px" }}>
                                    <div className="row ">
                                        <div className="col-2 ">
                                            <img
                                                src={rigoImage}
                                                className="rounded-circle"
                                                alt="..."
                                            />
                                        </div>
                                        <div className="col-8">
                                            <div className="card-body">
                                                <h5 className="card-title"><span className="border-bottom">{company.name}</span></h5>
                                                <p className="card-text"><span className="border-bottom">{company.email}</span></p>
                                                <p className="card-text">
                                                    <small className="text-body-secondary">
                                                        <span className="border-bottom">{company.password}</span>
                                                    </small>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="d-flex col-2  justify-content-around my-5">
                                            <div >
                                                <i role="button" onClick={() => navigate("/edit/" + company.id)} className="bi bi-pen-fill fs-5 rounded-circle" ></i>
                                            </div>
                                            <div>
                                                <i role="button" onClick={() => actions.deleteCompany(company.id)} className="bi bi-trash-fill fs-5 rounded-circle"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )

                        })}
                </div>
            </div>
        </>
    );
};

export default Companies;
