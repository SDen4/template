import { configureStore } from '@reduxjs/toolkit';

import { githubApi } from './github/githubApi';

import { rootReducer } from 'store/rootReducer';

export const store = configureStore({
  reducer: { main: rootReducer, [githubApi.reducerPath]: githubApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});
