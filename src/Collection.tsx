import StateControls from "./Collection/StateControls";
import List from "./Collection/List";
import AddModels from "./Components/AddModels";
import SelectionControls from "./Collection/SelectionControls";
import Actions from "./Collection/Actions";

/**
 *  A component to show the view to manage the entire collection.
 */
export default function Collection() {

    return (
        <div className="maincontainer">
            <AddModels/>
            <StateControls/>
            <SelectionControls/>
            <Actions/>
            <List/>
        </div>
    );
};