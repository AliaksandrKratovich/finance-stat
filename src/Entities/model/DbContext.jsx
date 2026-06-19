import {createContext, useContext, useState} from "react";
import {useSqliteDb} from "../../Shared/db/useSqliteDb.js";

export const DbContext = createContext({});

export const DbContextProvider = (props) => {
    const {children} = props;
    const [file, setFile] = useState(null);
    const {tables} = useSqliteDb(file);

    const value = {
        tables,
        setFile
    };
    return <DbContext.Provider value={value}>{children}</DbContext.Provider>
}