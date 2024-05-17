import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";


export const ViewCategory = () => {
    const { store, actions } = useContext(Context);

    const [editedCategory, setEditedCategory] = useState("");
    const [editedIndex, setEditedIndex] = useState(null);

    const handleEditCategory = (category) => {
        setEditedCategory(category.name);
        setEditedIndex(category.id);
    };

    const saveEditedCategory = () => {
        actions.editCategory(editedIndex, editedCategory);
        setEditedCategory("");
        setEditedIndex(null);
    };

    useEffect(() => {
        actions.getCategories();
    },[])

    return (
        <>
            <div className="container text-center">
                <h1 className="title-categories mt-5">Categories</h1>
                <div>
                    <ul>
                        {store.categories.map((category, index) => (
                            <li key={category.id}>
                                {category.id === editedIndex ? (
                                    <input type="text" value={editedCategory} onChange={(e) => setEditedCategory(e.target.value)} />
                                ) : (
                                    category.name
                                )}
                                {category.id === editedIndex ? (
                                    <button className="btn btn-success ms-2" onClick={saveEditedCategory}>Save</button>
                                ) : (
                                    <>
                                        <button className="btn btn-danger ms-2" onClick={() => actions.deleteCategory(category.id)}>Delete</button>
                                        <button className="btn btn-warning ms-2" onClick={() => handleEditCategory(category)}>Edit</button>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};