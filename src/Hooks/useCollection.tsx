import { Model } from "cogi-collectibles";
import { useEffect, useState } from "react";
import { listen } from "../Storage/exchange";
import fetchModels from "../Storage/fetchModels";

/**
 *  A hook to get all models from collection. It automatically changes
 *  state when user adds/removes/modifies models and gives access to
 *  the update collection.
 */
export default function useCollection() {

    const [ collection, setCollection ] = useState<Array<Model>|null>(null);

    useEffect(() => {

        let isMounted = true;

        if (collection === null) fetchModels().then((models:Array<Model>) => { isMounted && setCollection(models); });

        return () => { isMounted = false };
    }, [ collection, setCollection ]);

    useEffect(() => {

        const cancelListener = listen('models', () => setCollection(null));

        return () => cancelListener();
    }, [])

    return {
        collection: collection || []
    };
};