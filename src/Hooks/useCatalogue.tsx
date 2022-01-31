import { Box, matchBox } from "cogi-collectibles";
import { useEffect, useState } from "react";
import fetchCatalogue from "../Storage/fetchCatalogue";

/**
 *  A custom hook to get a catalogue (or its part).
 */
export default function useCatalogue(keyword:string = '') {

    const [ catalogue, setCatalogue ] = useState<Box[]|undefined>();

    useEffect(() => {

        let isMounted = true;

        fetchCatalogue().then((catalogue:Box[]) => {

            if (!isMounted) return;

            if (!keyword) return setCatalogue(catalogue);

            setCatalogue(catalogue.filter((box:Box) => matchBox(keyword, box)));
        });

        return () => { isMounted = false; }

    }, [ setCatalogue, keyword ]);

    return {
        catalogue: catalogue || []
    };
};