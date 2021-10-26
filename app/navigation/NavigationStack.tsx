import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './NavigationService';
import { BaseParamsList } from './types';
import { Home, Splash } from '../screens';

const Stack = createStackNavigator<BaseParamsList>();

const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={'splash'}
        headerMode="none">
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
        <Stack.Screen
          name="home"
          component={Home}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
