/**
 *  A utility function to open a database and expose that object. This function
 *  also automatically sets up the database and makes sure that everything is in
 *  working order.
 */
export default function openDatabase() : Promise<IDBDatabase> {

    return new Promise((resolve:(database:IDBDatabase) => void, reject:() => void) => {

        const request = indexedDB.open('collection', 2);
        
        request.onsuccess = function(event:any) { resolve(event.target.result); }
        request.onerror = function() { reject(); }

        request.onupgradeneeded = function(event:any) {

            console.log('onupgrade');

            const database = event.target.result as IDBDatabase;

            if (!('models' in database.objectStoreNames)) setupModels(database);
            if (!('images' in database.objectStoreNames)) setupImages(database);
            
            const stores = database.objectStoreNames;

            if (!stores.contains('models')) setupModels(database);
            if (!stores.contains('images')) setupImages(database);
        };
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

function setupImages(database:IDBDatabase) : Promise<void> {

    return new Promise((resolve:() => void, reject:() => void) => {

        const images = database.createObjectStore('images');

        images.createIndex('id', 'id', { unique: true });

        images.transaction.oncomplete = resolve;
        images.transaction.onerror = reject;
    });
};
