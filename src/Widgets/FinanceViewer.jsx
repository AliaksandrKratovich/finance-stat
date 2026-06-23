import FileUploader from "./FileUploader.jsx";
import {useContext, useEffect} from "react";
import {DbContext} from "../Entities/model/DbContext.jsx";
import {useCategories} from "../Entities/model/useCategories.js";
import {CategoriesMenu} from "../Features/CategoriesMenu.jsx";
import {ActiveCategoriesContextProvider} from "../Entities/model/ActiveCategoriesContext.jsx";

export const FinanceViewer = () => {
    const {categories, getAllCategories} = useCategories();
    useEffect(() => {
        getAllCategories();
    }, [getAllCategories])

    return (
        <>
            <ActiveCategoriesContextProvider>
                <CategoriesMenu></CategoriesMenu>
            </ActiveCategoriesContextProvider>

        </>

    );
}