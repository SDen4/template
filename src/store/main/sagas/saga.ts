import { put, takeEvery } from 'redux-saga/effects';

import { getInitDataSaga, saveInitData } from '../duck';

import { API } from '../../../utils/api';

import { initDataType } from '../types/types';

async function getData() {
  const response = await API.get('getInitData').then((res) => res.data);
  return response;
}

function* getInitData() {
  const initData: initDataType = yield getData();
  yield put(saveInitData(initData));
}

export function* rootSearchSaga(): Generator<unknown> {
  yield takeEvery(getInitDataSaga, getInitData);
}
