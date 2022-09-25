import {
  SET_CITY_INPUT,
  SET_CITY_NAME,
  SET_CURRENT_DEC,
  SET_CURRENT_LOADING,
  SET_CURRENT_LOC,
  SET_CURRENT_TEMP,
  SET_DEC,
  SET_ERROR,
  SET_LOADING,
  SET_TEMP,
  SET_VIEW_CURRENT,
  SET_VIEW_SEARCH_BOX,
} from '../../utils/constants';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Temp action.
 *
 * @param payload - Number
 * @returns Object
 */

export const setTemp = (payload: number) => {
  return { type: SET_TEMP, payload };
};

/**
 * Decriptions action.
 *
 * @param payload - String
 * @returns Object
 */

export const setDec = (payload: string) => {
  return { type: SET_DEC, payload };
};

/**
 * CityName action.
 *
 * @param payload - String
 * @returns Object
 */

export const setCityName = (payload: string) => {
  return { type: SET_CITY_NAME, payload };
};

/**
 * City value action.
 *
 * @param payload - String
 * @returns Object
 */

export const setCityInput = (payload: string) => {
  return { type: SET_CITY_INPUT, payload };
};

/**
 * Error action.
 *
 * @param payload - String
 * @returns Object
 */

export const setError = (payload: string) => {
  return { type: SET_ERROR, payload };
};

/**
 * Loading action.
 *
 * @param payload - Boolean
 * @returns Object
 */

export const setLoading = (payload: boolean) => {
  return { type: SET_LOADING, payload };
};

/**
 * View Current action
 *
 * @param payload - Boolean
 * @returns Object
 */

export const setViewCurrent = (payload: boolean) => {
  return { type: SET_VIEW_CURRENT, payload };
};

/**
 * ViewSearchBox action.
 *
 * @param payload - Boolean
 * @returns Object
 */

export const setViewSearchBox = (payload: boolean) => {
  return { type: SET_VIEW_SEARCH_BOX, payload };
};

/**
 * Current location action.
 *
 * @param payload - Boolean
 * @returns Object
 */

export const setCurrentLoc = (payload: boolean) => {
  return { type: SET_CURRENT_LOC, payload };
};

/**
 * Current loading action.
 *
 * @param payload - Boolean
 * @returns Object
 */

export const setCurrentLoading = (payload: boolean) => {
  return { type: SET_CURRENT_LOADING, payload };
};

/**
 * Current temperatur action.
 *
 * @param payload - Number
 * @returns Object
 */

export const setCurrentTemp = (payload: number) => {
  return { type: SET_CURRENT_TEMP, payload };
};

/**
 * Current description action.
 *
 * @param payload - Boolean
 * @returns Object
 */

export const setCurrentDec = (payload: boolean) => {
  return { type: SET_CURRENT_DEC, payload };
};
