import openDatabase from "../Actions/openDatabase";

export default function useObjectStoreValues(objectStore:string) {

    const objectStorePromise = 

    const database = openDatabase().then((database:IDBDatabase) => {

        const transaction = database.transaction([ 'models' ], "readonly").;
        const request = transaction.objectStore('models').getAll();

        return 
    });
};