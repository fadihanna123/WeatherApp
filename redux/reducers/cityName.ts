import { ActionTypes } from '../../models/redux.model';
import { SET_CITY_NAME } from '../../utils/constants';

const initialState: string = '';

export const cityNameReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_CITY_NAME:
      return payload;

    default:
      return state;
  }
};
