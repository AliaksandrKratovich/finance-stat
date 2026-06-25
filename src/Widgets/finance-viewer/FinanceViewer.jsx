import FileUploader from "../file-uploader/FileUploader.jsx";
import {useCallback, useContext, useEffect, useState} from "react";
import {DbContext} from "../../App/global/DbContext.jsx";
import {useDbCategories} from "../../Entities/category/model/useDbCategories.js";
import {CategoriesMenu} from "../../Features/categories/ui/CategoriesMenu.jsx";
import {ActiveCategoriesContextProvider} from "../../Features/categories/model/ActiveCategoriesContext.jsx";
import CategoriesChart from "../../Features/chart/ui/CategoriesChart.jsx";
import {Box} from "@mui/material";
import {CategoryItem} from "../../Shared/ui/SumItem.jsx";

export const FinanceViewer = () => {
    const {categories, getAllCategories} = useDbCategories();
    const [activeCategoriesSelectionSum, setActiveCategoriesSelectionSum] = useState(0);

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
                    <Box
                        sx={{
                            display: "flex",
                            width: "100%",
                            flexDirection: "column",
                        }}
                    >
                        <CategoriesChart
                            setActiveCategoriesSelectionSum={setActiveCategoriesSelectionSum}></CategoriesChart>
                        <CategoryItem value={activeCategoriesSelectionSum}></CategoryItem>
                    </Box>
                </Box>

            </ActiveCategoriesContextProvider>

        </>

    );
}