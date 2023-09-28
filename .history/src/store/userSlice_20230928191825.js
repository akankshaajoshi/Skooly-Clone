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
      state.phoneNumber = action.payload.phoneNumber;
      state.website = action.payload.website;
      state.email = action.payload.email;
      state.timezone = action.payload.timezone;
      state.currency = action.payload.currency;
      state.schoolAddress = {
        street: action.payload.street,
        city: action.payload.city,
        state: action.payload.state,
        zipCode: action.payload.zipCode,
      };
    },
  },
});

export const { editUser } = userSlice.actions;

export default userSlice.reducer;
