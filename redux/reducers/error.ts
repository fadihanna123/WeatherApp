import { ActionTypes } from '../../models';
import { SET_ERROR } from '../../utils/constants';

const initialState: string = '';

export const errorReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_ERROR:
      return payload;

    default:
      return state;
  }
};
