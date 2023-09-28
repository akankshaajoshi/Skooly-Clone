import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = 'DEFAULT';

const userSlice = createSlice({
  name: 'currentUser',
  initialState: INITIAL_STATE,
});
