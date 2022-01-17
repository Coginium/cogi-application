import { Model } from "cogi-collectibles";
import wrapIDBRequest from "../Utils/wrapIDBRequest";
import openObjectStore from "./openObjectStore";

export default function fetchModel(id:string) : Promise<Model> {

    return openObjectStore('models', 'readonly').then((objectStore:IDBObjectStore) => {

        const request = objectStore.get(id);

        return wrapIDBRequest(request).then((request:IDBRequest) => request.result);
    });
};