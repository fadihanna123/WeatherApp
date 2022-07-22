import { ActionTypes } from '../../models/redux.model';
import { SET_DEC } from '../../utils/constants';

const initialState: string = '';

export const decReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_DEC:
      return payload;

    default:
      return state;
  }
};
