import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    daily: [],
    favorites: [],
    currCity: {},
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setDaily(state, action){
        state.daily = action.payload
    },
    setCurrent(state, action){
        state.currCity = action.payload
    },
    addFavorite(state, action){
        // debugger
        state.favorites = [...state.favorites, action.payload]
    },
    removeFavorite(state, action){
        debugger
        state.favorites = [...state.favorites?.filter(e => e.id !== action.payload)]
    }
  },
});

export const {
    setCurrent,
    setDaily,
    addFavorite,
    removeFavorite
} = generalSlice.actions;

export default generalSlice.reducer;