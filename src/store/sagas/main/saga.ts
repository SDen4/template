import { put, takeEvery } from 'redux-saga/effects';

import httpRequest from '../../../api/main/httpRequest';
import { getInitDataSaga, saveInitData } from '../../reducers/main';

import { initDataType } from '../../../model/main/types';

function* getInitData() {
  try {
    const initData: initDataType = yield httpRequest();
    yield put(saveInitData(initData));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

export function* rootSearchSaga(): Generator<unknown> {
  yield takeEvery(getInitDataSaga, getInitData);
}
