import { Box } from "cogi-collectibles";
import { useEffect, useState } from "react";
import fetchCatalogue from "../Actions/fetchCatalogue";
import Item from "./Item";

/**
 *  A component to show a list of available items in the whole products catalogue.
 */
export default function List() {

    const [ catalogue, setCatalogue ] = useState<Array<Box>>([]);

    useEffect(() => {

        fetchCatalogue().then(setCatalogue);
    }, [ ]);

    return (
        <div className="cards cards-grid">
            {catalogue.map((b:Box) => (<Item key={b.id} box={b}/> ))}
        </div>
    );
};