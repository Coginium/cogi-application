import useCollection from "../Data/useCollection";
import Model from "../Types/Model";
import useSelectedModels from "./useSelectedModels";

export interface ItemProps {
    model:Model
};

export default function Item(props:ItemProps) {

    const { removeModel } = useCollection();
    const { containsSelected, insertSelected, removeSelected } = useSelectedModels();

    function onRemove() {

        removeModel(props.model.id);
    };

    function onChange(event:any) {

        const target = event.target as HTMLInputElement;

        if (target.checked === true) insertSelected([props.model]);
        else removeSelected([props.model.id]);
    };

    return (
        <div title={`Model: ${props.model.id}`}>
            <input type="checkbox" onChange={onChange} checked={containsSelected(props.model.id)}/>
            {props.model.name} ({props.model.status})
            <button onClick={onRemove}>Remove</button>
        </div>
    );
};