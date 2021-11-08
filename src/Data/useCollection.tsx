import { useRecoilState } from "recoil";
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

        const uniqueIds = new Set(ids);

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

    /**
     *  Remove model.
     */
    function removeModel(id:string) : void {

        const updated = models.filter((m:Model) => m.id !== id);

        update(updated);
    }

    /**
     *  Update existing models or insert new models.
     */
    function upsertModels(input:Array<Model>) {

        const updated = [...models];

        for (let m of input) {

            const idx = updated.findIndex((s:Model) => s.id === m.id);

            if (idx === -1) updated.push(m);
            else updated.splice(idx, 1, m);
        }

        update(updated);
    }

    return {
        fetchModel,
        fetchModels,
        buildModels,
        upsertModels,
        removeModel
    };
};
