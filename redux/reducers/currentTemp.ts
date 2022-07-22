import { ActionTypes } from '../../models/redux.model';
import { SET_CURRENT_TEMP } from '../../utils/constants';

const initialState: number = 0;

export const currentTempReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_CURRENT_TEMP:
      return payload;

    default:
      return state;
  }
};
