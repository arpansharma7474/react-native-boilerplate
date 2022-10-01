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
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistSlice from './slices/persistSlice';

// redux persist integration with toolkit https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, persistSlice.reducer);

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  persist: persistedReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
// type to be used in useSelector
export type RootState = ReturnType<typeof rootReducer>;
export default store;
