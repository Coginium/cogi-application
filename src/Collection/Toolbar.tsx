import Actions from "./Toolbar/Actions";
import SelectionControls from "./Toolbar/SelectionControls";
import StateControls from "./Toolbar/StateControls";
import './Toolbar.css';

/**
 *  A component to show toolbar buttons with actions for the whole colection.
 */
export default function Toolbar() {

    return (
        <div className="collection-toolbar">
            <SelectionControls/>
            <StateControls/>
            <Actions/>
        </div> 
    );
};