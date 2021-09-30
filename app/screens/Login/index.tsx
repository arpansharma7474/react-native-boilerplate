import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import { executePostRequest } from '../../lib/fetchUtils';
import { Log } from '../../lib/logger';
import ApiConfig from '../../config/api-config';
import { facebookLogin } from '../../store/actions/SocialLoginActions';

interface IState {
  loginReducer: ILoginState;
}

const Login: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  const dispatch = useDispatch();

  const onLogin = async () => {
    // dispatch(loginActions.requestLogin('test', '1234'))
    // NavigationService.navigate('Home')
    try {
      const res = await executePostRequest(ApiConfig.POST_POSTS)
      Log(res, "post res")
    } catch (err) {
      Log(err, "post error")
    }
  }

  const onForgot = () => NavigationService.navigate('ForgotPassword');

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.login}>Login Status : {id}</Text>
        <Button mode="outlined" onPress={onLogin}>
          Login
        </Button>
        <TouchableOpacity
          onPress={() => facebookLogin()}
          style={styles.fbButton}>
          <Text style={styles.fbText}>
            Log in with facebook
          </Text>

        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
