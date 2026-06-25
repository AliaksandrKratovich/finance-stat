import {DbContextProvider} from "./global/DbContext.jsx";
import {FinanceViewer} from "../Widgets/finance-viewer/FinanceViewer.jsx";
import {useState} from "react";
import FileUploader from "../Widgets/file-uploader/FileUploader.jsx";
import {CategoryItem} from "../Shared/ui/CategoryItem.jsx";
import EChartsReact from "react-echarts-library";

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
