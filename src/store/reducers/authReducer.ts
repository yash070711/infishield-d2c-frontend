// reducers/cartReducer.ts
import { createSlice } from '@reduxjs/toolkit';
import { fetchAuthUser } from '../actions/authActions';
import { initialState } from '@/interfaces/common.interfaces';




const authReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAuthUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchAuthUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export default authReducer.reducer;
