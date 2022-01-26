import { Box } from "cogi-collectibles";
import { useSelector } from "react-redux";
import useCatalogue from "../Hooks/useCatalogue";
import Item from "./Item";
import { query as querySlice } from "./querySlice";

/**
 *  A component to show a list of available items in the whole products catalogue.
 */
export default function List() {

    const query = useSelector(querySlice);

    const { catalogue } = useCatalogue(query.keyword);

    return (
        <div className="cards cards-grid">
            {catalogue.map((b:Box) => (<Item key={b.id} box={b}/> ))}
        </div>
    );
};