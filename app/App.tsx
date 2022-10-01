import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import Navigator from 'app/navigation';
import store, { persistor } from 'app/store';
import { PersistGate } from 'redux-persist/integration/react';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
