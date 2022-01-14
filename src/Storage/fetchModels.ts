import { Model } from "cogi-collectibles";
import wrapIDBRequest from "../Utils/wrapIDBRequest";
import openObjectStore from "./openObjectStore";


export default function fetchModels() : Promise<Array<Model>> {

    return openObjectStore('models', 'readonly').then((objectStore:IDBObjectStore) => { 

        const request = objectStore.getAll();

        return wrapIDBRequest(request).then((request:IDBRequest) => request.result);
    });
};