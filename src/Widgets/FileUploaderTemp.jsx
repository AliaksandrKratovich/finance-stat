import React, { useState } from 'react';
import initSqlJs from 'sql.js';

const FileUploaderTemp = () => {
    const [data, setData] = useState([]);

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        try {
            const SQL = await initSqlJs({
                locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/${file}`
            });

            const buffer = await file.arrayBuffer();
            const db = new SQL.Database(new Uint8Array(buffer));

            const result = db.exec('SELECT * FROM my_table');
            if (result.length > 0) {
                const columns = result[0].columns;
                const rows = result[0].values.map(row =>
                    Object.fromEntries(columns.map((col, i) => [col, row[i]]))
                );
                setData(rows);
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <input type="file" accept=".db" onChange={handleFileChange} />
            <table border="1">
                <thead>
                <tr>
                    {data.length > 0 && Object.keys(data[0]).map(key => <th key={key}>{key}</th>)}
                </tr>
                </thead>
                <tbody>
                {data.map((row, idx) => (
                    <tr key={idx}>
                        {Object.values(row).map((val, i) => <td key={i}>{String(val)}</td>)}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default FileUploaderTemp;