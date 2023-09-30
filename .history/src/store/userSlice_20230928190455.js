import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = { user: 'none' };

const userSlice = createSlice({
  name: 'currentUser',
  initialState: INITIAL_STATE,
  reducers: {
    editUser: (state, action) => {},
  },
});

export const { editUser } = userSlice.actions;

export default userSlice.reducer;