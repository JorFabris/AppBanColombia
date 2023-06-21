import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
const DebitCard = require('../assets/images/debit-card.png');
const CreditCardGold = require('../assets/images/credit-card-gold.png');
const CreditCardBlack = require('../assets/images/credit-card-black.png');
import { Image, Dimensions } from 'react-native';
import { COLORS_LIGHT } from '../assets/Colors';
import { getText } from '../i18n/manageLocales';
import Fonts from '../assets/Fonts';
import FontSize from '../assets/FontSize';
import Constants from '../assets/Constants';
const screen = Dimensions.get('screen');
const Card = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.77}
      style={{
        backgroundColor: 'transparent',
        height: 190,
      }}>
      <Image
        source={DebitCard}
        resizeMode="contain"
        style={{
          position: 'absolute',
          height: 190,
          alignSelf: 'center',
          width: screen.width * 0.9,
        }}
      />
      <View
        style={{
          position: 'absolute',
          alignSelf: 'center',
          bottom: 0,
          width: screen.width * 0.88,
          height: 55,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          backgroundColor: COLORS_LIGHT.componentsColor,
        }}>
        <View
          style={{
            alignContent: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontFamily: Fonts.REGULAR,
              fontSize: FontSize.fontBigMin,
            }}>
            {getText(Constants.IDIOM).home.savingsAccount}
          </Text>
          <View>
            <Text
              style={{
                fontFamily: Fonts.BOLD,
                fontSize: FontSize.fontBigMedium2,
              }}>
              $ 125.564,40
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
