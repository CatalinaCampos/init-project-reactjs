import { all } from 'redux-saga/effects';
import auth from './auth';
import utils from './utils';

export default function* rootSaga() {
  yield all([auth(), utils()]);
}
