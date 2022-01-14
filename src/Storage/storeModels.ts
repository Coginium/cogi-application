import { Model } from "cogi-collectibles";
import storeModel from "./storeModel";

/**
 *  A helper function to store multiple models at once.
 */
export default function storeModels(models:Array<Model>) : Promise<Array<Model>> {

    return Promise.all(models.map(storeModel)).then(() => models);
};