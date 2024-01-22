import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : 'search ' ,
    initialState : {
         
    },
    reducers : {
        chacheResults : ( state , action ) => {
            state =  Object.assign(state , action.payload)
        },
    },
})

export const {chacheResults} = searchSlice.actions;

export default searchSlice.reducer;

//catche :
//time complexity to search an array  O(n)
// the time comlexity of search an object or map is O(1) and new Map()