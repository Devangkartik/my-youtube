import {createSlice} from '@reduxjs/toolkit'

const chatSlice = createSlice({
      name : "chat",
      initialState : {
         messages : [ ]
      },
      reducers : {
          addMessages : (state,action) =>{
            // if(state.messages.length)
            state.messages.splice(10,1);
            state.messages.unshift(action.payload);
          }
      }

})
 

export const {addMessages} = chatSlice.actions;
export default  chatSlice.reducer;
