import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk("products", async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    // console.log(data);
    return data.products;
});
const productSlice = createSlice({
    name: "products",
    initialState:{
        items:[],
        loading:false,        
        error:null
    },
    reducers:{
        setProducts:(state,action)=>{
            state.items = action.payload;
        }
    },
    extraReducers:(builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                console.error("Error fetching products:", action.error);
            });
    }
})
export const {setProducts} = productSlice.actions;
export default productSlice.reducer;