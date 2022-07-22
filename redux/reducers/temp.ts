import { ActionTypes } from '../../models/redux.model';
import { SET_TEMP } from '../../utils/constants';

const initialState: number = 0;

export const tempReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_TEMP:
      return payload;

    default:
      return state;
  }
};
