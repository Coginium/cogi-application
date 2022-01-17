import React from "react";
import './HeaderInput.css';

export interface HeaderInputProps {
    
    // @todo add properties related to header
};

export default function HeaderInput(props:HeaderInputProps & React.HTMLProps<HTMLInputElement>) {

    return (
        <input className="headerinput" {...props}/>
    );
};