import { combineReducers } from '@reduxjs/toolkit';

import mainReducer from 'store/main/reducers/reducer';

export const rootReducer = combineReducers({
  main: mainReducer,
});

export type TAppState = ReturnType<typeof rootReducer>;
