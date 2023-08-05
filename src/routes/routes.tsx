import React from 'react';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

import Auth from '../screens/Auth';
import Home from '../screens/Home';

export type RootStackParamList = {
  Auth: undefined;
  Home: undefined;
};

export interface PagePropsStack<T extends keyof RootStackParamList> {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function Routes() {
  return (
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Auth"
        component={Auth}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  );
}

export default Routes;
