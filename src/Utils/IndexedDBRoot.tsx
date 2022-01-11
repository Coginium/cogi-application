import React from "react";

export const IndexedDBContext = React.createContext('unknownDB');

export interface IndexedDBRootProps {
    database:string;
    children:React.ReactNode;
};

export default function(props:IndexedDBRootProps) {

    return (
        <IndexedDBContext.Provider value="{props.database}">
            {props.children}
        </IndexedDBContext.Provider>
    );
};