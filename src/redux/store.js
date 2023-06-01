import { configureStore } from '@reduxjs/toolkit';
import { Filter } from './Filter/FilterSlice';
import { ContactSlice } from './Contacts/ContactSlice';
import { AuthSlice } from './Auth/AuthSlice';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, AuthSlice.reducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    contacts: ContactSlice.reducer,
    filter: Filter.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
