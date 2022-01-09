import { Model, ModelState } from "cogi-collectibles";
import { useSelector } from "react-redux";
import storeModels from "../Actions/storeModels";
import { selectSelected } from "../Slices/selectedModels";

export default function Controls() {

    const selected = useSelector(selectSelected);

    function updateModels(state:ModelState) {

        storeModels(selected.map((model:Model) => Object.assign({ }, model, { state })));
    };

    return (
        <div>
            <button onClick={() => updateModels(ModelState.Unknown)}>Unknown</button>
            <button onClick={() => updateModels(ModelState.Packaged)}>Packaged</button>
            <button onClick={() => updateModels(ModelState.Assembled)}>Assembled</button>
            <button onClick={() => updateModels(ModelState.Primed)}>Primed</button>
            <button onClick={() => updateModels(ModelState.Painted)}>Painted</button>
            <button onClick={() => updateModels(ModelState.Done)}>Done</button>
            <button onClick={() => updateModels(ModelState.Broken)}>Broken</button>
        </div>
    );
};