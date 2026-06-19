import {useState} from 'react'
import FileUploader from "../Widgets/FileUploader.jsx";
import {DbContextProvider} from "../Entities/model/DbContext.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <DbContextProvider>
            <FileUploader></FileUploader>
        </DbContextProvider>
    )
}

export default App;
