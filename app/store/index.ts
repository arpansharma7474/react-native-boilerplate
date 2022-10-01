import { combineReducers, configureStore } from '@reduxjs/toolkit';
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
import resultsSlice from './slices/resultsSlice';

// redux persist integration with toolkit https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage: AsyncStorage,
// };

const rootReducer = combineReducers({
  results: resultsSlice.reducer,
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
export type AppDispatch = typeof store.dispatch;
// type to be used in useSelector
export type RootState = ReturnType<typeof rootReducer>;
export default store;
