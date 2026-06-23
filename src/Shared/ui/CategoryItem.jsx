import {Box, createTheme, ThemeProvider} from "@mui/material";
import {indigo} from '@mui/material/colors';

export const CategoryItem = (props) => {
    const {category} = props;

    const theme = createTheme({
        palette: {
            background: {
                paper: indigo[50],
                hover: indigo[100]
            },
            font: {

            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    margin: "5px",
                    flexGrow: 1,
                    height: "30px",
                    backgroundColor: 'background.paper',
                    border: '2px solid',
                    borderColor: 'info.main',
                    borderRadius: "4px",
                    padding: "5px",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    '&:hover': {
                        backgroundColor: 'background.hover',
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
            </Box>
        </ThemeProvider>
    )
}