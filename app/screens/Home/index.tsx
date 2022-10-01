import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import counterSlice from '../../store/slices/counterSlice';
import { RootState } from '../../store';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const resultsPayload = useSelector((state: RootState) => state.results);

  console.log(resultsPayload, 'resultsPayload');

  return (
    <View style={styles.container}>
      <Text style={styles.login}>{JSON.stringify(resultsPayload)}</Text>
    </View>
  );
};

export default Home;
