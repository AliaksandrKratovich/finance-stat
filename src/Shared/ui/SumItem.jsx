import {Box} from "@mui/material";
import {indigo} from "@mui/material/colors";

export const CategoryItem = (props) => {
    const {value, title} = props;

    return (
        <Box
            sx={{
                margin: '10px',
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
                flexDirection: 'column',
            }}
        >
            <Box component="span" sx={{ marginBottom: '10px', fontWeight: 'bold', px: 1 }}>
                {title}
            </Box>
            <span>{value.toFixed(2)}</span>
        </Box>
    )
}