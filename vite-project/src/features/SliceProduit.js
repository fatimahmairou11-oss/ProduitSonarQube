import { createSlice } from "@reduxjs/toolkit";
export const SliceProduit=createSlice({
    name:"Produit",
    initialState:{produits:[]},
    reducers:{
        addProduit:(state,action)=>{
            state.produits.push(action.payload);
        },
        deleteProduit:(state,action)=>{
            state.produits=state.produits.filter(p=>p.id!==action.payload);
        },
        updateProduit:(state,action)=>{
            const exist=state.produits.findIndex(p=>p.id===action.payload.id);
            if(exist!==-1){
                state.produits[exist]=action.payload;
            }
        }
    }
})
export const  {addProduit,deleteProduit,updateProduit} = SliceProduit.actions;
export default SliceProduit.reducer;


