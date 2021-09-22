import AsyncStorage from '@react-native-community/async-storage';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { loadingReducer } from './reducers/loadingReducer';
import { loginReducer } from './reducers/loginReducer';
import { themeReducer } from './reducers/themeReducer';

const persistConfig = {
  storage: AsyncStorage,
  key: 'persistedReducer',
  version: 1,
};

const rootReducer = combineReducers({
  persistedReducer: persistReducer(persistConfig, loginReducer),
  loginReducer: loginReducer,
  loadingReducer: loadingReducer,
  themeReducer: themeReducer
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

// type to be used in useSelector
export type RootState = ReturnType<typeof rootReducer>;
export default store
