import { Model } from "cogi-collectibles";
import useModel from "../Hooks/useModel";

export interface ControlsProps {
    model:Model
};

export default function Controls(props:ControlsProps) {

    const { model, removeModel } = useModel(props.model)

    return (
        <div>
            <button onClick={() => removeModel() }>
                Remove
            </button>
        </div>
    );
};