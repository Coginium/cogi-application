import { Box, buildModels, Model, ModelState } from "cogi-collectibles";
import storeModels from "../Actions/storeModels";

export interface ItemProps {
    box:Box;
};

export default function Item(props:ItemProps) {

    const box = props.box;

    function toCollection() {

        storeModels(buildModels(box).map((model:Model) => Object.assign<{ }, Model, Partial<Model>>({ }, model, { state: ModelState.Packaged }) ));
    };

    return (
        <div>
            <div>Name: {box.name}</div>
            <div>Availability: {box.availability}</div>
            <div>Models count: {box.models.length}</div> 
            <button onClick={toCollection}>To collection</button>
        </div> 
    );
};