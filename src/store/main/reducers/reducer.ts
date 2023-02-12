import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IInitialState {
  initData: string;
  rndData: number | null;
  loading: boolean;
}

const initialState = {
  initData: '',
  rndData: null,
  loading: false,
} as IInitialState;

const mainReducer = createSlice({
  name: 'MReducer',
  initialState,
  reducers: {
    initData(state, action: PayloadAction<string>) {
      return { ...state, initData: action.payload };
    },
    rndData(state, action: PayloadAction<number>) {
      return { ...state, rndData: action.payload };
    },
    loading(state, action: PayloadAction<boolean>) {
      return { ...state, loading: action.payload };
    },
    reset() {
      return initialState;
    },
  },
});

export const { initData, rndData, loading, reset } = mainReducer.actions;
export default mainReducer.reducer;
