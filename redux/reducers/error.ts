import { ActionTypes } from '../../models';
import { SET_ERROR } from '../../utils/constants';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: string = '';

/**
 * Error reducer.
 *
 * @param state - String
 * @param Actiontypes
 * @returns String | void
 */

export const errorReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_ERROR:
      return payload;

    default:
      return state;
  }
};
