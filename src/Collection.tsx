import List from "./Collection/List";
import Toolbar from "./Collection/Toolbar";

/**
 *  A component to show the view to manage the entire collection.
 */
export default function Collection() {

    return (
        <div className="maincontainer">
            <Toolbar/>
            <List/>
        </div>
    );
};