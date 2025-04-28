import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Components
import { RootState } from '../app';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: string = '';

export const currentLocSlice = createSlice({
  name: 'currentLoc',
  initialState,
  reducers: {
    setCurrentLoc: (state, action: PayloadAction<string>) =>
      (state = action.payload),
  },
});

export const { setCurrentLoc } = currentLocSlice.actions;

export default currentLocSlice.reducer;
export const getCurrentLoc = (state: RootState) => state.currentLoc;
