import List from "./Catalogue/List";
import Toolbar from "./Catalogue/Toolbar";

/**
 *  This is a component that can be used to manage a catalogue of possible products:
 *  models, boxes, etc. These products aren't yet in the collection and are available
 *  for all users for purchuase.
 * 
 *  Note: possibly we need a better way to deal with source of data for this section.
 *  Ideally, it would auto-update, not require maintenance, and be always in
 *  a valid state. 
 */
export default function Catalogue() {

    return (
        <main className="maincontainer">
            <Toolbar/>
            <List/>
        </main>
    );
};