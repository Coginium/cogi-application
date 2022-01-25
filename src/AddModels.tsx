import { buildModel, PossibleModel } from "cogi-collectibles";
import { FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ModelDefinition from "./AddModels/ModelDefinition";
import { addModels } from "./AddModels/modelsSlice";
import useBox from "./Hooks/useBox";
import storeModels from "./Storage/storeModels";

/**
 *  This a component to add new models to the collection.
 */
export default function AddModels() {

    const params = useParams();
    const { box } = useBox(params.id || '');    // @todo it would be better to have a way to opting out from this call
    const models = useSelector(addModels);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (e:FormEvent) => {

        e.preventDefault();

        storeModels(models.map(buildModel));

        navigate('/collection');
    };

    // at first load we want to clear the current store out of any data that could be there.
    useEffect(() => {

        dispatch({ type: 'addModels/clear' });

    }, [ dispatch ]);

    return (
        <div className="maincontainer">
            <h1>
                Add models
            </h1>
            <form onSubmit={onSubmit}>

                {box && box.models.map((p:PossibleModel, idx:number) => (<ModelDefinition key={idx} model={p} index={idx}/>))}
                <button>Add</button>
            </form>
        </div>
    );
};