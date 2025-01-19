import { configureStore } from "@reduxjs/toolkit";

import userReducer from "@/redux/slices/userSlice";
import postReducer from "@/redux/slices/postSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      post: postReducer,
    },
  });
};
// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
