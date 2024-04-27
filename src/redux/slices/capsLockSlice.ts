import { createSlice } from '@reduxjs/toolkit';

interface CapsLockState {
  capsLockEnabled: boolean;
}

const initialState: CapsLockState = {
  capsLockEnabled: false,
};

const capsLockSlice = createSlice({
  name: 'capsLock',
  initialState,
  reducers: {
    toggleCapsLock(state) {
      state.capsLockEnabled = !state.capsLockEnabled;
    },
  },
});

export const { toggleCapsLock } = capsLockSlice.actions;
export const capsLockReducer = capsLockSlice.reducer;
