import { atom } from "recoil";
import Controls from "./Collection/Controls";
import List from "./Collection/List";
import AddModels from "./Components/AddModels";

export const selectedModelsAtom = atom<Array<string>>({
    key: 'collection-selected-models',
    default: []
});

/**
 *  A component to show the view to manage the entire collection.
 */
export default function Collection() {
    return (
        <div>
            <h1>Collection</h1>
            <AddModels/>
            <Controls/>
            <List/>
        </div>
    )
};