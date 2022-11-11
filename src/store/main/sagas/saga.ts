import { SagaIterator } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

import { getInitDataSaga } from '../actions';

import { initData } from '../reducers';

import { httpRequest } from 'api/main/httpRequest';

function* getInitData() {
  try {
    const initValue: string[] = yield httpRequest();
    yield put(initData(initValue));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

export function* rootSearchSaga(): SagaIterator {
  [yield takeEvery(getInitDataSaga, getInitData)];
}
