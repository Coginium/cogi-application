import { Model } from "cogi-collectibles";
import wrapIDBRequest from "../Utils/wrapIDBRequest";
import openDatabase from "./openDatabase";

/**
 *  Store a model in the database.
 */
export default function storeModel(model:Model) : Promise<Model> {

    return openDatabase().then((database:IDBDatabase) => {

        const transaction = database.transaction([ 'models' ], "readwrite");
        const objectStore = transaction.objectStore('models');

        return wrapIDBRequest(objectStore.put(model)).then(() => model);
    });
};