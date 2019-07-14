import { call, put, race, delay } from 'redux-saga/effects';
import API from '../services/api';

const SET_NOTICE = '';
function* runDefaultSaga(callRequest, successCallback, failureCallback) {
  try {
    const { response, timeout } = yield race({
      response: call(callRequest.request, callRequest.params),
      timeout: delay(API.getGlobalTimeout())
    });
    console.log(callRequest);

    if (timeout) throw new Error(API.getTimeoutMessage());

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
