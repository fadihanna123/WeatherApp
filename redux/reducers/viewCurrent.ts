import { ActionTypes } from '../../models/redux.model';
import { SET_VIEW_CURRENT } from '../../utils/constants';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: boolean = false;

/**
 * View current reducer.
 *
 * @param state - Boolean
 * @param Actiontypes
 * @returns Boolean | void
 */

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
