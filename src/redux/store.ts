import { configureStore } from '@reduxjs/toolkit';
import { Platform } from 'react-native';
import slices from './slices';

const store = configureStore({
  reducer: slices,
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware({
      immutableCheck: { warnAfter: 128 },
      serializableCheck: false,
    });

    return middleware;
  },
  devTools: __DEV__,
});

export default store;
