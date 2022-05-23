import { combineReducers } from 'redux';
import { createAction, createReducer } from '@reduxjs/toolkit';

import { initDataType } from '../types/types';

const main = 'main';

// initial state =====================
const initDataState: any[] = [];
const randomDataState: number = 0;

// Actions (sagas) ===================
export const getInitDataSaga = createAction(`${main}/GET_INIT_DATA_SAGA`);

// Actions ===========================
export const saveInitData = createAction<initDataType>(
  `${main}/SAVE_INIT_DATA`,
);
export const saveRndData = createAction<number>(`${main}/SAVE_RND_DATA`);

// Reducers ==========================
const initData = createReducer(initDataState, {
  [saveInitData.toString()]: (_state, action) => action.payload,
});
const rndData = createReducer(randomDataState, {
  [saveRndData.toString()]: (_state, action) => action.payload,
});

// Root Reducer ======================
const mainRootReducer = combineReducers({ initData, rndData });

export default mainRootReducer;
