export const authTypes = {
  SIGN_IN_REQUEST: 'SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE: 'SIGN_IN_FAILURE',
  SIGN_OUT_REQUEST: 'SIGN_OUT_REQUEST',
  SIGN_OUT_SUCCESS: 'SIGN_OUT_SUCCESS',
  SIGN_OUT_FAILURE: 'SIGN_OUT_FAILURE',
  RESTORE_AUTH_INFO: 'RESTORE_AUTH_INFO',
  VALIDATE_TOKEN_REQUEST: 'VALIDATE_TOKEN_REQUEST',
  VALIDATE_TOKEN_SUCCESS: 'VALIDATE_TOKEN_SUCCESS',
  CLEAR_AUTH_INFO: 'CLEAR_AUTH_INFO',
  PASSWORD_RECOVERY_REQUEST: 'PASSWORD_RECOVERY_REQUEST',
  PASSWORD_RECOVERY_FINISHED: 'PASSWORD_RECOVERY_FINISHED',
  SIGN_UP_REQUEST: 'SIGN_UP_REQUEST',
  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
  SIGN_UP_FAILURE: 'SIGN_UP_FAILURE',
  SET_INFO_USER: 'SET_INFO_USER'
};

export const requestSignIn = params => ({
  type: authTypes.SIGN_IN_REQUEST,
  params
});
export const requestSignOut = () => ({ type: authTypes.SIGN_OUT_REQUEST });
export const restoreAuthInfo = auth => ({
  type: authTypes.RESTORE_AUTH_INFO,
  auth
});
export const requestPasswordRecovery = params => ({
  type: authTypes.PASSWORD_RECOVERY_REQUEST,
  params
});
export const validateToken = () => ({ type: authTypes.VALIDATE_TOKEN_REQUEST });
export const signUpRequest = params => ({
  type: authTypes.SIGN_UP_REQUEST,
  params
});
