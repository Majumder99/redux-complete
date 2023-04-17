import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    orderCake: (state, action) => {
      state.numOfCakes = state.numOfCakes - action.payload;
    },
    restockCaked: (state, action) => {
      state.numOfCakes = state.numOfCakes + action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { orderCake, restockCaked } = cakeSlice.actions;
