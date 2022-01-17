import wrapIDBRequest from "../Utils/wrapIDBRequest";
import openObjectStore from "./openObjectStore";

export default function fetchImage(id:string) : Promise<string|null> {

    return openObjectStore('images', 'readonly').then((objectStore:IDBObjectStore) => {

        const request = objectStore.get(id);

        return wrapIDBRequest(request).then((request:IDBRequest) => {

            if (!request.result) return null;

            const url = window.URL.createObjectURL(request.result);

            return url;
        });
    });
};