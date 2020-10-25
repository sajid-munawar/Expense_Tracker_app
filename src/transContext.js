import React, { createContext, useReducer } from "react";
import TransactionReducer from "./transReducer";

const initialTransactions = [
    { amount: 500, desc: "Cash" },
    { amount: -100, desc: "Book" },
    { amount: -200, desc: "Camera" }
]
export const TransactionContext = createContext(initialTransactions);


export const TransactionProvider = ({ children }) => {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);


    function addTransaction(transObj) {
        dispatch({
            type: "ADD_Transaction",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc

            },
        })
    }
    return (
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
    // function deleteTransaction() {
    //     dispatch({
    //         type: "Delete_Transaction",
            
    //     })
    //     return {
    //         ...state,
    //         transactions:state.transactions
    //         .filter(transaction=>transaction.id !==action.payload )
    //     }
    // }
}
