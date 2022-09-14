import { ActionTypes } from '../../models/redux.model';
import { SET_CITY_INPUT } from '../../utils/constants';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: string = '';

/**
 * City value reducer.
 *
 * @param state - String
 * @param Actiontypes
 * @returns String | void
 */

export const cityInputReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_CITY_INPUT:
      return payload;

    default:
      return state;
  }
};
