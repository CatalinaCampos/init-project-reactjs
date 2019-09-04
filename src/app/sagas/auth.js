import { takeEvery, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { authTypes, requestSignIn } from '../actions/auth';
import { utilsTypes } from '../actions/utils';
import API from '../services/api';
import runDefaultSaga from './default';

// SIGN IN
const signInRequest = params => API.post('/login', params);
function* signInSuccessCallback(result, response) {
  if (result.errors) {
    throw new Error(result.errors.join('\n'));
  } else {
    yield put({ type: authTypes.SIGN_IN_SUCCESS, result, response });
    yield put(push('/home'));
  }
}
function* signInFailureCallback() {
  yield put({
    type: authTypes.SIGN_IN_FAILURE
  });
}
function* signIn(action) {
  yield runDefaultSaga(
    { request: signInRequest, params: action.params },
    signInSuccessCallback,
    signInFailureCallback
  );
}

// CREATE ACCOUNT
const signUpRequest = params => API.post('/signup', params);
function* signUpSuccessCallback(result, response, params) {
  if (result.errors) {
    throw new Error(result.errors.join('\n'));
  } else {
    yield put({ type: authTypes.SIGN_UP_SUCCESS, result, response });
    const user = params;
    delete user.password_confirmation;
    yield put(requestSignIn(user));
  }
}
function* signUpFailureCallback() {
  yield put({
    type: authTypes.SIGN_UP_FAILURE
  });
}
function* signUp(action) {
  yield runDefaultSaga(
    { request: signUpRequest, params: action.params },
    signUpSuccessCallback,
    signUpFailureCallback
  );
}

// SIGN OUT
const signOutRequest = () => API.delete('/logout');
function* signOutSuccessCallback(result) {
  if (result.success) {
    yield localStorage.removeItem('jwt');
    yield put({ type: authTypes.SIGN_OUT_SUCCESS });
    yield put(push('/home'));
  } else {
    throw new Error(result);
  }
}
function* signOutFailureCallback() {
  yield put({ type: authTypes.SIGN_OUT_FAILURE });
}
function* signOut() {
  yield runDefaultSaga(
    { request: signOutRequest },
    signOutSuccessCallback,
    signOutFailureCallback
  );
}

// VALIDATE TOKENS
const validateTokenRequest = () => API.get('/me');
function* validateTokensSuccessCallback(result, response) {
  yield put({
    type: authTypes.VALIDATE_TOKEN_SUCCESS,
    result,
    response
  });
}
function* validateTokensFailureCallback() {
  yield put({ type: authTypes.CLEAR_AUTH_INFO });
}
function* validateToken() {
  yield runDefaultSaga(
    { request: validateTokenRequest },
    validateTokensSuccessCallback,
    validateTokensFailureCallback
  );
}

// RECOVER PASSWORD
const recoverPasswordRequest = params => API.post('/password/forgot', params);
function* recoverPasswordSuccessCallback(result) {
  yield put({ type: authTypes.PASSWORD_RECOVERY_FINISHED });
  yield put(push('/login'));
  yield put({
    type: utilsTypes.SET_ALERT,
    kind: 'success',
    message: result.message
  });
}
function* recoverPasswordFailureCallback() {
  yield null;
}
function* recoverPassword(action) {
  yield runDefaultSaga(
    { request: recoverPasswordRequest, params: action.params },
    recoverPasswordSuccessCallback,
    recoverPasswordFailureCallback
  );
}

// DEFINE authSagas
export default function* authSagas() {
  yield takeEvery(authTypes.SIGN_IN_REQUEST, signIn);
  yield takeEvery(authTypes.SIGN_UP_REQUEST, signUp);
  yield takeEvery(authTypes.SIGN_OUT_REQUEST, signOut);
  yield takeEvery(authTypes.VALIDATE_TOKEN_REQUEST, validateToken);
  yield takeEvery(authTypes.PASSWORD_RECOVERY_REQUEST, recoverPassword);
}
