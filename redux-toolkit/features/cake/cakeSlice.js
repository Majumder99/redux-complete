const { icecreamActions } = require("../icecream/icecreamSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

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
  //["icecream/orderIceCream"] is the route
  //   extraReducers: {
  //     ["icecream/orderIceCream"]: (state) => {
  //       state.numOfCakes--;
  //     },
  //   },

  //new way
  //the more icecream order the less the number of cakes
  extraReducers: (builder) => {
    builder.addCase(icecreamActions.orderIceCream, (state) => {
      state.numOfCakes--;
    });
  },
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
