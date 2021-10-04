import 'react-native-gesture-handler';

import { AppRegistry } from 'react-native';
import App from './app/Entrypoint';
import { name as appName } from './app.json';
import { enableScreens } from 'react-native-screens';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
    webClientId: "212296929890-hajktb1i3jme0c4ank3lrjqmvlvbeiti.apps.googleusercontent.com",
});
enableScreens();

AppRegistry.registerComponent(appName, () => App);
