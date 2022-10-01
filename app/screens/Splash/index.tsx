// Splash screen for adding additional delay to native splash screen which appears in
// the beginning of the app - also can be used to initialise notifications and other services
// to be initialised at app startup

import React, { useEffect } from 'react';
import { View } from 'react-native';
import splashScreen from 'react-native-splash-screen';
import { useNavigation } from '@react-navigation/native';
import { BaseParamsList } from '../../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Splash = () => {
  type NavigationType = NativeStackNavigationProp<BaseParamsList, 'splash'>;
  const navigation = useNavigation<NavigationType>();

  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'home' }],
      });
      splashScreen.hide();
    }, 1000);
  }, [navigation]);

  // returns empty view so that the transition is smooth
  return <View />;
};

export default Splash;
