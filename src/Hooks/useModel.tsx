import { Model } from "cogi-collectibles";
import { useEffect, useState } from "react";
import deleteModel from "../Storage/deleteModel";
import { listen } from "../Storage/exchange";
import fetchModel from "../Storage/fetchModel";
import storeModel from "../Storage/storeModel";

export default function useModel(initial:Model|string) {

    const [ model, setModel ] = useState<Model|null>(typeof(initial) === 'object' ? initial : null);

    const id = typeof(initial) === 'object' ? initial.id : initial;

    useEffect(() => {

        let isMounted = true;

        fetchModel(id).then((model:Model) => setModel(model));

        return () => { isMounted = false; }

    }, [ model, setModel ]);

    useEffect(() => {

        const cancelListener = listen('models', () => { setModel(null)});

        return () => cancelListener();
    }, []);

    function remove() { deleteModel(id); }

    function update(model:Model) {

        if (model.id !== id) throw Error('unexpected model');

        storeModel(model);
    }

    return {
        model,
        removeModel: remove,
        setModel: update
    };
};