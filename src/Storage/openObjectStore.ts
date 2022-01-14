import openDatabase from "./openDatabase";
import { emit } from './exchange';

/**
 *  This is a function to open a specific object store inside our IndexedDB.
 */
export default function openObjectStore(name:string, mode:'readwrite'|'readonly') : Promise<IDBObjectStore> {

    return openDatabase().then((database:IDBDatabase) => {

        const transaction = database.transaction([ name ], mode);
        const objectStore = transaction.objectStore(name);

        if (mode === 'readonly') return objectStore;

        /**
         *  @note This is a very naive implementation of listeninig
         *  to when a transaction that COULD change somethng finishes.
         *  Instead we should check somehow if the transaction changed
         *  something in the object store.
         */
        transaction.addEventListener('complete', () => void emit(name));

        return objectStore;
    });
};