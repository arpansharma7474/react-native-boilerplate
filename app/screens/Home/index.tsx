import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import NavigationService from 'app/navigation/NavigationService';
import { useDispatch } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
const Home: React.FC = () => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(loginActions.logOut()),
      NavigationService.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Button icon="logout" mode="outlined" onPress={onLogout}>
        Logout
      </Button>
    </View>
  );
};

export default Home;
