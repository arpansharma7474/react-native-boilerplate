import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import persistSlice from './slices/persistSlice';

// redux persist integration with toolkit https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}
const persistedReducer = persistReducer(persistConfig, persistSlice.reducer)

const reducer = combineReducers({
  counter: counterSlice.reducer,
  persist: persistedReducer
})

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
// type to be used in useSelector
export type RootState = ReturnType<typeof reducer>;
export default store
