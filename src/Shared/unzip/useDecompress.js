import {decompress} from "./decompress.js";
import {useEffect, useState} from "react";

export const useDecompress = (file) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!file) {
            setLoading(false);
            return;
        }

        const load = async () => {
            setLoading(true);
            try {
                const result = await decompress(file);

                setData(result);
            } finally {
                setLoading(false);
            }
        };

        load();
    }, [file]);

    return {data, loading};
}