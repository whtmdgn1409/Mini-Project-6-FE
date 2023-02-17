import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  email: string;
  name: string;
  token: string;
}

const initialState: InitialState = {
  email: '',
  name: '',
  token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.token = action.payload.token;
    },
    logOutAction: (state) => {
      state.email = '';
      state.name = '';
      state.token = '';
    },
  },
});

export default authSlice.reducer;
export const { setUser, logOutAction } = authSlice.actions;
