import {Box} from "@mui/material";
import {indigo} from "@mui/material/colors";

export const CategoryItem = (props) => {
    const {value} = props;

    return (
        <Box
            sx={{
                border: '2px solid',
                borderRadius: "4px",
                borderColor: indigo[100],
                width: '300px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: "14px",
                fontFamily: 'monospace',
            }}
        >
            {value.toFixed(2)}
        </Box>
    )
}