/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { AdminSlice } from './Slice/AdminSlice';
import { UserSlice } from './Slice/UserSlice';
import { ArtistSlice } from './Slice/ArtistSlice';

const persistConfigUser = { key: 'fan', storage, version: 1 };
const persistConfigArtist = { key: 'artist', storage, version: 1 };
const persistConfigAdmin = { key: 'admin', storage, version: 1 };

const UserPersistReducer = persistReducer(persistConfigUser, UserSlice.reducer);
const ArtistPersistReducer = persistReducer(persistConfigArtist, ArtistSlice.reducer);
const AdminPersistReducer = persistReducer(persistConfigAdmin, AdminSlice.reducer);

export const store = configureStore({
  reducer: {
    user: UserPersistReducer,
    admin: AdminPersistReducer,
    artist: ArtistPersistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
