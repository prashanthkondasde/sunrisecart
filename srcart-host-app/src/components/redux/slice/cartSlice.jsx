import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    },
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find((i) => i.id === item.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...item, quantity: 1 });
                localStorage.setItem("cart", JSON.stringify(state.items));
            }
        },
        removeFromCart: (state, action) => {
            const itemId = action.payload;
            state.items = state.items.filter((i) => i.id !== itemId);
            localStorage.setItem("cart", JSON.stringify(state.items));  
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const existingItem = state.items.find((i) => i.id === id);
            if (existingItem) {
                existingItem.quantity = quantity;
            }
            localStorage.setItem("cart", JSON.stringify(state.items));
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;   