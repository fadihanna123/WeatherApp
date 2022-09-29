import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../app';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: string = '';

export const cityNameSlice = createSlice({
  name: 'cityName',
  initialState,
  reducers: {
    setCityName: (state, action: PayloadAction<string>) =>
      (state = action.payload),
  },
});

export const { setCityName } = cityNameSlice.actions;

export default cityNameSlice.reducer;
export const getCityName = (state: RootState) => state.cityName;
