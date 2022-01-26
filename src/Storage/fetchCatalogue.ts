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

    let cataloguePromise = import('cogi-catalogue-gw/package.json').then((data:any) => {

        const dataFiles = data.default.datafiles;

        const separated:Promise<Array<Box[]>> = Promise.all(dataFiles.map((file:string) => {

            return import(`cogi-catalogue-gw/${file}`).then((data:any) => {

                console.log(data.default);

                return data.default as Partial<Box>[];

            }).then((input:Partial<Box>[]) => input.map(buildBox));
        }));
        
        return separated.then((inputs:Array<Box[]>) => {

            const result:Box[] = [];

            return result.concat(...inputs);
        });

    });

    return () => {
        return cataloguePromise;
    };
})();

/**
 *  A function to fetch a catalogue of products.
 */
export default function fetchCatalogue() : Promise<Array<Box>> {

    return fetch();
};