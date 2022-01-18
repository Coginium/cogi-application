import { useEffect, useState } from "react";
/**
 *  A custom hook to get information if the storage
 *  is allowed to be persisted or not.
 */
export default function useStorageManager() {

    const [ persisted, setPersisted ] = useState<boolean|undefined>(undefined);

    useEffect(() => {

        let isMonted = true;

        navigator.storage.persisted().then((result:boolean) => { isMonted && setPersisted(result); });

        return () => { isMonted = true; };

    }, [ persisted, setPersisted ]);

    return {
        persisted: !!persisted
    };
};