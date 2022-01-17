import { Model } from "cogi-collectibles";
import wrapIDBRequest from "../Utils/wrapIDBRequest";
import openObjectStore from "./openObjectStore";

export default function deleteModel(model:string|Model) : Promise<void> {

    return openObjectStore('models', 'readwrite').then((objectStore:IDBObjectStore) => {

        const request = objectStore.delete(typeof(model) === 'object' ? model.id : model);

        return wrapIDBRequest(request).then(() => { });
    });
};