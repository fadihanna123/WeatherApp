import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Components
import { RootState } from '../app';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: string = '';

export const currentDecSlice = createSlice({
  name: 'currentDec',
  initialState,
  reducers: {
    setCurrentDec: (state, action: PayloadAction<string>) =>
      (state = action.payload),
  },
});

export const { setCurrentDec } = currentDecSlice.actions;

export default currentDecSlice.reducer;
export const getCurrentDec = (state: RootState) => state.currentDec;
