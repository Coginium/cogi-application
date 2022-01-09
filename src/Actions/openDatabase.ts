
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

/**
 *  A utility function to open a database and expose a database object.
 */
export default function openDatabase() : Promise<IDBDatabase> {

    return new Promise((resolve:(database:IDBDatabase) => void, reject:() => void) => {

        const request = indexedDB.open('collection', 1);

        request.onupgradeneeded = function(event:any) {

            const database = event.target.result as IDBDatabase;

            setupModels(database);
        };

        request.onsuccess = function(event:any) {

            resolve(event.target.result);
        };
    });
};