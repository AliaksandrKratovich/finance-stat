import {useState} from 'react'
import {Box, createTheme, Stack, ThemeProvider} from "@mui/material";
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import FileUploader from "../Widgets/FileUploader.jsx";

function App() {
    const [count, setCount] = useState(0)




    return (
<FileUploader></FileUploader>
    )
}

export default App;
