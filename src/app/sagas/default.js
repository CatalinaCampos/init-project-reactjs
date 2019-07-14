import { call, put, race, delay } from 'redux-saga/effects';
import API_CONFIG from '../config/configurations';

const SET_NOTICE = '';
const { globalTimeout, timeoutMessage } = API_CONFIG;

function* runDefaultSaga(callRequest, successCallback, failureCallback) {
  try {
    const { response, timeout } = yield race({
      response: call(callRequest.request, callRequest.params),
      timeout: delay(globalTimeout)
    });
    console.log(callRequest);

    if (timeout) throw new Error(timeoutMessage);

    if (response.ok) {
      const result = yield response.json();
      yield successCallback(result, response);
    } else {
      const message = yield response.json();
      throw message.errors || 'Inténtelo más tarde.';
    }
  } catch (err) {
    console.log(err);
    yield failureCallback(err);
    yield put({
      type: SET_NOTICE,
      title: 'Error',
      message: err.toString(),
      kind: 'error'
    });
  }
}

export default runDefaultSaga;
