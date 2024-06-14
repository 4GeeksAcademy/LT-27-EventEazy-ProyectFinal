import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams, Link, Navigate} from "react-router-dom";
import { Context } from "../store/appContext";

export const ProfileCompany= () => {
    const { store, actions } = useContext(Context);
    const [user, setUser] = useState({ });
    const navigate = useNavigate();
    const params = useParams();

    const handleSubmit = async (e) => {
        actions.logout()
        navigate("/")
    };
    
    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem("currentUser")));
    },[])

    return(
        <>
        <div className="todo1">
            <div className="email text-end me-5">
                <h3 className="si mt-5 ms-5">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(100, 219, 63)'}} width="28" height="28" fill="currentColor" className="bi bi-envelope-at-fill mb-2 me-2" viewBox="0 0 16 16">
                        <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
                        <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
                    </svg>
                    Company email
                </h3>
                <span className="email ms-5">{user.email}</span>
            </div>
            <div className="body-total mx-5">
                <div className="foto-perfil">
                    <div className="row">
                        <div className="col-4">
                            <img src="https://img.freepik.com/vector-premium/lluvia-ideas-equipo-aislado-ilustraciones-vectoriales-dibujos-animados_107173-22432.jpg"  height="300px" />
                        </div>
                        <div className="col-8 imagen-perfil align-content-end">
                            <h1 className="titleG" style={{fontSize: '60px'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-exclude mb-3 me-3" viewBox="0 0 16 16">
                                    <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm12 2H5a1 1 0 0 0-1 1v7h7a1 1 0 0 0 1-1z"/>
                                </svg>
                                {user.name}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mision-v-v mt-5">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-5">
                            <img src="https://chpeti20182916533.home.blog/wp-content/uploads/2019/03/mision.png" width="500px" />
                        </div>
                        <div className="col-7 align-content-center">
                            <h2>Mission</h2>
                            <p>
                                “Provide the best user experience to consumers through innovation in both its products and its systems and customer service.”
                            </p>
                            <p>
                                Event Eazy's mission is focused directly on its products. If what differentiates you from the competition is the product/service you created, this is a great example of a mission for you.
                            </p>
                        </div>
                        <div className="col-7 mt-5 align-content-center">
                            <h2>Vision</h2>
                            <p>
                                In the vision, you can give yourself permission to dream a little more. In this case, Apple thought about what it would achieve in the future by creating the most innovative products:
                            </p>
                            <p>
                                “Event Eazy is dedicated to creating the best products on the planet and for the planet, to leave the world better than we found it.”
                            </p>
                            <p>
                                Innovation, simplicity, focusing only on projects that have a true impact and acting in favor of the environment and sustainability are the way in which the brand plans to achieve its vision.
                            </p>
                        </div>
                        <div className="col-5">
                            <img src="https://i0.wp.com/mymeadowreport.com/wp-content/uploads/2020/01/img_1111.jpg?fit=1000%2C750&ssl=1" className="rounded" width="500px" />
                        </div>
                        <div className="col-5 mt-5">
                            <img src="https://blog.feedbalia.com/wp-content/uploads/2017/10/3ef9909cf8084975b610abe1b4cb027b.png" width="500px" />
                        </div>
                        <div className="col-7 align-content-center">
                            <h2>Values</h2>
                            <p>
                                There is no doubt that innovation is one of the company's strongest values. On the other hand, other values ​​that stand out are:
                            </p>
                            <p>
                                o Accessibility: that all people have access and can use the products easily.
                            </p>
                            <p>
                                o Inclusion and diversity.
                            </p>
                            <p>
                                o Excellence.
                            </p>
                            <p>
                                o Environment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
        </>
    )
}
