import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import Routes from './routes/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#000" style="auto" />
      <Routes />
    </NavigationContainer>
  );
}
