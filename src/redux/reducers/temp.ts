import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../app';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: number = 0;

export const tempSlice = createSlice({
  name: 'temp',
  initialState,
  reducers: {
    setTemp: (state, action: PayloadAction<number>) => (state = action.payload),
  },
});

export const { setTemp } = tempSlice.actions;

export default tempSlice.reducer;
export const getTemp = (state: RootState) => state.temp;
