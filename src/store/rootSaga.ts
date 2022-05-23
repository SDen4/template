import { fork, all } from 'redux-saga/effects';

import { rootSearchSaga } from './main/sagas/saga';

export default function* rootSaga(): Generator<unknown> {
  yield all([fork(rootSearchSaga)]);
}
