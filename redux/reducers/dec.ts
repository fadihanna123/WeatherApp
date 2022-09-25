import { ActionTypes } from '../../models/redux.model';
import { SET_DEC } from '../../utils/constants';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: string = '';

/**
 * Description reducer.
 *
 * @param state - String
 * @param Actiontypes
 * @returns String | void
 */

export const decReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_DEC:
      return payload;

    default:
      return state;
  }
};
