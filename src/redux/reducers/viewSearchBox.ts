import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Components
import { RootState } from '../app';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: boolean = false;

export const viewSearchBoxSlice = createSlice({
  name: 'viewSearchBox',
  initialState,
  reducers: {
    setViewSearchBox: (state, action: PayloadAction<boolean>) =>
      (state = action.payload),
  },
});

export const { setViewSearchBox } = viewSearchBoxSlice.actions;

export default viewSearchBoxSlice.reducer;
export const getViewSearchBox = (state: RootState) => state.viewSearchBox;
