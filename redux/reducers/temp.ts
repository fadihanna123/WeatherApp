import { ActionTypes } from '../../models/redux.model';
import { SET_TEMP } from '../../utils/constants';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: number = 0;

/**
 * Temperatur reducer.
 *
 * @param state - Number
 * @param Actiontypes
 * @returns Number | void
 */

export const tempReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_TEMP:
      return payload;

    default:
      return state;
  }
};
