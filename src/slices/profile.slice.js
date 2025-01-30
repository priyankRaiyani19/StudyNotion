import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    // ! waste of 30 minitues when i reload page that time user will null
    // !user = null;  then i write this line:
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    loading: false,
};

const profileSlice = createSlice({
    name:"profile",
    initialState: initialState,
    reducers: {
        setUser(state, value) {
            state.user = value.payload;
        },
        setLoading(state, value) {
            state.loading = value.payload;
        },
    },
});

export const {setUser,setLoading} = profileSlice.actions;
export default profileSlice.reducer;