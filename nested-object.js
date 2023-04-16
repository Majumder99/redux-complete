import redux from "redux";
const createStore = redux.createStore;
import produce from "immer";

const intialAddress = {
  name: "Sourav",
  address: {
    city: "KHulna",
    state: "Khulna",
    street: "405 main road",
  },
};

const updateStreet = (street) => {
  return {
    type: "Update_street",
    payload: street,
  };
};

const reducer = (state = intialAddress, action) => {
  switch (action.type) {
    case "Update_street":
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

const store = redux.createStore(reducer);

console.log("Initial state ", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);
kl
store.dispatch(updateStreet("595 street"));

unsubscribe();
