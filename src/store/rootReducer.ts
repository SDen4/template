import { combineReducers } from 'redux';

import { mainRootReducer } from './reducers/main';

const RootReducer = combineReducers({
  main: mainRootReducer,
});

export default RootReducer;

export type AppStateType = ReturnType<typeof RootReducer>;
