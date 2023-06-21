import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Logo from '../../assets/images/logo.svg';
import { COLORS_LIGHT } from '../../assets/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { Enumi18n } from '../../i18n/Interfacei18n';
import { getText } from '../../i18n/manageLocales';
import Fonts from '../../assets/Fonts';
import FontSize from '../../assets/FontSize';
import RootStore from '../../RootStore';
import DynamicKey from '../../components/DynamicKey';
import Card from '../../components/Card';
import Constants from '../../assets/Constants';

const HomeScreen = () => {
  const dateGreeting = new Date();

  const greetings = (date: Date) => {
    const greeting = Number(
      date.toLocaleString().split(',')[1].split(' ')[1].split(':')[0],
    );
    return greeting > 12 ? 'afternoon' : greeting > 19 ? 'night' : 'morning';
  };

  return (
    <SafeAreaView>
      <View
        style={{
          height: 500,
          width: 500,
          position: 'absolute',
          alignSelf: 'center',
          marginTop: -200,
          backgroundColor: COLORS_LIGHT.whiteThree,
          borderRadius: 1000,
          zIndex: -1000,
        }}
      />
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          backgroundColor: COLORS_LIGHT.screenColor,
        }}>
        <View
          style={{
            flexDirection: 'row',
            padding: 26,
            flex: 1,
            backgroundColor: COLORS_LIGHT.whiteThree,
          }}>
          <Logo />
          <View style={{ flex: 1 }} />
          <TouchableOpacity style={{ marginHorizontal: 5 }}>
            <Icon name="notifications-outline" size={20} />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 5 }}>
            <Icon name="log-in-outline" size={20} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: COLORS_LIGHT.whiteThree,
            padding: 24,
          }}>
          <Text
            style={{
              color: COLORS_LIGHT.textColor,
              fontFamily: Fonts.REGULAR,

              fontSize: FontSize.fontBigMedium,
            }}>
            {getText(Constants.IDIOM).home.greetings[greetings(dateGreeting)]},
            {'\n'}
            {RootStore.user.name}!
          </Text>
          <View style={{ flex: 1 }} />
          <DynamicKey />
        </View>
        <View style={{}}>
          <Card />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
