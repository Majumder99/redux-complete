const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamActions =
  require("./features/icecream/icecreamSlice").icecreamActions;

console.log("Initial state : ", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated state : ", store.getState())
);

store.dispatch(cakeActions.orderCake(2));
store.dispatch(cakeActions.orderCake(2));
store.dispatch(cakeActions.orderCake(2));
store.dispatch(cakeActions.orderCake(2));
store.dispatch(icecreamActions.orderIceCream(2));
store.dispatch(icecreamActions.orderIceCream(2));
store.dispatch(icecreamActions.orderIceCream(2));
store.dispatch(icecreamActions.orderIceCream(2));
store.dispatch(cakeActions.restockCaked(10));
store.dispatch(icecreamActions.restockIceCream(10));

unsubscribe();
