import { Model } from "cogi-collectibles";
import { useEffect, useState } from "react";
import fetchImage from "../Storage/fetchImage";

/**
 *  A custom hook to load a specific image.
 */
export default function useImage(source:Model) {

    const [ image, setImage ] = useState<string|null|undefined>(undefined);

    const id = source.id;
    
    useEffect(() => {

        let isMounted = true;

        if (image === undefined) fetchImage(id).then((url:string|null) => { isMounted && setImage(url); });

        return () => { isMounted = false; }

    }, [ image, setImage, id ]);

    return {
        image
    };
};