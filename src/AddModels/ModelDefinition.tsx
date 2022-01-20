import { Model, PossibleModel } from "cogi-collectibles";
import { useState } from "react";
import './ModelDefinition.css';

export interface ModelDefinitionProps {

    /**
     *  The model to show to the user and which user will be allowed to adjust.
     */
    model:PossibleModel;
};

/**
 *  This is a component showing to the user a model from a box. Actually, a possible
 *  model from a box. The user can select which model from the box he wants to add
 *  to the collection.
 */
export default function ModelDefinition(props:ModelDefinitionProps) {

    const [ selected, setSelected ] = useState<number>(0);

    const models = props.model.possibilities;

    console.log(selected);

    return (
        <div className="addmodel-modeldefinition">
            {models.map((p:Partial<Model>, idx:number) => {
                return (
                    <div key={idx}>
                        <input type="radio" checked={ idx === selected } onChange={() => setSelected(idx) }/>
                        <input type="text" defaultValue={p.name}/>
                    </div>
                );
            })}
        </div>
    );
};