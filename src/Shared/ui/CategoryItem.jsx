import {Box} from "@mui/material";

export const CategoryItem = (props) => {
const {category} = props;

return (
    <Box
        key={category.uid}
        sx={{
        margin: "5px",
        flexGrow: 1,
        height: "30px",
        borderRadius: "3px",
        borderRadiusColor: "grey",
    }}>{category.title}</Box>
    )
}