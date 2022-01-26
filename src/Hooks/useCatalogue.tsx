import { Box } from "cogi-collectibles";
import { useEffect, useState } from "react";
import fetchCatalogue from "../Storage/fetchCatalogue";



/**
 *  A custom hook to get a catalogue (or its part).
 */
export default function useCatalogue(keyword:string = '') {

    const [ catalogue, setCatalogue ] = useState<Box[]|undefined>();

    useEffect(() => {

        let isMounted = true;

        if (catalogue === undefined) fetchCatalogue().then((catalogue:Box[]) => {

            if (!isMounted) return;

            if (!keyword) return setCatalogue(catalogue);

            
        });

        return () => { isMounted = false; }

    }, [ catalogue, setCatalogue ]);

    return {
        catalogue: catalogue || []
    };
};