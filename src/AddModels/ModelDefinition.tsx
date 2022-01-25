import { Model, PossibleModel } from "cogi-collectibles";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './ModelDefinition.css';
import { addModels, insert } from "./modelsSlice";

export interface ModelDefinitionProps {

    /**
     *  The model to show to the user and which user will be allowed to adjust.
     */
    model:PossibleModel;

    /**
     *  The index that this model definition occipies in the overall propopsal.
     */
    index:number;
};

/**
 *  This is a component showing to the user a model from a box. Actually, a possible
 *  model from a box. The user can select which model from the box he wants to add
 *  to the collection.
 */
export default function ModelDefinition(props:ModelDefinitionProps) {

    const possibilities = props.model.possibilities;
    const models = useSelector(addModels);
    const dispatch = useDispatch();

    const setSelected = useCallback((idx:number) => {

        dispatch(insert({
            index: props.index,
            model: props.model.possibilities[idx]
        }));

    }, [ dispatch, props ]);

    // make sure that first element is selected when we first mount
    useEffect(() => void setSelected(0), []);

    return (
        <div className="addmodel-modeldefinition">
            {possibilities.map((p:Partial<Model>, idx:number) => {
                return (
                    <div key={idx}>
                        <input type="radio" checked={ models[props.index]?.name === p.name } onChange={() => setSelected(idx) }/>
                        <input type="text" defaultValue={p.name}/>
                    </div>
                );
            })}
        </div>
    );
};