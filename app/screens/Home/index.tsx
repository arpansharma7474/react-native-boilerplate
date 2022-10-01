import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import counterSlice from '../../store/slices/counterSlice';
import { RootState } from '../../store';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.count);

  const onLogout = () => {
    dispatch(counterSlice.actions.incremented());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.login}>count:{count}</Text>
      <Button mode="outlined" onPress={onLogout}>
        Logout
      </Button>
    </View>
  );
};

export default Home;
