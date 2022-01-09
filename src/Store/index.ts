import { configureStore } from "@reduxjs/toolkit";
import { Model } from "cogi-collectibles";
import selectedModelsReducer from '../Slices/selectedModels';

export type RootState = {
    selectedModels:Model[]
};

const store = configureStore<RootState>({
    reducer: {
        selectedModels: selectedModelsReducer
    }
});

export default store;