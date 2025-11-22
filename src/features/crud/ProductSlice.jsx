import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products", 
  initialState: {
    items: [
      { id: 1, title: 'Test Product', desc: 'Admin uchun test mahsulot.', price: '10000', image: 'https://via.placeholder.com/150' },
      { id: 2, title: 'Oddiy Product', desc: 'Oddiy user ko\'radigan mahsulot.', price: '5000', image: 'https://via.placeholder.com/150' },
    ],
    loading: false, 
  },

  reducers: {
    setLoading: (state, action) => { 
        state.loading = action.payload;
    },
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
    editItem: (state, action) => { // Edit action
        const { id, updatedItem } = action.payload;
        const index = state.items.findIndex(item => item.id === id);
        if (index !== -1) {
            state.items[index] = { ...state.items[index], ...updatedItem };
        }
    }
  },
});

export const { addItem, deleteItem, editItem, setLoading } = productSlice.actions;
export default productSlice.reducer;