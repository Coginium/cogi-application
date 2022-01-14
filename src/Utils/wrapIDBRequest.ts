/**
 *  An utility to wrap an IndexedDB request in a promise
 *  which is easier to work with.
 */
export default function wrapIDBRequest(request:IDBRequest) : Promise<IDBRequest> {

    return new Promise((resolve:(request:IDBRequest) => void, reject: () => void) => {

        request.addEventListener('success', () => void resolve(request));
        request.addEventListener('error', () => void reject());
    });
};