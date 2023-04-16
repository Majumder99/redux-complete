const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "Cake",
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

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
