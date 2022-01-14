/**
 *  A utility function to open a database and expose that object. This function
 *  also automatically sets up the database and makes sure that everything is in
 *  working order.
 */
export default function openDatabase() : Promise<IDBDatabase> {

    return new Promise((resolve:(database:IDBDatabase) => void, reject:() => void) => {

        const request = indexedDB.open('collection', 1);

        request.onupgradeneeded = function(event:any) { setupModels(event.target.result as IDBDatabase); }
        request.onsuccess = function(event:any) { resolve(event.target.result); }
        request.onerror = function() { reject(); }
    });
};

/**
 *  A helper function to setup the models collection.
 */
 function setupModels(database:IDBDatabase) : Promise<void> {

    return new Promise((resolve:() => void, reject:() => void) => {
        
        const models = database.createObjectStore('models', { keyPath: 'id' });

        models.createIndex('id', 'id', { unique: true });

        models.transaction.oncomplete = () => resolve();
        models.transaction.onerror = () => reject();
    });
};
