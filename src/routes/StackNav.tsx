import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../ui/login/LoginScreen';

const StackNav = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default StackNav;
