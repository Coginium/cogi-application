import { Box } from "cogi-collectibles";
import fetchCatalogue from "./fetchCatalogue";

/**
 *  A function to fetch a box based on box object based
 *  on the id of that box.
 */
export default function fetchBox(id:string) : Promise<Box> {

    return fetchCatalogue().then((boxes:Array<Box>) => {

        const box = boxes.find((value:Box) => value.id === id);

        if (!box) throw Error('Box not found');

        return box;
    });
};