import {useDropzone} from "react-dropzone";
import {Box, createTheme, ThemeProvider} from "@mui/material";
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import {useCallback} from "react";

const FileUploader = () => {
    const onDrop = useCallback((files) => {
        console.log(files);
    })
    const {getRootProps, getInputProps} = useDropzone({onDrop});

    const theme = createTheme({
        palette: {
            background: {
                paper: '#fff'
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    minWidth: '450px',
                    minHeight: '250px',
                    width: '20%',
                    height: '20%',
                    borderRadius: '10px',
                    border: '2px dashed',
                    borderColor: 'info.main',
                    backgroundColor: 'background.paper',
                    position: 'absolute',
                    display: 'flex',
                    justifyContent: 'center',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -70%)',
                    '&:hover': {
                        cursor: 'pointer',
                    }
                }}
                {...getRootProps()}
            >
                <input {...getInputProps()} />
                <Box
                    sx={{
                        alignSelf: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        fontFamily: 'Monospace',
                        fontWeight: 'bold',
                        fontSize: '19px',
                        color: 'grey'
                    }}>
                    <CloudUploadOutlinedIcon
                        sx={{

                            color: 'grey',
                            fontSize: '50px',
                        }}
                    ></CloudUploadOutlinedIcon>
                    Upload the file
                </Box>

            </Box>
        </ThemeProvider>
    )
}

export default FileUploader;