import { buildModels } from "cogi-collectibles";
import { FormEvent } from "react";
import { useParams } from "react-router-dom";
import ModelDefinition from "./AddModels/ModelDefinition";
import useBox from "./Hooks/useBox";
import storeModels from "./Storage/storeModels";
/**
 *  This a component to add new models to the collection.
 */
export default function AddModels() {

    const params = useParams();
    const { box } = useBox(params.id || '');    // @todo it would be better to have a way to opting out from this call

    const onSubmit = (e:FormEvent) => {

        e.preventDefault();

        const data = new FormData(e.target as HTMLFormElement);

        // storeModels(buildModels(Number(data.get('count')?.toString()), data.get('name')?.toString() || ''));
    };

    return (
        <div className="maincontainer">
            <h1>
                Add models
            </h1>
            <form onSubmit={onSubmit}>

                <ModelDefinition/>
                <ModelDefinition/>
                <button>Add</button>
            </form>
        </div>
    );  
};