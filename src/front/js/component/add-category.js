import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const AddCategory = () => {
    const { store, actions } = useContext(Context);

    const navigatingToMain = useNavigate();
    const [category, setCategory] = useState ({name: ''});

    const saveAndSendCategory = () => {
        if (category.name.trim() === '') {
            alert('Please enter the category!')
        } else {
            actions.addCategory(category.name);
            navigatingToMain('/categories');
        }
    };

    const onKeyDownSaveAndSend = (e) => {
        if (e.key === 'Enter') {
            saveAndSendCategory();
        }
    };

    return (
        <>
            <div>
                <Link to="/categories">
                    <a class="back-categories" href="#"><h5>Return to categories</h5></a>
                </Link>
                <h1 className="add-title mt-5">Add a new category</h1>
                <div className="form-floating mb-3 mt-2">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Enter the name"
                        value={category.name} onKeyDown={onKeyDownSaveAndSend} onChange={(e) => setCategory({ name: e.target.value })} />
                    <label htmlFor="floatingInput">Category name</label>
                </div>
                <div className="form-floating">
                    <div className="button-save text-end mt-3">
                        <button type="button" className="btn btn-primary" onClick={saveAndSendCategory}>Save</button>
                    </div>
                </div>
            </div>
        </>
    );
};