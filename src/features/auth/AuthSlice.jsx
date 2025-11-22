import { createSlice } from "@reduxjs/toolkit";

const getUserFromLocalStorage = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

const initialState = {
  user: getUserFromLocalStorage(),
  isLoggedIn: !!getUserFromLocalStorage(),
};

const authSlice = createSlice({
  name: "auth", 
  initialState, 

  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('token', action.payload.token); 
    },
    
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
    
    registerSuccess: (state, action) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('token', action.payload.token);
    },

    updateProfile: (state, action) => {
        const { name, email } = action.payload; 
        if (state.user) {
            state.user.name = name; 
            state.user.email = email; 
            localStorage.setItem('user', JSON.stringify(state.user));
        }
    }
  },
});

export const { loginSuccess, logout, registerSuccess, updateProfile } = authSlice.actions;
export default authSlice.reducer;