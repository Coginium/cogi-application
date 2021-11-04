import { useRecoilState, useRecoilValue } from "recoil";
import { modelsAtom } from "../App";
import { v4 as uuidv4 } from 'uuid';
import Model from "../Types/Model";

export default function useCollection() {

    const [ models, update ] = useRecoilState(modelsAtom);        

    /**
     *  Fech all models in the collection.
     */
    function fetchModels(ids?:Array<string>) : Array<Model> { 

        if (!ids) return models;

        const uniqueIds = new Set(...ids);

        return models.filter((m:Model) => uniqueIds.has(m.id));
    }

    /**
     *  Find a specific model by id.
     */
    function fetchModel(id:string) : Model|null { 

        return fetchModels().find((m:Model) => m.id === id) || null;
    }

    /**
     *  Create a number of models based on provided data.
     */
    function buildModels(count:number, stub:{ name:string }) : void {

        const built:Array<Model> = new Array(count).fill(null).map(() => {

            return {
                id: uuidv4(),
                name: stub.name,
                status: 'unknown'
            };
        });

        update(models.concat(built));
    }

    function removeModel(id:string) : void {

        const updated = models.filter((m:Model) => m.id !== id);

        update(updated);
    }

    return {
        fetchModel,
        fetchModels,
        buildModels,
        removeModel
    };
};


