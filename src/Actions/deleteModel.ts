import { Model } from "cogi-collectibles";
import wrapIDBRequest from "../Utils/wrapIDBRequest";
import openDatabase from "./openDatabase";

export default function deleteModel(model:Model) : Promise<void> {

    return openDatabase().then((database:IDBDatabase) => {

        const transaction = database.transaction([ 'models' ], "readwrite");
        const objectStore = transaction.objectStore('models');

        const request = objectStore.delete(model.id);

        return wrapIDBRequest(request).then(() => { });
    });
};