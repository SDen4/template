import { createAction } from '@reduxjs/toolkit';

const main = 'MAIN';

export const getInitDataSaga = createAction(`${main}/GET_INIT_DATA_SAGA`);
