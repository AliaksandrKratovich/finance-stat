import {useDbCategories} from "../../../Entities/category/model/useDbCategories.js";
import {Box} from "@mui/material";
import {CategoryItem} from "../../../Shared/ui/CategoryItem.jsx";
import {useEffect} from "react";

export const CategoriesMenu = () => {
    const {categories, getAllCategories, getCategoryById} = useDbCategories()
    useEffect(() => {
        getAllCategories();
    }, []);

    return (
        <Box
            sx={{
                display: 'flex',
                width: '200px',
                flexDirection: 'column',
                justifyContent: 'center',

            }}
        >
            {categories.map((category) => (
                <CategoryItem
                    key={category.uid}
                    category={category}
                ></CategoryItem>
            ))}
        </Box>
    )
}