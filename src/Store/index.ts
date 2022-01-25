import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Model } from "cogi-collectibles";
import selectedModelsReducer from '../Slices/selectedModels';
import addModelsReducer from '../AddModels/modelsSlice';

export type RootState = {
    selectedModels:Array<Model>,
    addModels:Array<Partial<Model>>
};

const store = configureStore<RootState>({
    reducer: combineReducers({
        selectedModels: selectedModelsReducer,
        addModels: addModelsReducer
    })
});

export default store;