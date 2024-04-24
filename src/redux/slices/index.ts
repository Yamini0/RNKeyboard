import { Action, combineReducers } from '@reduxjs/toolkit';
import store from '@redux/store';

import { keyBoardModeReducer } from './keyboardMode';
import { capsLockReducer } from './capsLockSlice';
import { displayAreaReducer } from './displayAreaSlice';

const r = {
  keyBoardMode: keyBoardModeReducer,
  capsLock: capsLockReducer,
  displayArea: displayAreaReducer,
};

const cmdR = combineReducers(r);

const rootReducer = (state: {} | Partial<{}> | undefined, action: Action) => {
  if (action.type === 'LOG_OUT') {
    // check for action type
    state = undefined;
  }
  return cmdR(state, action);
};

export default rootReducer;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
