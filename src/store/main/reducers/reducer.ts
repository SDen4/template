import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  initData: string[];
  rndData: number | null;
}

const initialState = {
  initData: [],
  rndData: null,
} as IInitialState;

const mainReducer = createSlice({
  name: 'MReducer',
  initialState,
  reducers: {
    initData(state, action: PayloadAction<string[]>) {
      return { ...state, initData: action.payload };
    },
    rndData(state, action: PayloadAction<number>) {
      return { ...state, rndData: action.payload };
    },
    reset() {
      return initialState;
    },
  },
});

export const { initData, rndData, reset } = mainReducer.actions;
export default mainReducer.reducer;
