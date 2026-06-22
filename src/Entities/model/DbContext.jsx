import {createContext, useMemo, useState} from "react";
import {useSqliteDb} from "../../Shared/db/useSqliteDb.js";

export const DbContext = createContext({});

export const DbContextProvider = (props) => {
    const {children} = props;
    const [file, initDb] = useState(null);
    const {tables, loading, loaded, db} = useSqliteDb(file);

    const value = useMemo(() => {
            return ({
                tables,
                initDb,
                loading,
                loaded,
                db
            })
        },
        [
            loading,
            loaded,
            db])
    return <DbContext.Provider value={value}>{children}</DbContext.Provider>
}