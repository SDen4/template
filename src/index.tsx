import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import RootSaga from './store/rootSaga';
import RootReducer from './store/rootReducer';

import App from './view/App';

import './index.css';

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
  devTools: process.env.NODE_ENV !== 'production',
});

saga.run(RootSaga);

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
