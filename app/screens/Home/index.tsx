import React from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import { AppDispatch, RootState } from '../../store';
import { fetchMovies } from 'app/store/slices/resultsSlice';

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const resultsPayload = useSelector((state: RootState) => state.results);

  React.useEffect(() => {
    dispatch(
      fetchMovies({
        query: 'Lord of',
        page: 1,
      }),
    );
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.login}>{JSON.stringify(resultsPayload)}</Text>
    </View>
  );
};

export default Home;
