import { configureStore } from "@reduxjs/toolkit";
import { clientReducer } from "./clients/slice";

export const store = configureStore({
  reducer: { clients: clientReducer },
});
