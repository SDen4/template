import { combineReducers } from 'redux';

import mainReducer from 'store/main/reducers/reducer';

export const rootReducer = combineReducers({
  main: mainReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;
