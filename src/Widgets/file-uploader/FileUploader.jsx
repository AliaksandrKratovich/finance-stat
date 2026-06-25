import {useDropzone} from "react-dropzone";
import {Box, CircularProgress, createTheme, ThemeProvider} from "@mui/material";
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import {useContext, useEffect, useState} from "react";
import {useDecompress} from "../../Shared/unzip/useDecompress.js";
import {DbContext} from "../../App/global/DbContext.jsx";
import {indigo} from '@mui/material/colors';

const FileUploader = (props) => {
    const {fileUploaded} = props;
    const [file, setFile] = useState(null);
    const {data, loading: decompressLoading} = useDecompress(file);
    const {
        initDb: setDbFile,
        loading: dbLoading,
        loaded: dbLoaded,
    } = useContext(DbContext);

    useEffect(() => {
        if (!data) {
            return;
        }
        setDbFile(data)
    }, [data]);

    useEffect(() => {
        if(dbLoaded) {
            fileUploaded();
        }
    }, [dbLoaded])
    const onDrop = (files) => {
        setFile(files[0])
    };
    const {getRootProps, getInputProps} = useDropzone({onDrop});

    const theme = createTheme({
        palette: {
            background: {
                paper: '#fff',
                hover: indigo[50]
            }
        }
    });

    const isDataPreparing = () => {
        return decompressLoading || dbLoading;
    }

    if (isDataPreparing()) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -70%)',
                    position: 'absolute',
                }}>
                <CircularProgress
                    enableTrackSlot
                    size="60px"
                    aria-label="Loading…"/>
            </Box>

        )
    }

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
                    boxShadow: 3,
                    transform: 'translate(-50%, -70%)',
                    '&:hover': {
                        cursor: 'pointer',
                        backgroundColor: 'background.hover',
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