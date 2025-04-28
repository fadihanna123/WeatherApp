import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Components
import { RootState } from '../app';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: string = '';

export const cityInputSlice = createSlice({
  name: 'cityInput',
  initialState,
  reducers: {
    setCityInput: (state, action: PayloadAction<string>) =>
      (state = action.payload),
  },
});

export const { setCityInput } = cityInputSlice.actions;

export default cityInputSlice.reducer;
export const getCityInput = (state: RootState) => state.cityInput;
