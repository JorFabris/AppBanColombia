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
import { getText } from '../../i18n/manageLocales';
import Fonts from '../../assets/Fonts';
import FontSize from '../../assets/FontSize';
import RootStore from '../../RootStore';
import DynamicKey from '../../components/DynamicKey';
import Card from '../../components/Card';
import Constants from '../../assets/Constants';
import Item from './components/Item';
import Services from './components/Services';

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
            <Icon
              name="notifications-outline"
              color={COLORS_LIGHT.textColor}
              size={20}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 5 }}>
            <Icon
              name="log-in-outline"
              size={20}
              color={COLORS_LIGHT.textColor}
            />
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
          <Card
            card={RootStore.card.number}
            typeCard={RootStore.card.type}
            balance={RootStore.account.balance}
          />
        </View>
        <Item
          style={{ marginTop: 20 }}
          label={getText(Constants.IDIOM).home.cards}
          icon={
            <Icon
              name="card-outline"
              color={COLORS_LIGHT.textColor}
              size={22}
              style={{ marginRight: 5 }}
            />
          }
        />
        <Item
          style={{ marginVertical: 10 }}
          label={getText(Constants.IDIOM).home.pocket}
          icon={
            <Icon
              name="wallet-outline"
              size={22}
              style={{ marginRight: 5 }}
              color={COLORS_LIGHT.textColor}
            />
          }
        />
        <Services />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
