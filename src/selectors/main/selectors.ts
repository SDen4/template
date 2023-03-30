import { createSelector } from '@reduxjs/toolkit';

import type { AppStateType } from 'store/rootReducer';

export const initDataSelect = createSelector(
  (store: AppStateType) => store.main.initData,
  (initData) => initData,
);

export const rndDataSelect = createSelector(
  (store: AppStateType) => store.main.rndData,
  (rndData) => rndData,
);

export const loadingSelect = createSelector(
  (store: AppStateType) => store.main.loading,
  (loading) => loading,
);
