const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfIceCream: 10,
};

const icecreamSlice = createSlice({
  name: "Icecream",
  initialState,
  reducers: {
    orderIceCream: (state, action) => {
      state.numOfIceCream = state.numOfIceCream - action.payload;
    },
    restockIceCream: (state, action) => {
      state.numOfIceCream = state.numOfIceCream + action.payload;
    },
  },
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
