import {useCallback, useContext, useReducer} from "react";
import {DbContext} from "../../../App/global/DbContext.jsx";
import {transactionsMapper} from "./transactionsMapper.js";

const transactionsReducer = (state, action) => {
    const {db} = action;
    switch (action.type) {
        case "GET_BY_CATEGORY": {
            const {id} = action;
            const result = db.exec(
                `SELECT t.* FROM 'transaction' t
                          JOIN sync_link sl_cat
                               ON sl_cat.entityType = 'Transaction'
                                   AND sl_cat.entityUid = t.uid
                                   AND sl_cat.otherType = 'Category'
                                   AND sl_cat.otherUid = '${id}'
                 WHERE t.type = 'Expense'
                   AND t.isRemoved = 0
                   AND sl_cat.isRemoved = 0;
                `
        );
            const fetched = result.length ? transactionsMapper.mapFromDb(result[0]) : [];

            return {
                ...state,
                [id]: fetched
            };
        }
        case "RESET": {
            return {
            };
        }
    }
}

export const useDbTransactions = () => {
    const {db} = useContext(DbContext);
    const [transactionsByCategory, dispatch] = useReducer(transactionsReducer, {});

    const getByCategory = useCallback((id) => {
        dispatch({type: 'GET_BY_CATEGORY', id, db});
    }, [db])

    const reset = useCallback(() => {
        dispatch({type: 'RESET', db});
    }, [db])


    return {transactionsByCategory, getByCategory, reset};
}