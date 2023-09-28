import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = 'DEFAULT';

const userSlice = createSlice({
  name: 'currentUser',
  initialState: INITIAL_STATE,
  reducers: {},
});

export const { editUser } = userSlice.actions;

export default userSlice.reducer;
