import {useCallback, useContext, useReducer} from "react";
import {DbContext} from "./DbContext.jsx";
import {categoriesMapper} from "../Models/categoriesMapper.js";

const categoriesReducer = (state, action) => {
    const {db} = action;
    switch (action.type) {
        case "GET_ALL": {
            const result = db.exec(
                "SELECT * FROM category WHERE isRemoved = 0 AND type = 'Expense' ORDER BY position"
            );
            if (!result.length) return [];
            return categoriesMapper.mapFromDb(result[0]);
        }
        case "GET_BY_ID": {
            const {id} = action;
            const result = db.exec(
                `SELECT * FROM category WHERE isRemoved  = 0 AND uid = ${id}`
            );

            if (!result.length) return [];

            return categoriesMapper.mapFromDb(result[0])[0];
        }
    }
}

export const useDbCategories = () => {
    const {db} = useContext(DbContext);
    const [categories, dispatch] = useReducer(categoriesReducer, []);
    const getAllCategories = useCallback(() => {
        dispatch({type: "GET_ALL", db});
    }, [db])

    const getCategoryById = useCallback((id) => {
        dispatch( { type:'GET_BY_ID', id, db });
    }, [db])


    return {categories, getAllCategories, getCategoryById};
}