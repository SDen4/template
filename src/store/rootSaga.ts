import { all, fork } from 'redux-saga/effects';

import { rootSearchSaga } from './sagas/main/saga';

export function* rootSaga(): Generator<unknown> {
  yield all([fork(rootSearchSaga)]);
}
