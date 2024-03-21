import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

const initialState = [
  {
    id: 1,
    reference: "1",
    content: "Este es el listado de productos de la empresa",
    createAt: "21/03/24",
  },
  {
    id: 2,
    reference: "2",
    content: "Hola, ¿en qué puedo ayudarte?",
    createAt: "21/03/24",
  },
  {
    id: 3,
    reference: "3",
    content: "Buenos días, ¿cómo puedo asistirte?",
    createAt: "21/03/24",
  },
  {
    id: 4,
    reference: "4",
    content: "¿Necesitas ayuda con algo en particular?",
    createAt: "21/03/24",
  },
  {
    id: 5,
    reference: "5",
    content: "¡Hola! ¿Cómo puedo ayudarte hoy?",
    createAt: "21/03/24",
  },
  {
    id: 6,
    reference: "6",
    content: "¿En qué puedo ayudarte en este momento?",
    createAt: "21/03/24",
  },
  {
    id: 7,
    reference: "7",
    content: "¿Tienes alguna consulta que necesites resolver?",
    createAt: "21/03/24",
  },
  {
    id: 8,
    reference: "8",
    content: "¿En qué puedo asistirte hoy?",
    createAt: "21/03/24",
  },
  {
    id: 9,
    reference: "9",
    content: "Hola, ¿cómo puedo ayudarte en este momento?",
    createAt: "21/03/24",
  },
  {
    id: 10,
    reference: "10",
    content: "¿En qué puedo colaborar contigo?",
    createAt: "21/03/24",
  },
];
export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    deleteById: (state, action) => {
      return state.filter((message) => message.id !== action.payload);
    },
    create: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { deleteById, create } = messageSlice.actions;
export default messageSlice.reducer;
