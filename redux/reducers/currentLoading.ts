import { ActionTypes } from '../../models';
import { SET_CURRENT_LOADING } from '../../utils/constants';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: boolean = false;

/**
 * Current loading reducer.
 *
 * @param state - Boolean
 * @param Actiontypes
 * @returns Boolean
 */

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
