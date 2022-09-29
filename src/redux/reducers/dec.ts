import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../app';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: string = '';

export const decSlice = createSlice({
  name: 'dec',
  initialState,
  reducers: {
    setDec: (state, action: PayloadAction<string>) => (state = action.payload),
  },
});

export const { setDec } = decSlice.actions;

export default decSlice.reducer;
export const getDec = (state: RootState) => state.dec;
