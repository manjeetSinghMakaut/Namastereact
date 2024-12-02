import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items:[],
    },
    reducers:{
        addItem: (state,action)=>{
            //Redux uses Immer.js behind the Scene
            state.items.push(action.payload)
            // mutating the state here 
         },
        deleteItem: (state,action)=>{
            state.items.pop()
        },
        clearCart: (state,action)=>{
            state.items.length=0; //state=[]
            // RTK = either Mutate the state or return the new State
           // state= ["manjeet"] this will not work
           // console.log(current(state)); To see the log in redux
           
        },
    },
 

});

export const {addItem,deleteItem,clearCart }= cartSlice.actions;

export default cartSlice.reducer 