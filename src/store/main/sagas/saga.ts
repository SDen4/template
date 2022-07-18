import { put, takeEvery } from 'redux-saga/effects';

import { getInitDataSaga, saveInitData } from '../duck';

import httpRequest from '../httpRequest';

import { initDataType } from '../types/types';

function* getInitData() {
  try {
    const initData: initDataType = yield httpRequest();
    yield put(saveInitData(initData));
  } catch (error) {
    console.log(error);
  }
}

export function* rootSearchSaga(): Generator<unknown> {
  yield takeEvery(getInitDataSaga, getInitData);
}
