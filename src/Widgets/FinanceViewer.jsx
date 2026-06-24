import FileUploader from "./FileUploader.jsx";
import {useContext, useEffect} from "react";
import {DbContext} from "../Entities/model/DbContext.jsx";
import {useDbCategories} from "../Entities/model/useDbCategories.js";
import {CategoriesMenu} from "../Features/CategoriesMenu.jsx";
import {ActiveCategoriesContextProvider} from "../Entities/model/ActiveCategoriesContext.jsx";
import CategoriesChart from "../Features/CategoriesChart.jsx";
import {Box} from "@mui/material";

export const FinanceViewer = () => {
    const {categories, getAllCategories} = useDbCategories();
    useEffect(() => {
        getAllCategories();
    }, [getAllCategories])

    return (
        <>
            <ActiveCategoriesContextProvider>
                <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                }}
                >
                    <CategoriesMenu></CategoriesMenu>
                    <CategoriesChart></CategoriesChart>
                </Box>

            </ActiveCategoriesContextProvider>

        </>

    );
}