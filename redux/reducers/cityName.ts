import { ActionTypes } from '../../models/redux.model';
import { SET_CITY_NAME } from '../../utils/constants';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: string = '';

/**
 * CityName reducer.
 *
 * @param state - String
 * @param Actiontypes
 * @returns String | void
 */

export const cityNameReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_CITY_NAME:
      return payload;

    default:
      return state;
  }
};
