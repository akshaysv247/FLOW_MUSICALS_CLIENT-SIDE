/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  admin: null,
  name: null,
  AdminToken: null,
};

export const AdminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setAdminLogin: (state, action) => {
      state.admin = action.payload.admin;
      state.name = action.payload.name;
      state.AdminToken = action.payload.AdminToken;
    },
    setAdminLogout: (state, action) => {
      state.admin = null;
      state.name = null;
      state.adminToken = null;
    },
  },
});

export const { setAdminLogin, setAdminLogout } = AdminSlice.actions;
export default AdminSlice.reducer;
