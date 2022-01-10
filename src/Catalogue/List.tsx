import { Box } from "cogi-collectibles";
import { useEffect, useState } from "react";
import fetchCatalogue from "../Actions/fetchCatalogue";
import Item from "./Item";

export default function List() {

    const [ catalogue, setCatalogue ] = useState<Array<Box>>([]);

    useEffect(() => {

        fetchCatalogue().then(setCatalogue);
    });

    return (
        <div>
            {catalogue.map((b:Box) => (<Item key={b.id} box={b}/> ))}
        </div>
    );
};