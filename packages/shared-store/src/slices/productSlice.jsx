import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    // console.log(data.product);
    return data.products;
});
export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    return res.json();
  }
);
const productSlice = createSlice({
    name: "products",
    initialState:{
        items:[],
        selectedProduct: null,
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
            })
            .addCase(fetchProductById.pending, (state) => {
            state.loading = true;
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
            state.loading = false;
            state.selectedProduct = action.payload;
            });
    }
})
export const {setProducts} = productSlice.actions;
export default productSlice.reducer;
