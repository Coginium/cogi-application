import StateControls from "./Collection/StateControls";
import List from "./Collection/List";
import AddModels from "./Components/AddModels";
import SelectionControls from "./Collection/SelectionControls";

/**
 *  A component to show the view to manage the entire collection.
 */
export default function Collection() {
    return (
        <div>
            <h1>Collection</h1>
            <AddModels/>
            <StateControls/>
            <SelectionControls/>
            <List/>
        </div>
    )
};