import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './NavigationService';
import { BaseParamsList } from './types';
import { Home, Splash } from '../screens';

const Stack = createNativeStackNavigator<BaseParamsList>();

const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={'splash'}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="splash"
          component={Splash}
          options={{
            // When logging out, a pop animation feels intuitive
            // You can remove this if you want the default 'push' animation
            // animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
            animationTypeForReplace: 'push',
            // headerRight: () => <ThemeController />,
          }}
        />
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
