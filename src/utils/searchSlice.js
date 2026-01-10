import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : 'search ' ,
    initialState : {
         
    },
    reducers : {
<<<<<<< HEAD
        chacheResults : ( state , action ) => {
=======
        cacheResults : (state , action ) => {
>>>>>>> 114c00d (Inicial commit after brach rename)
            state =  Object.assign(state , action.payload)
        },
    },
})

<<<<<<< HEAD
export const {chacheResults} = searchSlice.actions;
=======
export const {cacheResults} = searchSlice.actions;
>>>>>>> 114c00d (Inicial commit after brach rename)

export default searchSlice.reducer;

//catche :
<<<<<<< HEAD
//time complexity to search an array  O(n)
// the time comlexity of search an object or map is O(1) and new Map()
=======
//time complexity to search an array  O(n) [i,ip,iph]

// the time comlexity of search an object or map is O(1) and new Map()
// {
//    i: 
//    ip : 
//    iph : 
// }
>>>>>>> 114c00d (Inicial commit after brach rename)
