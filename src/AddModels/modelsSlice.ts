import { CaseReducer, createSlice, PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit";
import { Model } from "cogi-collectibles"
import { RootState } from "../Store";

type SliceType = Partial<Model>[];

type ClearReducer = CaseReducer<SliceType>;
const clearReducer:ClearReducer = (state:SliceType) => [];

type AddReducer = CaseReducer<SliceType, PayloadAction<Partial<Model>|Array<Partial<Model>>>>;
const addReducer:AddReducer = (state:SliceType, payload:PayloadAction<Partial<Model>|Partial<Model>[]>) : SliceType => {

    const input = Array.isArray(payload.payload) ?  payload.payload : [ payload.payload ];

    return [ ...state, ...input ];
};

type InsertReducer = CaseReducer<SliceType, PayloadAction<{ model: Partial<Model>, index: number }>>;
const insertReducer:InsertReducer = (state:SliceType, action:PayloadAction<{ model: Partial<Model>, index: number }>) : SliceType => {

    const payload = action.payload;
    const copied = [ ...state ];

    // this might expand the array and fill it with undefineds. To maintain type
    // safety we fill the missing parts with empty objects that conform with Partial<Model>
    copied[payload.index] = payload.model;
    const final = copied.map((v:Partial<Model>|undefined) => v || { });

    return final;
};

const addModelsSlice = createSlice<SliceType, SliceCaseReducers<SliceType>>({
    name: "addModels",
    initialState: [],
    reducers: {
        clear: clearReducer,
        add: addReducer,
        insert: insertReducer
    }
});

export const { clear, add, insert } = addModelsSlice.actions;
export const addModels = (state:RootState) => state.addModels;
export default addModelsSlice.reducer;