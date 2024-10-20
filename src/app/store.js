import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import lanesReducer from '../features/lanes/lanesSlice';
import { postsApi } from '../features/posts/postsApiSlice';

const persistConfig = {
  key: 'lanes',
  storage,
};

const persistedReducer = persistReducer(persistConfig, lanesReducer);

export const store = configureStore({
  reducer: {
    lanes: persistedReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(postsApi.middleware),
});

export const persistor = persistStore(store);
