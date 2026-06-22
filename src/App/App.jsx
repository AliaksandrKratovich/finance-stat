import {DbContextProvider} from "../Entities/model/DbContext.jsx";
import {FinanceViewer} from "../Widgets/FinanceViewer.jsx";
import {useState} from "react";
import FileUploader from "../Widgets/FileUploader.jsx";

function App() {
    const [fileLoaded, setFileLoaded] = useState(false);

    const fileUploaded = () => {
        setFileLoaded(true)
    }

    return (
        <DbContextProvider>
            {
                fileLoaded ?
                    <FinanceViewer></FinanceViewer>:
                    <FileUploader fileUploaded={() => setFileLoaded(true)}></FileUploader>

            }
        </DbContextProvider>
    )
}

export default App;
