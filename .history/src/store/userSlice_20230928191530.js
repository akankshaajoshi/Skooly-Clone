import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  user: 'none',
  phoneNumber: '',
  website: ' ',
  email: ' ',
  timezone: 'UTC',
  currency: 'INR',
  schoolAddress: {
    street: '',
    city: '',
    state: ' ',
    zipCode: ' ',
  },
};

const userSlice = createSlice({
  name: 'currentUser',
  initialState: INITIAL_STATE,
  reducers: {
    editUser: (state, action) => {
      state.user = action.payload.user;
      state.phoneNumber: action.payload.phoneNumber,
      state.website: action.payload,
      state.email: action.payload,
      state.timezone: action.payload,
      state.currency: action.payload,
      state.schoolAddress: {
        street: action.payload,
        city: action.payload,
        state: action.payload,
        zipCode: action.payload,
      },
    },
  },
});

export const { editUser } = userSlice.actions;

export default userSlice.reducer;
