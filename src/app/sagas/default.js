import { call, put, race, delay } from 'redux-saga/effects';
import jwt from 'jwt-decode';
import API_CONFIG from '../config/configurations';
import { authTypes } from '../actions/auth';
import { utilsTypes } from '../actions/utils';

const { globalTimeout, timeoutMessage } = API_CONFIG;

function* setUserHeaders(headers) {
  try {
    const authorization = headers.get('Authorization').split('Bearer ')[1];
    if (authorization) {
      localStorage.setItem('jwt', authorization);
      yield put({
        type: authTypes.SET_INFO_USER,
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

    if (response.ok) {
      const result =
        response.status === 204 ? { success: true } : yield response.json();
      yield setUserHeaders(response.headers);
      yield successCallback(result, response, callRequest.params);
    } else if (response.status === 401) {
      throw new Error(
        response.meesage || 'Ocurrió un problema en la autenticación'
      );
    } else if (response.status === 403) {
      throw new Error(
        response.meesage || 'Necesitas autorización para realizar esta acción'
      );
    } else if (response.meesage) {
      throw new Error(response.meesage);
    } else {
      throw new Error('Hubo un problema. Vuelva a intentar.');
    }
  } catch (error) {
    yield failureCallback(error, callRequest.params);
    yield put({
      type: utilsTypes.SET_ALERT,
      kind: 'error',
      message: error.message
    });
  }
}

export default runDefaultSaga;
