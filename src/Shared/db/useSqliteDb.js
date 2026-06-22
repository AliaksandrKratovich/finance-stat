import {useEffect, useState} from "react";
import initSqlJs from 'sql.js';

export const useSqliteDb = (file) => {
    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [db, setDb] = useState(null);
    const [tables, setTables] = useState([]);


    useEffect(() => {
        if(!file) {
            return;
        }

        const runSb = async () => {
            setLoading(true);
            const database = await openDatabase(file);
            const tableNames = getAllTables(database);
            setDb(database);
            setTables(tableNames);
            setLoading(false);
            setLoaded(true);
        }

        runSb();

        return () => {
            db?.close();
        };
    }, [file]);

    return {db, tables, loading, loaded};
}

export const openDatabase = async (file) => {
    const SQL = await initSqlJs({
        locateFile: (file) => '/sql-wasm.wasm',
    });

    const buffer = await file.arrayBuffer();
    const db = new SQL.Database(new Uint8Array(buffer));

    return db;
};

export const getAllTables = (db) => {
    const result = db.exec(
        "SELECT name FROM sqlite_master WHERE type='table'"
    );

    if (!result.length) return [];

    return result[0].values.map((row) => row[0] );
};