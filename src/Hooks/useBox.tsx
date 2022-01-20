import { Box } from "cogi-collectibles";
import { useEffect, useState } from "react";
import fetchBox from "../Storage/fetchBox()";

/**
 *  A custom hook to load a box.
 */
export default function useBox(id:string) {

    const [ box, setBox ] = useState<Box|undefined>();

    useEffect(() => {

        let isMounted = true;

        fetchBox(id).then((box:Box) => { isMounted && setBox(box); });

        return () => { isMounted = false; };

    }, [ box, setBox, id  ]);

    return {
        box
    };
};