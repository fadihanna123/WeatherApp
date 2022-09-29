import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../app';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: boolean = false;

export const viewCurrentSlice = createSlice({
  name: 'viewCurrent',
  initialState,
  reducers: {
    setViewCurrent: (state, action: PayloadAction<boolean>) =>
      (state = action.payload),
  },
});

export const { setViewCurrent } = viewCurrentSlice.actions;

export default viewCurrentSlice.reducer;
export const getViewCurrent = (state: RootState) => state.viewCurrent;
