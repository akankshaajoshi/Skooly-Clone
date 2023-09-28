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
      phoneNumber: action.payload.phoneNumber,
      website: action.payload,
      email: action.payload,
      timezone: action.payload,
      currency: action.payload,
      schoolAddress: {
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
