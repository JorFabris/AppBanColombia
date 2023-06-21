/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../ui/home/HomeScreen';
import TransfersScreen from '../ui/transfers/TransfersScreen';
import PaymentsScreen from '../ui/payments/PaymentsScreen';
import SecurityScreen from '../ui/security/SecurityScreen';
import { COLORS_LIGHT } from '../assets/Colors';
import { getText } from '../i18n/manageLocales';
import Fonts from '../assets/Fonts';
import FontSize from '../assets/FontSize';
import Constants from '../assets/Constants';

const TabNav = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        options={{
          tabBarActiveTintColor: COLORS_LIGHT.blackThree,
          tabBarLabel: ({ color, focused }) => (
            <Text
              style={{
                color: color,
                fontFamily: focused ? Fonts.MEDIUM : Fonts.REGULAR,
                fontSize: FontSize.ten,
              }}>
              {getText(Constants.IDIOM).tabbar.home.title}
            </Text>
          ),
          tabBarIcon: ({ color, focused }) => (
            <>
              {focused && <View style={styles.indicator} />}
              <Icon
                size={25}
                name={focused ? 'home' : 'home-outline'}
                color={color}
              />
            </>
          ),
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarActiveTintColor: COLORS_LIGHT.blackThree,
          tabBarLabel: ({ color, focused }) => (
            <Text
              style={{
                color: color,
                fontFamily: focused ? Fonts.MEDIUM : Fonts.REGULAR,
                fontSize: FontSize.ten,
              }}>
              {getText(Constants.IDIOM).tabbar.transfers.title}
            </Text>
          ),
          tabBarIcon: ({ color, focused }) => (
            <>
              {focused && <View style={styles.indicator} />}
              <Icon
                size={25}
                name={focused ? 'swap-horizontal' : 'swap-horizontal-outline'}
                color={color}
              />
            </>
          ),
        }}
        name="TransfersScreen"
        component={TransfersScreen}
      />
      <Tab.Screen
        options={{
          tabBarActiveTintColor: COLORS_LIGHT.blackThree,
          tabBarLabel: ({ color, focused }) => (
            <Text
              style={{
                color: color,
                fontFamily: focused ? Fonts.MEDIUM : Fonts.REGULAR,
                fontSize: FontSize.ten,
              }}>
              {getText(Constants.IDIOM).tabbar.payments.title}
            </Text>
          ),
          tabBarIcon: ({ color, focused }) => (
            <>
              {focused && <View style={styles.indicator} />}
              <Icon
                size={25}
                name={focused ? 'cash' : 'cash-outline'}
                color={color}
              />
            </>
          ),
        }}
        name="PaymentsScreen"
        component={PaymentsScreen}
      />
      <Tab.Screen
        options={{
          tabBarActiveTintColor: COLORS_LIGHT.blackThree,
          tabBarLabel: ({ color, focused }) => (
            <Text
              style={{
                color: color,
                fontFamily: focused ? Fonts.MEDIUM : Fonts.REGULAR,
                fontSize: FontSize.ten,
              }}>
              {getText(Constants.IDIOM).tabbar.payments.title}
            </Text>
          ),
          tabBarIcon: ({ color, focused }) => (
            <>
              {focused && <View style={styles.indicator} />}
              <Icon
                size={25}
                name={focused ? 'lock-closed' : 'lock-closed-outline'}
                color={color}
              />
            </>
          ),
        }}
        name="SecurityScreen"
        component={SecurityScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  indicator: {
    position: 'absolute',
    top: 0,
    height: 2,
    width: '100%',
    backgroundColor: COLORS_LIGHT.mainColor,
  },
});

export default TabNav;
