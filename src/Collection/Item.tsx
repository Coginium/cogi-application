import { Model } from 'cogi-collectibles';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelected } from '../Slices/selectedModels';
import useImage from '../Hooks/useImage';
import Card from '../Components/Card';

export interface ItemProps {
    model:Model
};

export default function Item(props:ItemProps) {

    const selected = useSelector(selectSelected);
    const dispatch = useDispatch();

    const { image } = useImage(props.model);

    function onChange(checked:boolean) {

        if (checked === true) dispatch({ type: 'selectedModels/add', payload: props.model });
        else dispatch({ type: 'selectedModels/remove', payload: props.model });
    };

    const badges = [
        { text: props.model.state, color: `var(--model-state-${props.model.state})` }
    ];

    return (
        <Card 
            title={props.model.name}
            url={`/model/${props.model.id}`}
            selectable={true}
            onSelectChange={onChange}
            selected={!!selected.find((m:Model) => m.id === props.model.id)}
            image={image || ''}
            badges={badges}
        >
        </Card>
    );
};