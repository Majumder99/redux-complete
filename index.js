import redux from "redux";

const createStore = redux.createStore;

//action creator
function orderCake() {
  return {
    type: "ordered_cake",
    quantity: 1,
  };
}

// initial value
const initialValue = {
  numOfCakes: 10,
  anotherProperty: "",
};

//reducers means function pure function. which will change the state on basis of the type of action

const reducers = (state = initialValue, action) => {
  // we can use if/else or switch-case
  switch (action.type) {
    case "ordered_cake":
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

//store created. like cake shop
const store = createStore(reducers);
console.log("Initial state ", store.getState());

//this creates a listner, whenever state updated it will call the listner
const unsubscribe = store.subscribe(() =>
  console.log("Updated state ", store.getState())
);

//we just past the action creator it will create the action for us
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

unsubscribe();

//this won't show because we have unsubscribed the listner
store.dispatch(orderCake());
