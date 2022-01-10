import { Box, buildModels } from "cogi-collectibles";
import storeModels from "../Actions/storeModels";

export interface ItemProps {
    box:Box;
};

export default function Item(props:ItemProps) {

    const box = props.box;

    function toCollection() {

        storeModels(buildModels(box));
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