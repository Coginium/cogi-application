import { useEffect, useState } from "react";
/**
 *  A custom hook to get information if the storage
 *  is allowed to be persisted or not.
 */
export default function useStorageManager() {

    const [ persisted, setPersisted ] = useState<boolean|undefined>(undefined);

    useEffect(() => {

        let isMounted = true;

        navigator.storage.persisted().then((result:boolean) => {

            return result ? Promise.resolve(result) : navigator.storage.persist();

        }).then((result:boolean) => void isMounted && setPersisted(result));

        return () => { isMounted = true; };

    }, [ persisted, setPersisted ]);

    return {
        persisted: !!persisted
    };
};