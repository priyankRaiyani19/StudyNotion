import {createSlice} from "@reduxjs/toolkit"
// import {toast} from "react-hot-toast"

const initialState = {
    cart: null,
    totalItems: localStorage.getItem("totalItems")
        ? JSON.parse(localStorage.getItem("totalItems"))
        : 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        setTotalItems(state, value) {
            state.token = value.payload;
        }
    }
    // Todo:add to cart
    // todo :remove to cart
    // todo:reset cart
})

export const {setTotalItems} = cartSlice.actions;
export default cartSlice.reducer;