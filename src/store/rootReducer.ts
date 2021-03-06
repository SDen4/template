import { combineReducers } from 'redux';

import { mainRootReducer } from './main/duck';

const RootReducer = combineReducers({
  main: mainRootReducer,
});

export default RootReducer;

export type AppStateType = ReturnType<typeof RootReducer>;
