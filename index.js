import redux from "redux";
import reduxLogger from "redux-logger";
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const logger = reduxLogger.createLogger();
//action creator
function orderCake() {
  return {
    type: "ordered_cake",
    payload: 1,
  };
}

function restockCake() {
  return {
    type: "restock_cake",
    payload: 10,
  };
}

function orderIceCream() {
  return {
    type: "ordered_ice_cream",
    payload: 2,
  };
}
function restockIceCream() {
  return {
    type: "restock_ice_cream",
    payload: 10,
  };
}

// initial value
// const initialValue = {
//   numOfCakes: 10,
//   numOfIccCream: 20,
// };

//reducers means function pure function. which will change the state on basis of the type of action

// const reducers = (state = initialValue, action) => {
//   // we can use if/else or switch-case
//   switch (action.type) {
//     case "ordered_cake":
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - action.payload,
//       };
//     case "restock_cake":
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes + action.payload,
//       };
//     case "ordered_ice_cream":
//       return {
//         ...state,
//         numOfIccCream: state.numOfIccCream - action.payload,
//       };
//     case "restock_ice_cream":
//       return {
//         ...state,
//         numOfIccCream: state.numOfIccCream + action.payload,
//       };
//     default:
//       return state;
//   }
// };
const intialCakeValue = {
  numOfCakes: 10,
};

const intialIceCreamValue = {
  numOfIccCream: 10,
};

const cakeReducer = (state = intialCakeValue, action) => {
  switch (action.type) {
    case "ordered_cake":
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    case "restock_cake":
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = intialIceCreamValue, action) => {
  switch (action.type) {
    case "ordered_ice_cream":
      return {
        ...state,
        numOfIccCream: state.numOfIccCream - action.payload,
      };
    case "restock_ice_cream":
      return {
        ...state,
        numOfIccCream: state.numOfIccCream + action.payload,
      };
    default:
      return state;
  }
};

const reducers = combineReducers({ cakeReducer, iceCreamReducer });

//store created. like cake shop
const store = createStore(reducers, applyMiddleware(logger));
console.log("Initial state ", store.getState());

//this creates a listner, whenever state updated it will call the listner
const unsubscribe = store.subscribe(
  () => {}
  // console.log("Updated state ", store.getState())
);

//we just past the action creator it will create the action for us
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake());

// Now we will use bindActionCreators

const actions = bindActionCreators(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake();
actions.orderIceCream();
actions.restockIceCream();

unsubscribe();

//this won't show because we have unsubscribed the listner
// store.dispatch(orderCake());
