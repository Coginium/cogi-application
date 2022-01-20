import { Model, ModelState } from "cogi-collectibles";
import { useSelector } from "react-redux";
import storeModels from "../../Storage/storeModels";
import { selectSelected } from "../../Slices/selectedModels";

/**
 *  A component to change state of models
 */
export default function StateControls() {

    const selected = useSelector(selectSelected);

    function updateModels(state:ModelState) {

        storeModels(selected.map((model:Model) => Object.assign({ }, model, { state })));
    };

    return (
        <div className="buttonsrow buttonsrow-narrow">
            <button className="button-unknown" onClick={() => updateModels(ModelState.Unknown)}>Unknown</button>
            <button className="button-packaged" onClick={() => updateModels(ModelState.Packaged)}>Packaged</button>
            <button className="button-assembled" onClick={() => updateModels(ModelState.Assembled)}>Assembled</button>
            <button className="button-primed" onClick={() => updateModels(ModelState.Primed)}>Primed</button>
            <button className="button-painted" onClick={() => updateModels(ModelState.Painted)}>Painted</button>
            <button className="button-done" onClick={() => updateModels(ModelState.Done)}>Done</button>
            <button className="button-broken" onClick={() => updateModels(ModelState.Broken)}>Broken</button>
        </div>
    );
};