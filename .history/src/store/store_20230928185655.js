import { configureStore } from '@reduxjs/toolkit';
import userSlice from '@/store/userSlice';

export default store = configureStore({
  reducer: userSlice,
});
