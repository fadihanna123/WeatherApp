import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../app';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: string = '';

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) =>
      (state = action.payload),
  },
});

export const { setError } = errorSlice.actions;

export default errorSlice.reducer;
export const getError = (state: RootState) => state.error;
