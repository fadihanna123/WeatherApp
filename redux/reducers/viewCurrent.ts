import { ActionTypes } from '../../models/redux.model';
import { SET_VIEW_CURRENT } from '../../utils/constants';

const initialState: boolean = false;

export const viewCurrentReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_VIEW_CURRENT:
      return payload;

    default:
      return state;
  }
};
