import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './src/routes/StackNav';
import { StatusBar, StatusBarStyle } from 'react-native';
import { COLORS_LIGHT } from './src/assets/Colors';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={COLORS_LIGHT.screenColor}
        barStyle={COLORS_LIGHT.statusBar as StatusBarStyle}
      />
      <StackNav />
    </NavigationContainer>
  );
};

export default App;
