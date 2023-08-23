import { setProducts, startLoading } from "./cartSlice"


export const getProducts =()=>{

    return async( dispatch, getState )=>{
        dispatch( startLoading );

        const resp = await fetch('http://127.0.0.1:8000/api/products');
        const data = await resp.json();
         console.log(data)
        dispatch( setProducts({products: data.results}));
    }
}