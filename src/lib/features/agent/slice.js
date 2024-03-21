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

// const initialState = [];

const initialState = [
  {
    id: 1,
    name: "Alejo",
    surname: "Araya",
    age: 23,
    active: true,
    email: "alejoaraya2000@gmail.com",
    rol: "admin",
    number: 2613430975,
    createAt: "10/23/12",
  },
  {
    id: 2,
    name: "Juan",
    surname: "Perez",
    age: 30,
    active: true,
    email: "juanperez@example.com",
    rol: "user",
    number: 1234567890,
    createAt: "05/15/15",
  },
  {
    id: 3,
    name: "Maria",
    surname: "Gonzalez",
    age: 28,
    active: true,
    email: "mariagonzalez@example.com",
    rol: "user",
    number: 9876543210,
    createAt: "03/08/18",
  },
  {
    id: 4,
    name: "Luis",
    surname: "Martinez",
    age: 35,
    active: false,
    email: "luismartinez@example.com",
    rol: "user",
    number: 5555555555,
    createAt: "09/21/20",
  },
  {
    id: 5,
    name: "Ana",
    surname: "Lopez",
    age: 25,
    active: true,
    email: "analopez@example.com",
    rol: "admin",
    number: 9999999999,
    createAt: "11/30/19",
  },
  {
    id: 6,
    name: "Pedro",
    surname: "Sanchez",
    age: 40,
    active: true,
    email: "pedrosanchez@example.com",
    rol: "user",
    number: 4444444444,
    createAt: "02/14/17",
  },
  {
    id: 7,
    name: "Laura",
    surname: "Ramirez",
    age: 27,
    active: false,
    email: "lauraramirez@example.com",
    rol: "user",
    number: 7777777777,
    createAt: "07/07/16",
  },
  {
    id: 8,
    name: "Carlos",
    surname: "Garcia",
    age: 33,
    active: true,
    email: "carlosgarcia@example.com",
    rol: "admin",
    number: 8888888888,
    createAt: "04/12/14",
  },
  {
    id: 9,
    name: "Elena",
    surname: "Fernandez",
    age: 29,
    active: true,
    email: "elenafernandez@example.com",
    rol: "user",
    number: 2222222222,
    createAt: "08/03/13",
  },
  {
    id: 10,
    name: "Diego",
    surname: "Hernandez",
    age: 31,
    active: false,
    email: "diegohernandez@example.com",
    rol: "user",
    number: 6666666666,
    createAt: "01/05/11",
  },
];
export const agentSlice = createSlice({
  name: "agent",
  initialState,
  reducers: {
    deleteById: (state, action) => {
      return state.filter((agent) => agent.id !== action.payload);
    },
    create: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { deleteById, create } = agentSlice.actions;
export default agentSlice.reducer;
