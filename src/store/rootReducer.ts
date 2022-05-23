import { combineReducers } from 'redux';

import { mainRootReducer } from './main/duck';

export const RootReducer = combineReducers({
  main: mainRootReducer,
});

export type AppStateType = ReturnType<typeof RootReducer>;
