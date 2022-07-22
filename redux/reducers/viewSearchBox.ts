import { ActionTypes } from '../../models/redux.model';
import { SET_VIEW_SEARCH_BOX } from '../../utils/constants';

const initialState: boolean = false;

export const viewSearchBoxReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_VIEW_SEARCH_BOX:
      return payload;

    default:
      return state;
  }
};
