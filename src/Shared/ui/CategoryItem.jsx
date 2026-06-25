import {Avatar, Box, createTheme, ThemeProvider} from "@mui/material";
import {indigo, pink} from '@mui/material/colors';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useContext} from "react";
import {ActiveCategoriesContext} from "../../Features/categories/model/ActiveCategoriesContext.jsx";

export const CategoryItem = (props) => {
    const {category} = props;

    const {
        toggleCategory,
        isCategoryActive
    } = useContext(ActiveCategoriesContext);

    const theme = createTheme({
        palette: {
            background: {
                paper: indigo[50],
                paperActive: pink[300],
                paperActiveHover: pink[500],
                hover: indigo[100]
            },
            font: {}
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <Box
                onClick={() => toggleCategory(category)}
                sx={{
                    margin: "5px",
                    flexGrow: 1,
                    height: "30px",
                    backgroundColor: isCategoryActive(category.uid) ? 'background.paperActive' : 'background.paper',
                    border: '2px solid',
                    borderColor: 'info.main',
                    borderRadius: "4px",
                    padding: "5px",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    '&:hover': {
                        backgroundColor: isCategoryActive(category.uid) ? 'background.paperActiveHover' :'background.hover',
                    }
                }}>
                <Box
                    sx={{
                        fontSize: "14px",
                        fontFamily: 'monospace',
                        maxWidth: '80%',
                        fontColor: 'black',
                    }}>
                    {category.title}
                </Box>
                <Avatar
                    sx={{
                        bgcolor: category.color,
                    }}
                >
                    <FontAwesomeIcon icon={`fa-solid ${category.icon}`} style={{color: 'white'}}/>
                </Avatar>
            </Box>
        </ThemeProvider>
    )
}