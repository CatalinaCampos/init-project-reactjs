export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';
export const SIGN_OUT_REQUEST = 'SIGN_OUT_REQUEST';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE';
export const RESTORE_AUTH_INFO = 'RESTORE_AUTH_INFO';
export const VALIDATE_TOKEN_REQUEST = 'VALIDATE_TOKEN_REQUEST';
export const VALIDATE_TOKEN_SUCCESS = 'VALIDATE_TOKEN_SUCCESS';
export const CLEAR_AUTH_INFO = 'CLEAR_AUTH_INFO';
export const PASSWORD_RECOVERY_REQUEST = 'PASSWORD_RECOVERY_REQUEST';
export const PASSWORD_RECOVERY_FINISHED = 'PASSWORD_RECOVERY_FINISHED';

export const requestSignIn = params => ({ type: SIGN_IN_REQUEST, params });
export const requestSignOut = () => ({ type: SIGN_OUT_REQUEST });
export const restoreAuthInfo = auth => ({ type: RESTORE_AUTH_INFO, auth });
export const requestPasswordRecovery = params => ({
  type: PASSWORD_RECOVERY_REQUEST,
  params
});
export const validateToken = () => ({ type: VALIDATE_TOKEN_REQUEST });

// login

const alertConstants = {
  SUCCESS: 'ALERT_SUCCESS',
  ERROR: 'ALERT_ERROR',
  CLEAR: 'ALERT_CLEAR'
};

const success = message => {
  return { type: alertConstants.SUCCESS, message };
};

const error = message => {
  return { type: alertConstants.ERROR, message };
};

const clear = () => {
  return { type: alertConstants.CLEAR };
};

const alertActions = {
  success,
  error,
  clear
};

const userConstants = {
  REGISTER_REQUEST: 'USERS_REGISTER_REQUEST',
  REGISTER_SUCCESS: 'USERS_REGISTER_SUCCESS',
  REGISTER_FAILURE: 'USERS_REGISTER_FAILURE',

  LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
  LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
  LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',

  LOGOUT: 'USERS_LOGOUT',

  GETALL_REQUEST: 'USERS_GETALL_REQUEST',
  GETALL_SUCCESS: 'USERS_GETALL_SUCCESS',
  GETALL_FAILURE: 'USERS_GETALL_FAILURE',

  DELETE_REQUEST: 'USERS_DELETE_REQUEST',
  DELETE_SUCCESS: 'USERS_DELETE_SUCCESS',
  DELETE_FAILURE: 'USERS_DELETE_FAILURE'
};

export { alertActions, alertConstants, userConstants };
