import { ActionTypes } from '../../models/redux.model';
import { SET_CURRENT_TEMP } from '../../utils/constants';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: number = 0;

/**
 * Current temp reducer.
 *
 * @param state - Number
 * @param Actiontypes
 * @returns Number | void
 */

export const currentTempReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_CURRENT_TEMP:
      return payload;

    default:
      return state;
  }
};
