import { takeEvery, call, put } from 'redux-saga/effects';
import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  PASSWORD_RECOVERY_FINISHED,
  PASSWORD_RECOVERY_REQUEST,
  VALIDATE_TOKEN_REQUEST,
  VALIDATE_TOKEN_SUCCESS,
  CLEAR_AUTH_INFO
} from '../actions/auth';
import API from '../services/api';
import runDefaultSaga from './default';

const SET_NOTICE = '';
// SIGN IN
const signInRequest = params => API.post('/auth/sign_in', params);
function* signInSuccessCallback(result, response) {
  console.log('Succ', result, response);
  if (result.errors) {
    throw new Error(result.errors.join('\n'));
  } else {
    yield call(
      localStorage.setItem,
      'access-token',
      response.headers.get('access-token')
    );
    yield call(localStorage.setItem, 'client', response.headers.get('client'));
    yield call(localStorage.setItem, 'expiry', response.headers.get('expiry'));
    yield call(
      localStorage.setItem,
      'token-type',
      response.headers.get('token-type')
    );
    yield call(localStorage.setItem, 'uid', response.headers.get('uid'));
    yield put({ type: SIGN_IN_SUCCESS, result, response });
  }
}
function* signInFailureCallback() {
  console.log('Error');
  yield put({
    type: SIGN_IN_FAILURE
  });
}
function* signIn(action) {
  yield runDefaultSaga(
    { request: signInRequest, params: action.params },
    signInSuccessCallback,
    signInFailureCallback
  );
}

// SIGN OUT
const signOutRequest = () => API.delete('/auth/sign_out');
function* signOutSuccessCallback(result) {
  if (result.success) {
    yield call(localStorage.removeItem, 'access-token');
    yield call(localStorage.removeItem, 'client');
    yield call(localStorage.removeItem, 'expiry');
    yield call(localStorage.removeItem, 'token-type');
    yield call(localStorage.removeItem, 'uid');
    yield put({ type: SIGN_OUT_SUCCESS });
    yield put({
      type: SET_NOTICE,
      message: 'Sesión cerrada corectamente',
      kind: 'success',
      title: 'Éxito'
    });
  } else {
    throw new Error(result.errors.join('\n'));
  }
}
function* signOutFailureCallback() {
  yield put({ type: SIGN_OUT_FAILURE });
}
function* signOut() {
  yield runDefaultSaga(
    { request: signOutRequest },
    signOutSuccessCallback,
    signOutFailureCallback
  );
}

// VALIDATE TOKENS
const validateTokenRequest = () => API.get('/auth/validate_token');
function* validateTokensSuccessCallback(result, response) {
  // if (result.ok) {
  yield put({
    type: VALIDATE_TOKEN_SUCCESS,
    result,
    response,
    navigateTo: 'App'
  });
  // } else {
  //   throw new Error(response.errors.join('\n'));
  // }
}
function* validateTokensFailureCallback() {
  yield put({ type: CLEAR_AUTH_INFO, navigateTo: 'Auth' });
}
function* validateToken() {
  yield runDefaultSaga(
    { request: validateTokenRequest },
    validateTokensSuccessCallback,
    validateTokensFailureCallback
  );
}

// RECOVER PASSWORD
const recoverPasswordRequest = params => API.post('/auth/password', params);
function* recoverPasswordSuccessCallback(result) {
  yield put({ type: PASSWORD_RECOVERY_FINISHED });
  if (result.success) {
    yield put({
      type: SET_NOTICE,
      title: 'Éxito',
      message: result.message,
      kind: 'success'
    });
  } else {
    throw new Error(result.errors.join('\n'));
  }
}
function* recoverPasswordFailureCallback() {
  // Error handled by runDefaultSaga
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
  yield takeEvery(SIGN_IN_REQUEST, signIn);
  yield takeEvery(SIGN_OUT_REQUEST, signOut);
  yield takeEvery(VALIDATE_TOKEN_REQUEST, validateToken);
  yield takeEvery(PASSWORD_RECOVERY_REQUEST, recoverPassword);
}
