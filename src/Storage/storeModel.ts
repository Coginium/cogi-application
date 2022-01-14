import { Model } from "cogi-collectibles";
import wrapIDBRequest from "../Utils/wrapIDBRequest";
import openObjectStore from "./openObjectStore";

/**
 *  Store a model in the database.
 */
export default function storeModel(model:Model) : Promise<Model> {

    return openObjectStore('models', 'readwrite').then((objectStore:IDBObjectStore) => {
        
        return wrapIDBRequest(objectStore.put(model)).then(() => model);
    });
};