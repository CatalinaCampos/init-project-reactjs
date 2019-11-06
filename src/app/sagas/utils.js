import { takeEvery, put } from 'redux-saga/effects';
import { utilsTypes } from '../actions/utils';
import API from '../services/api';
import runDefaultSaga from './default';

// Slides
const getSlidesRequest = () => API.get('/pages');

function* getSlidesSuccessCallback(result, response) {
  if (result.errors) {
    throw new Error(result.errors.join('\n'));
  } else {
    yield put({ type: utilsTypes.GET_SLIDES_SUCCESS, result, response });
  }
}

function* getSlidesFailureCallback() {
  yield put({
    type: utilsTypes.GET_SLIDES_FAILURE
  });
}

function* getSlides() {
  yield runDefaultSaga(
    { request: getSlidesRequest },
    getSlidesSuccessCallback,
    getSlidesFailureCallback
  );
}

// Page
const getPageRequest = url => API.get(`/pages/${url}`);

function* getPageSuccessCallback(result) {
  if (result.errors) {
    throw new Error(result.errors.join('\n'));
  } else {
    yield put({ type: utilsTypes.GET_PAGE_SUCCESS, result });
  }
}

function* getPageFailureCallback() {
  yield put({
    type: utilsTypes.GET_PAGE_FAILURE
  });
}

function* getPage(action) {
  yield runDefaultSaga(
    { request: getPageRequest, params: action.url },
    getPageSuccessCallback,
    getPageFailureCallback
  );
}

// DEFINE utilsSagas
export default function* utilsSagas() {
  yield takeEvery(utilsTypes.GET_SLIDES_REQUEST, getSlides);
  yield takeEvery(utilsTypes.GET_PAGE_REQUEST, getPage);
}
