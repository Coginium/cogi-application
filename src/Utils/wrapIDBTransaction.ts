/**
 *  A utility function to wrap a IndexedDB transaction into
 *  a promise that is easier to work with.
 */
export default function wrapIDBTransaction(transaction:IDBTransaction) : Promise<IDBTransaction> {

    return new Promise((resolve:(result:IDBTransaction) => void, reject:() => void) => {

        transaction.addEventListener('complete', (ev:any) => void resolve(ev.target));
        transaction.addEventListener('error', () => void reject());
    });
};