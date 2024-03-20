import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import clientReducer from "./features/client/slice";

export const store = configureStore({
  reducer: { counters: counterReducer, client: clientReducer },
});
