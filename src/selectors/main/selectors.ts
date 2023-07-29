import { createSelector } from '@reduxjs/toolkit';

import type { AppStateType } from 'store/rootReducer';

export const rndDataSelect = createSelector(
  (store: AppStateType) => store.main.rndData,
  (rndData) => rndData,
);
