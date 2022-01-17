import wrapIDBRequest from "../Utils/wrapIDBRequest";
import openObjectStore from "./openObjectStore";

/**
 *  Store a model in the database.
 */
export default function storeImage(image:Blob, id:string) : Promise<void> {

    return openObjectStore('images', 'readwrite').then((objectStore:IDBObjectStore) => {
        
        return wrapIDBRequest(objectStore.put(image, id)).then((request:IDBRequest) => console.log(request));
    });
};