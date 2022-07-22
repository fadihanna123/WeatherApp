import { ActionTypes } from '../../models/redux.model';
import { SET_CURRENT_DEC } from '../../utils/constants';

const initialState: string = '';

export const currentDecReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_CURRENT_DEC:
      return payload;

    default:
      return state;
  }
};
