import { Box, buildBox } from 'cogi-collectibles';

/**
 *  A function to fetch a catalogue of products.
 */
export default function fetchCatalogue() : Promise<Array<Box>> {

    return import('cogi-catalogue-gw/space-marines-boxes.json').then((data:any) => {

        return  (data.default as Array<Partial<Box>>).map(buildBox);
    });
};