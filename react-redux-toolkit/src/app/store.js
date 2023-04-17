import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import userReudcer from "../features/users/userSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    user: userReudcer,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
