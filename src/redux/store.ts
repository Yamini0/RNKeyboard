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
    // Add custom middleware or modify existing middleware here if needed.
    // middleware.push(customMiddleware);

    return middleware;
  },
  //   enhancers: [window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose],
  devTools: __DEV__,
});

export default store;
