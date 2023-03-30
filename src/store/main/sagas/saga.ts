import type { SagaIterator } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

import { getInitDataSaga } from '../actions';

import { initData, loading } from '../reducers';

import { httpRequest } from 'api/httpRequest';

function* getInitData() {
  yield put(loading(true));
  try {
    const randomUser: string = yield `a${(Math.random() * 10).toFixed()}`;

    const { avatar_url } = yield httpRequest(`users/${randomUser}`);

    yield put(initData(avatar_url));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  } finally {
    yield put(loading(false));
  }
}

export function* rootSearchSaga(): SagaIterator {
  [yield takeEvery(getInitDataSaga, getInitData)];
}
