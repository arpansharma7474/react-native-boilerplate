import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import NavigationService from 'app/navigation/NavigationService';
import { useDispatch, useSelector } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';
import { ILoginState } from 'app/models/reducers/login';


interface IState {
  loginReducer: ILoginState;
}
import styles from './styles';
const Home: React.FC = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state: IState) => state.loginReducer.username);

  const onLogout = () => {
    dispatch(loginActions.logOut()),
      NavigationService.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.login}>userName:{userName}</Text>
      <Button icon="logout" mode="outlined" onPress={onLogout}>
        Logout
      </Button>
    </View>
  );
};

export default Home;
