import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchClients = createAsyncThunk(
  "client/fetchClients",
  async () => {
    try {
      const response = await axios.get(
        "https://api-danielbot.onrender.com/clients"
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = [];

// const initialState = [
//   {
//     id: 1,
//     name: "Alejo",
//     surname: "Araya",
//     age: 23,
//     active: true,
//     number: 2613430975,
//     createAt: "10/23/12",
//   },
//   {
//     id: 2,
//     name: "Juan",
//     surname: "García",
//     age: 30,
//     active: false,
//     number: 2655512345,
//     createAt: "05/15/14",
//   },
//   {
//     id: 3,
//     name: "María",
//     surname: "Martínez",
//     age: 28,
//     active: true,
//     number: 2698765432,
//     createAt: "08/07/15",
//   },
//   {
//     id: 4,
//     name: "Pedro",
//     surname: "López",
//     age: 35,
//     active: false,
//     number: 2643217890,
//     createAt: "03/12/13",
//   },
//   {
//     id: 5,
//     name: "Luisa",
//     surname: "Pérez",
//     age: 25,
//     active: true,
//     number: 2612345678,
//     createAt: "11/30/11",
//   },
//   {
//     id: 6,
//     name: "Ana",
//     surname: "Hernández",
//     age: 29,
//     active: true,
//     number: 2634567890,
//     createAt: "09/18/17",
//   },
//   {
//     id: 7,
//     name: "Diego",
//     surname: "Ramírez",
//     age: 27,
//     active: false,
//     number: 2678901234,
//     createAt: "02/05/16",
//   },
//   {
//     id: 8,
//     name: "Sofía",
//     surname: "Gómez",
//     age: 31,
//     active: true,
//     number: 2689012345,
//     createAt: "06/24/10",
//   },
//   {
//     id: 9,
//     name: "Javier",
//     surname: "Díaz",
//     age: 26,
//     active: false,
//     number: 2645678901,
//     createAt: "04/09/18",
//   },
//   {
//     id: 10,
//     name: "Carolina",
//     surname: "Sánchez",
//     age: 33,
//     active: true,
//     number: 2623456789,
//     createAt: "01/20/19",
//   },
//  ];

export const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    deleteById: (state, action) => {
      return state.filter((client) => client.id !== action.payload);
    },
  },
});

export const { deleteById } = clientSlice.actions;
export default clientSlice.reducer;
