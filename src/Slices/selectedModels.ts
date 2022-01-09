import { createSlice, CaseReducer, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import { Model } from 'cogi-collectibles';
import { RootState } from '../Store';

type ClearReducer = CaseReducer<Array<Model>>;
const clearReducer:ClearReducer = (state:Array<Model>) => [];

type AddReducer = CaseReducer<Array<Model>, PayloadAction<Model>>;
const addReducer:AddReducer = (state:Array<Model>, payload:PayloadAction<Model>) => {

    // if the model already exists inside the selected,
    // we just skip this action all together.
    if (state.findIndex((value:Model) => value.id === payload.payload.id) > -1) return state;
    
    return [ ...state, payload.payload ];
}

type RemoveReducer = CaseReducer<Array<Model>, PayloadAction<Model>>;
const removeReducer:RemoveReducer = (state:Array<Model>, payload:PayloadAction<Model>) => {

    return state.filter((value:Model) => value.id !== payload.payload.id);
}

const selectedModelsSlide = createSlice<Model[], SliceCaseReducers<Model[]>>({
    name: 'selectedModels',
    initialState: [],
    reducers: {
        clear: clearReducer,
        add: addReducer,
        remove: removeReducer
    }
});

export const { clear, add, remove } = selectedModelsSlide.actions;

export const selectSelected = (state:RootState) => state.selectedModels;

export default selectedModelsSlide.reducer;