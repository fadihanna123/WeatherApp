import { ActionTypes } from '../../models/redux.model';
import { SET_CURRENT_LOC } from '../../utils/constants';

const initialState: string = '';

export const currentLocReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_CURRENT_LOC:
      return payload;

    default:
      return state;
  }
};
