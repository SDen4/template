import { combineReducers } from 'redux';

import { mainRootReducer } from 'store/reducers/main';

export const rootReducer = combineReducers({
  main: mainRootReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;
