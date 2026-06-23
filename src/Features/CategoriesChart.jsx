import {useContext, useEffect, useState} from "react";
import {ActiveCategoriesContext} from "../Entities/model/ActiveCategoriesContext.jsx";
import {Box} from "@mui/material";
import {useDbTransactions} from "../Entities/model/useDbTransactions.js";

export const CategoriesChart = () => {
    const {activeCategories} = useContext(ActiveCategoriesContext);
    const [transactionGroups, setTransactionGroups] = useState([]);

    const {transactions, getByCategory} = useDbTransactions();

    useEffect(() => {
        activeCategories.forEach(category => {
            getByCategory(category.uid)
        });

    }, [getByCategory, activeCategories])
    return (
        <>
        <Box
        sx={{
            width: "400px",
            height: "400px",
            border: "1px solid gray",
        }}
        >

        </Box>

        </>
    );
}