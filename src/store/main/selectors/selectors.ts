import { createSelector } from '@reduxjs/toolkit';

import { AppStateType } from '../../rootReducer';

export const selectInitData = createSelector(
  (store: AppStateType) => store.main.initData,
  (initData) => initData,
);
export const selectRndData = createSelector(
  (store: AppStateType) => store.main.rndData,
  (rndData) => rndData,
);
