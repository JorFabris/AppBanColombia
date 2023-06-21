import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../ui/login/LoginScreen';
import TabNav from './TabNav';

const StackNav = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="TabNav" component={TabNav} />
    </Stack.Navigator>
  );
};

export default StackNav;
