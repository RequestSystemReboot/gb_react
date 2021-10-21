export const SET_ERROR_COVID = "SET_ERROR_COVID";
export const SET_LOADING_COVID = "SET_LOADING_COVID";
export const SET_DATA_COVID = "SET_DATA_COVID";

export const setLoading = (status) => ({
  type: SET_LOADING_COVID,
  payload: status,
});

export const setError = (status) => ({
  type: SET_ERROR_COVID,
  payload: status,
});

export const setData = (todos) => ({
  type: SET_DATA_COVID,
  payload: todos,
});

const API_URL = "https://covid-api.mmediagroup.fr/v1/cases?country=Russia";

export const getCovidStat = async (dispatch) => {
  dispatch(setLoading(true));
  dispatch(setError(false));

  try {
    const response = await fetch(API_URL);
    const result = await response.json();
    dispatch(setData(result));
    console.log(result);
  } catch (e) {
    console.error(e);
    dispatch(setError(true));
  }
  dispatch(setLoading(false));
};
