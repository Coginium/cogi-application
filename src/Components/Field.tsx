import { ReactNode } from "react";
import './Field.css';

export interface FieldProps {

    /**
     *  The label of the field.
     */
    label:string;

    /**
     *  The actual children. This should be the actual input.
     */
    children:ReactNode;
};

/**
 *  A component for wrapping around an input field inside a form or similar.
 */
export default function Field(props:FieldProps) {

    return (
        <div className="field">
            <label className="field-label">
                {props.label}
            </label>
            <div className="field-content">
                {props.children}
            </div>
        </div>
    );
};