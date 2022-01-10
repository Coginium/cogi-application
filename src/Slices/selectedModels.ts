import { createSlice, CaseReducer, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import { Model } from 'cogi-collectibles';
import { RootState } from '../Store';

type ClearReducer = CaseReducer<Array<Model>>;
const clearReducer:ClearReducer = (state:Array<Model>) => [];

type AddReducer = CaseReducer<Array<Model>, PayloadAction<Model|Array<Model>>>;
const addReducer:AddReducer = (state:Array<Model>, payload:PayloadAction<Model|Array<Model>>) : Array<Model> => {

    const input = Array.isArray(payload.payload) ?  payload.payload : [ payload.payload ];

    const filtered = input.filter((m:Model) => state.findIndex((n:Model) => m.id === n.id) === -1);

    return [ ...state, ...filtered ];
};

type RemoveReducer = CaseReducer<Array<Model>, PayloadAction<Model>>;
const removeReducer:RemoveReducer = (state:Array<Model>, payload:PayloadAction<Model>) => {

    return state.filter((value:Model) => value.id !== payload.payload.id);
};

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