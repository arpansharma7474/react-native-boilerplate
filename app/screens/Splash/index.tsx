// Splash screen for adding additional delay to native splash screen which appears in
// the beginning of the app - also can be used to initialise notifications and other services
// to be initialised at app startup

import React, { useEffect } from 'react';
import { View } from 'react-native';
import splashScreen from 'react-native-splash-screen';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: "Login" }],
            })
            splashScreen.hide();
        }, 1000);
    }, []);

    // returns empty view so that the transition is smooth
    return <View />;
};

export default Splash;
