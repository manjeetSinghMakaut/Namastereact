import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items:[],
    },
    reducers:{
        addItem: (state,action)=>{
            state.items.push(action.payload)
        },
        deleteItem: (state,action)=>{
            state.items.pop()
        },
        clearCart: (state,action)=>{
            state.items.length=0; //[]
        },
    },


});

 const {addItem,deleteItem,clearCart }= cartSlice.actions;

 export{addItem,deleteItem,clearCart};

export default cartSlice.reducer