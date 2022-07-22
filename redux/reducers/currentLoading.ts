import { ActionTypes } from '../../models';
import { SET_CURRENT_LOADING } from '../../utils/constants';

const initialState: boolean = false;

export const currentLoadingReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_CURRENT_LOADING:
      return payload;

    default:
      return state;
  }
};
