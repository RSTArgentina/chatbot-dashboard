import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Alejo",
    surname: "Araya",
    age: 23,
    active: true,
  },
  {
    name: "Matias",
    surname: "Federicci",
    age: 12,
    active: true,
  },
  {
    name: "Ximena",
    surname: "Morales",
    age: 23,
    active: false,
  },
];

export const clientSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {},
});

// export const { createClient, deleteClient, updateClient } = clientSlice.actions;
export default clientSlice.reducer;
