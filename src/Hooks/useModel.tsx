import { Model } from "cogi-collectibles";
import { useEffect, useState } from "react";
import deleteModel from "../Storage/deleteModel";
import { listen } from "../Storage/exchange";
import fetchModel from "../Storage/fetchModel";
import storeModel from "../Storage/storeModel";

/**
 *  A custom hook to load a specific model based on model object or string.
 * 
 *  The hook offers the model as well as functions to update or remove the model.
 */
export default function useModel(initial:Model|string) {

    const [ model, setModel ] = useState<Model|null|undefined>(typeof(initial) === 'object' ? initial : undefined);

    const id = typeof(initial) === 'object' ? initial.id : initial;

    useEffect(() => {

        let isMounted = true;

        if (model === undefined) fetchModel(id).then((model:Model) => { isMounted && setModel(model); });

        return () => { isMounted = false; console.log('unmount model effect', id); }

    }, [ model, setModel, id ]);

    useEffect(() => {

        const cancelListener = listen('models', () => { setModel(undefined); });

        return () => cancelListener();
    }, []);

    function remove() { deleteModel(id); }

    function update(model:Model) {

        if (model.id !== id) throw Error('unexpected model');

        storeModel(model);
    }

    return {
        model: model || null,
        removeModel: remove,
        setModel: update
    };
};