import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: { 
        products:[],
        cart:[]
     },
    reducers: { 
        startLoading:()=>{

        },
        setProducts:(state, action)=>{
            state.products=action.payload.products
        },
        setCart:(state,action)=>{

            let item = state.products.find((product)=> product == action.payload.id)

            

        }

     },
});

export const { setProducts, startLoading } = cartSlice.actions;