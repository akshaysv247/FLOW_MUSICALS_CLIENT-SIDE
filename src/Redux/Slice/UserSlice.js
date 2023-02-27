/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  name: null,
  token: null,
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.name = action.payload.name;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.name = null;
      state.token = null;
    },
  },
});

export const { setLogin, setLogout } = UserSlice.actions;
export default UserSlice.reducer;
