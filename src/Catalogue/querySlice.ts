import { CaseReducer, createSlice, PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit";
import { RootState } from "../Store";


export interface Query {
    keyword?:string;
};

type SliceType = Query;

type SetReducer = CaseReducer<SliceType, PayloadAction<SliceType>>;
const setReducer:SetReducer = (state:SliceType, action:PayloadAction<SliceType>) => {

    return action.payload;
};

const querySlice = createSlice<SliceType, SliceCaseReducers<SliceType>>({
    name: 'catalogueQuery',
    initialState: { },
    reducers: {
        set: setReducer    
    }
});

export const { set } = querySlice.actions;
export const query = (state:RootState) => state.catalogueQuery;
export default querySlice.reducer;