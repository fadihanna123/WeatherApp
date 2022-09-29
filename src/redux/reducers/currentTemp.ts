/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../app';

const initialState: number = 0;

export const currentTempSlice = createSlice({
  name: 'currentTemp',
  initialState,
  reducers: {
    setCurrentTemp: (state, action: PayloadAction<number>) =>
      (state = action.payload),
  },
});

export const { setCurrentTemp } = currentTempSlice.actions;

export default currentTempSlice.reducer;
export const getCurrentTemp = (state: RootState) => state.currentTemp;
