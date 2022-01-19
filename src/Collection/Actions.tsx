import { Model } from "cogi-collectibles";
import { useDispatch, useSelector } from "react-redux";
import { selectSelected } from "../Slices/selectedModels";
import deleteModel from "../Storage/deleteModel";

/**
 *  This is a component responsible for grouping actions that can
 *  be performed on a whole collection of selected models at once.
 */
export default function Actions() {

    const selected = useSelector(selectSelected);
    const dispatch = useDispatch();

    function removeModels() {

        selected.forEach((m:Model) => deleteModel(m));

        dispatch({ type: "selectedModels/clear" });
    };

    return (
        <div>
            <button disabled={selected.length > 0} onClick={removeModels}>Remove</button>
        </div>
    );
};