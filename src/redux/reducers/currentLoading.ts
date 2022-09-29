import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../app';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: boolean = false;

export const currentLoadingSlice = createSlice({
  name: 'currentLoading',
  initialState,
  reducers: {
    setCurrentLoading: (state, action: PayloadAction<boolean>) =>
      (state = action.payload),
  },
});

export const { setCurrentLoading } = currentLoadingSlice.actions;

export default currentLoadingSlice.reducer;
export const getCurrentLoading = (state: RootState) => state.currentLoading;
