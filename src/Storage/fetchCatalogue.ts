import { Box, buildBox } from 'cogi-collectibles';

/**
 *  This is a function that fetches the whole catalogue. Inside this function
 *  fetches from different sources data, caches them, and merges in one concise
 *  output.
 * 
 *  @todo add more catalogue sources and merge them.
 *  @todo prolly a better solution is needed.
 */
const fetch : () => Promise<Array<Box>> = (() => {

    let spaceMarinesPromise = import('cogi-catalogue-gw/space-marines-boxes.json').then((data:any) => { return data.default as Array<Partial<Box>>; }).then((input:Array<Partial<Box>>) => input.map(buildBox));

    return () => {
        return spaceMarinesPromise;
    };
})();

/**
 *  A function to fetch a catalogue of products.
 */
export default function fetchCatalogue() : Promise<Array<Box>> {

    return fetch();
};