import { createSelector } from '@reduxjs/toolkit';

import type { TAppState } from 'store/rootReducer';

export const initDataSelect = createSelector(
  (store: TAppState) => store.main.initData,
  (initData) => initData,
);

export const rndDataSelect = createSelector(
  (store: TAppState) => store.main.rndData,
  (rndData) => rndData,
);

export const loadingSelect = createSelector(
  (store: TAppState) => store.main.loading,
  (loading) => loading,
);
