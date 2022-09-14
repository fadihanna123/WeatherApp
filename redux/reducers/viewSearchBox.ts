import { ActionTypes } from '../../models/redux.model';
import { SET_VIEW_SEARCH_BOX } from '../../utils/constants';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: boolean = false;

/**
 * View Searchbox reducer.
 *
 * @param state - Boolean
 * @param Actiontypes
 * @returns Boolean | void
 */

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
