import { createSlice } from "@reduxjs/toolkit";

const crudSlice = createSlice({
  name: "crud",
  initialState: {
    items: [],
  },

  reducers: {
    addItem: (state, action) => {
      state.items.push({
        id: Date.now(),
        title: action.payload.title,
        desc: action.payload.desc,
        price: action.payload.price,
        image: action.payload.image,
      });
    },

    deleteItem: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
  },
});

export const { addItem, deleteItem } = crudSlice.actions;
export default crudSlice.reducer;
