import { configureStore } from '@reduxjs/toolkit';
import userSlice from '@/store/userSlice';

const store = configureStore({
  reducer: userSlice,
});

export default store;
