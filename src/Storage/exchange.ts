/**
 *  This file provides an exchange that our database actions can use
 *  to notify about changes to the database. This notification can
 *  be listen to with listen() function and functions that are
 *  aware about the changes can use emit() function to post
 *  information which object store changed.
 * 
 *  @todo would be nice to know more specifics about the change
 *  @todo use BroadcastChannel for cross-tab changes and
 *  cross-worker changes.
 */

const listeners:Map<string, Set<() => void>> = new Map();

/**
 *  Listen to changes of a specific object store.
 */
export function listen(objectStore:string, callback:() => void) : () => void {

    const storeListeners = listeners.get(objectStore) || new Set();
    storeListeners.add(callback);

    listeners.set(objectStore, storeListeners);

    return () => void storeListeners.delete(callback);
};

/**
 *  Tell that a specific object store changed.
 */
export function emit(objectStore:string) : void {

    const storeListeners = listeners.get(objectStore);

    if (!storeListeners) return;

    for (let callback of storeListeners) callback();
};