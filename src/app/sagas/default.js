import { call, put, race, delay } from 'redux-saga/effects';
import jwt from 'jwt-decode';
import API_CONFIG from '../config/configurations';
import { SET_INFO_USER } from '../actions/auth';

const SET_NOTICE = '';
const { globalTimeout, timeoutMessage } = API_CONFIG;

function setUserHeaders(headers) {
  try {
    const authorization = headers.get('Authorization').split('Bearer ')[1];
    if (authorization) {
      localStorage.setItem('jwt', authorization);
      put({
        type: SET_INFO_USER,
        result: jwt(authorization)
      });
    }
  } catch (error) {
    // localStorage.removeItem('jwt');
  }
}

function* runDefaultSaga(callRequest, successCallback, failureCallback) {
  try {
    const { response, timeout } = yield race({
      response: call(callRequest.request, callRequest.params),
      timeout: delay(globalTimeout)
    });

    if (timeout) throw new Error(timeoutMessage);
    console.log('default');
    if (response.ok) {
      const result =
        response.status === 204 ? { success: true } : response.json();
      setUserHeaders(response.headers);
      yield successCallback(result, response);
    } else if (response.status === 401) {
      throw new Error(
        response.statusText || 'Ocurrió un problema en la autenticación'
      );
    } else if (response.status === 403) {
      throw new Error(
        response.statusText ||
          'Necesitas autorización para realizar esta acción'
      );
    } else if (response.statusText) {
      throw new Error(response.statusText);
    } else {
      throw new Error('Hubo un problema. Vuelva a intentar.');
    }
  } catch (error) {
    yield failureCallback(error);
    yield put({
      type: SET_NOTICE,
      title: 'Error',
      message: error.toString(),
      kind: 'error'
    });
  }
}

export default runDefaultSaga;
