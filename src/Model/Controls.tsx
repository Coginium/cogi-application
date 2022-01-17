import { Model } from "cogi-collectibles";
import useModel from "../Hooks/useModel";

export interface ControlsProps {

    /**
     *  The model that the controls are controlling.
     */
    model:Model;
};

export default function Controls(props:ControlsProps) {

    const { removeModel } = useModel(props.model)

    return (
        <div>
            <button type="button" onClick={() => removeModel() }>Remove</button>
            <button type="submit">Store</button>
        </div>
    );
};