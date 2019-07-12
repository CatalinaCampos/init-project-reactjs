export const SET_NOTICE = "SET_NOTICE";

export const setNotice = (params) => ({
  type: SET_NOTICE,
  message: params.text
});
