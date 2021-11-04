import { useRecoilState } from "recoil";
import { selectedModelsAtom } from "../Collection";
import useCollection from "../Data/Collection";
import Model from "../Types/Model";

export interface ItemProps {
    model:Model
};

export default function Item(props:ItemProps) {

    const { removeModel } = useCollection();
    const [ checked, update ] = useRecoilState(selectedModelsAtom);

    function onRemove() {

        removeModel(props.model.id);
    };

    function onChange(event:any) {

        const target = event.target as HTMLInputElement;

        if (target.checked === true) update([...checked, props.model.id ]);

        else update(checked.filter((id:string) => id !== props.model.id));
    };

    return (
        <div>
            <input type="checkbox" onChange={onChange} checked={!!checked.find((id:string) => id === props.model.id)}/>
            {props.model.name}
            <button onClick={onRemove}>Remove</button>
        </div>
    );
};