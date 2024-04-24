import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { KeyBoardType } from './contants';

type KeyBoardModeType = 'alphabetical' | 'numerical';

interface KeyBoardModeState {
  keyBoardMode: KeyBoardModeType;
}

const initialState: KeyBoardModeState = {
  keyBoardMode: KeyBoardType.alphabetical,
};

const keyBoardModeSlice = createSlice({
  name: 'keyBoardMode',
  initialState,
  reducers: {
    toggleKeyBoardMode(state) {
      state.keyBoardMode =
        state.keyBoardMode === KeyBoardType.alphabetical ? KeyBoardType.numerical : KeyBoardType.alphabetical;
    },
  },
});

export const { toggleKeyBoardMode } = keyBoardModeSlice.actions;
export const keyBoardModeReducer = keyBoardModeSlice.reducer;
