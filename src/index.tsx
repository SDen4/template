import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import { App } from 'view/App';

import { rootReducer } from 'store/rootReducer';
import { rootSaga } from 'store/rootSaga';

import './index.css';

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
  devTools: process.env.NODE_ENV !== 'production',
});

saga.run(rootSaga);

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
