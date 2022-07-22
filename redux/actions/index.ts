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

export const setTemp = (payload: number) => {
  return { type: SET_TEMP, payload };
};

export const setDec = (payload: string) => {
  return { type: SET_DEC, payload };
};

export const setCityName = (payload: string) => {
  return { type: SET_CITY_NAME, payload };
};

export const setCityInput = (payload: string) => {
  return { type: SET_CITY_INPUT, payload };
};

export const setError = (payload: string) => {
  return { type: SET_ERROR, payload };
};

export const setLoading = (payload: boolean) => {
  return { type: SET_LOADING, payload };
};

export const setViewCurrent = (payload: boolean) => {
  return { type: SET_VIEW_CURRENT, payload };
};

export const setViewSearchBox = (payload: boolean) => {
  return { type: SET_VIEW_SEARCH_BOX, payload };
};

export const setCurrentLoc = (payload: boolean) => {
  return { type: SET_CURRENT_LOC, payload };
};

export const setCurrentLoading = (payload: boolean) => {
  return { type: SET_CURRENT_LOADING, payload };
};

export const setCurrentTemp = (payload: number) => {
  return { type: SET_CURRENT_TEMP, payload };
};

export const setCurrentDec = (payload: boolean) => {
  return { type: SET_CURRENT_DEC, payload };
};
