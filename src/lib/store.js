import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import clientReducer from "./features/client/slice";
import agentReducer from "./features/agent/slice";
import messageReducer from "./features/message/slice";
import authReducer from "./features/auth/slice";

export const store = configureStore({
  reducer: {
    counters: counterReducer,
    client: clientReducer,
    agent: agentReducer,
    message: messageReducer,
    auth: authReducer,
  },
});
