import { all, fork } from 'redux-saga/effects';

import { rootSearchSaga } from 'store/main/sagas/saga';

export function* rootSaga(): Generator<unknown> {
  yield all([fork(rootSearchSaga)]);
}
