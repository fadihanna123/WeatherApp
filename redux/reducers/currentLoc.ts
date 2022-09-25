import { ActionTypes } from '../../models/redux.model';
import { SET_CURRENT_LOC } from '../../utils/constants';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: string = '';

/**
 * Current location reducer.
 *
 * @param state - String
 * @param Actiontypes
 * @returns String | void
 */

export const currentLocReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_CURRENT_LOC:
      return payload;

    default:
      return state;
  }
};
