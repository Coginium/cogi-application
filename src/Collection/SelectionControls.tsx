import { Model } from "cogi-collectibles";
import { useDispatch } from "react-redux";
import fetchModels from "../Storage/fetchModels";

/**
 *  A component to manipulate current selection of models.
 */
export default function SelectionControls() {

    const dispatch = useDispatch();

    function unselect() {

        dispatch({ type: "selectedModels/clear" });
    };

    function selectAll() {

        fetchModels().then((models:Array<Model>) => {

            dispatch({ type: "selectedModels/add", payload: models });
        });
    };

    return (
        <div>
            <button onClick={unselect}>Unselect</button>
            <button onClick={selectAll}>Select all</button>
        </div>
    );
};