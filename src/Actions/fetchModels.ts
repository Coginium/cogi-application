import { Model } from "cogi-collectibles";
import wrapIDBRequest from "../Utils/wrapIDBRequest";
import openDatabase from "./openDatabase";


export default function fetchModels() : Promise<Array<Model>> {

    return openDatabase().then((database:IDBDatabase) => { 

        const transaction = database.transaction([ 'models' ], "readonly");
        const request = transaction.objectStore('models').getAll();

        return wrapIDBRequest(request).then((request:IDBRequest) => request.result);
    });
};