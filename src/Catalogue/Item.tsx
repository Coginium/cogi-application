import { Box, buildModels, Model, ModelState } from "cogi-collectibles";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
import storeModels from "../Storage/storeModels";

export interface ItemProps {
    box:Box;
};

export default function Item(props:ItemProps) {

    const box = props.box;

    function toCollection() {

        storeModels(buildModels(box).map((model:Model) => Object.assign<{ }, Model, Partial<Model>>({ }, model, { state: ModelState.Packaged }) ));
    };

    const badges = [
        { text: box.availability, color: 'black' },
        { text: `${box.models.length} models`, color: 'black' }
    ];

    return (
        <Card
            title={box.name}
            badges={badges}
        >
            <Link to={`/new-model/box/${props.box.id}`}><button>To collection</button></Link>
        </Card>
    );
};