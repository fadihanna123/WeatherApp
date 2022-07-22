import { ActionTypes } from '../../models/redux.model';
import { SET_CITY_INPUT } from '../../utils/constants';

const initialState: string = '';

export const cityInputReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_CITY_INPUT:
      return payload;

    default:
      return state;
  }
};
