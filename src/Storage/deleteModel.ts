import { Model } from "cogi-collectibles";
import wrapIDBRequest from "../Utils/wrapIDBRequest";
import openObjectStore from "./openObjectStore";

export default function deleteModel(model:Model) : Promise<void> {

    return openObjectStore('models', 'readwrite').then((objectStore:IDBObjectStore) => {

        const request = objectStore.delete(model.id);

        return wrapIDBRequest(request).then(() => { });
    });
};