import { Model } from 'cogi-collectibles';
import { useDispatch, useSelector } from 'react-redux';
import deleteModel from '../Storage/deleteModel';
import { selectSelected } from '../Slices/selectedModels';

export interface ItemProps {
    model:Model
};

export default function Item(props:ItemProps) {

    const selected = useSelector(selectSelected);
    const dispatch = useDispatch();

    function onRemove() {

        deleteModel(props.model);
    };

    function onChange(event:any) {

        const target = event.target as HTMLInputElement;

        if (target.checked === true) dispatch({ type: 'selectedModels/add', payload: props.model });
        else dispatch({ type: 'selectedModels/remove', payload: props.model });
    };

    return (
        <div className="card" title={`Model: ${props.model.id}`}>
            <input type="checkbox" onChange={onChange} checked={selected.findIndex((model:Model) => props.model.id === model.id) > -1}/>
            {props.model.name} ({props.model.state})
            <button onClick={onRemove}>Remove</button>
        </div>
    );
};