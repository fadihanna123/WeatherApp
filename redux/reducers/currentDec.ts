import { ActionTypes } from '../../models/redux.model';
import { SET_CURRENT_DEC } from '../../utils/constants';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: string = '';

/**
 * Current description reducer.
 *
 * @param state - String
 * @param Actiontypes
 * @returns String | void
 */

export const currentDecReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_CURRENT_DEC:
      return payload;

    default:
      return state;
  }
};
