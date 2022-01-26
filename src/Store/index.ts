import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Model } from "cogi-collectibles";
import selectedModelsReducer from '../Slices/selectedModels';
import addModelsReducer from '../AddModels/modelsSlice';
import catalogueQueryReducer, { Query } from '../Catalogue/querySlice';

export type RootState = {
    selectedModels:Array<Model>,
    addModels:Array<Partial<Model>>,
    catalogueQuery:Query
};

const store = configureStore<RootState>({
    reducer: combineReducers({
        selectedModels: selectedModelsReducer,
        addModels: addModelsReducer,
        catalogueQuery: catalogueQueryReducer
    })
});

export default store;