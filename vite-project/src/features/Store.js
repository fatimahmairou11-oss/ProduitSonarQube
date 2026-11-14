import { configureStore } from "@reduxjs/toolkit";
import ProduitReducer from "./SliceProduit";
export const Store=configureStore({
    reducer:{
        produits:ProduitReducer
    }
})