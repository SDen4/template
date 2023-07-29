import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface IInitialState {
  rndData: number | null;
}

const initialState = {
  rndData: null,
} as IInitialState;

const mainReducer = createSlice({
  name: 'MReducer',
  initialState,
  reducers: {
    rndData(state, action: PayloadAction<number>) {
      return { ...state, rndData: action.payload };
    },
    reset() {
      return initialState;
    },
  },
});

export const { rndData, reset } = mainReducer.actions;
export default mainReducer.reducer;
