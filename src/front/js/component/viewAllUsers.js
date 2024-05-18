import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

export const ViewAllUsers = () => {

    const { store, actions } = useContext(Context);
    const [editedUser, setEditedUser] = useState({ name: '', email: '', password: '' });
    const [editedIndex, setEditedIndex] = useState(null);

    const handleEditUser = (user) => {
        setEditedUser({ name: user.name, email: user.email, password: user.password });
        setEditedIndex(user.id);
    };

    const saveEditedUser = async () => {
        const success = await actions.editUser(editedIndex, editedUser);
        if (success) {
            setEditedUser({ name: '', email: '', password: '' });
            setEditedIndex(null);
        } else {
            alert("Failed to update user");
        }
    };

    useEffect(() => {
        actions.getUsers();
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="title-users mt-5">Users</h1>
            <div className="row">
                {store.users.map(user => (
                    <div key={user.id} className="card-user col-md-4 w-50">
                        <div className="card my-3">
                            <div className="row g-0">
                                <div className="col-md-4 m-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                                    </svg>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        {editedIndex === user.id ? (
                                            <>
                                                <input 
                                                    type="text" 
                                                    value={editedUser.name} 
                                                    onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })} 
                                                    className="form-control mb-2"
                                                    placeholder="Full Name"
                                                />
                                                <input 
                                                    type="email" 
                                                    value={editedUser.email} 
                                                    onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })} 
                                                    className="form-control mb-2"
                                                    placeholder="Email"
                                                />
                                                <input 
                                                    type="password" 
                                                    value={editedUser.password} 
                                                    onChange={(e) => setEditedUser({ ...editedUser, password: e.target.value })} 
                                                    className="form-control mb-2"
                                                    placeholder="Password"
                                                />
                                                <button className="btn btn-success ms-2" onClick={saveEditedUser}>Save</button>
                                            </>
                                        ) : (
                                            <>
                                                <h5 className="card-name">{user.name}</h5>
                                                <p className="card-email">{user.email}</p>
                                                <p className="card-password">{user.password}</p>
                                                <button className="btn btn-danger ms-2" onClick={() => actions.deleteUser(user.id)}>Delete</button>
                                                <button className="btn btn-warning ms-2" onClick={() => handleEditUser(user)}>Edit</button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
