import React from 'react';
import { Platform, Text, TouchableOpacity, View } from 'react-native';
const DebitCard = require('../assets/images/debit-card.png');
const CreditCardGold = require('../assets/images/credit-card-gold.png');
const CreditCardBlack = require('../assets/images/credit-card-black.png');
import { Image, Dimensions } from 'react-native';
import { COLORS_LIGHT } from '../assets/Colors';
import { getText } from '../i18n/manageLocales';
import Fonts from '../assets/Fonts';
import FontSize from '../assets/FontSize';
import Constants from '../assets/Constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { DEFAULT_SHADOW, formatNumber } from '../assets/Utils';
const screen = Dimensions.get('screen');

interface IProps {
  typeCard: String;
  card: String;
  balance: number;
}

const Card = ({ typeCard, balance }: IProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.77}
      style={{
        backgroundColor: 'BLACK',
        height: 190,
        ...DEFAULT_SHADOW,
      }}>
      <Image
        source={
          typeCard === 'credit-gold'
            ? CreditCardGold
            : typeCard === 'debit'
            ? DebitCard
            : CreditCardBlack
        }
        resizeMode="contain"
        style={{
          position: 'absolute',
          height: 200,
          alignSelf: 'center',
          width: screen.width * 0.88,
        }}
      />
      <Text
        style={{
          position: 'absolute',
          marginLeft: -150,
          marginTop: 20,
          color: COLORS_LIGHT.textColor,
          fontFamily: Fonts.REGULAR,
        }}>
        {typeCard.split('-')[0] === 'credit'
          ? getText(Constants.IDIOM).home.credit
          : getText(Constants.IDIOM).home.debit}
      </Text>
      <View
        style={{
          position: 'absolute',
          alignSelf: 'center',
          justifyContent: 'center',
          bottom: -9,
          width:
            Platform.OS === 'ios' ? screen.width * 0.88 : screen.width * 0.88,
          height: 55,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          backgroundColor: COLORS_LIGHT.componentsColor,
          ...DEFAULT_SHADOW,
        }}>
        <View
          style={{
            alignItems: 'center',
            marginHorizontal: 10,
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontFamily: Fonts.MEDIUM,
              fontSize: FontSize.fontBigMedium,
              color: COLORS_LIGHT.textColor,
            }}>
            {getText(Constants.IDIOM).home.savingsAccount}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: Fonts.BOLD,
                fontSize: FontSize.fontBigMedium2,
                color: COLORS_LIGHT.textColor,
              }}>
              {formatNumber(balance)}
            </Text>
            <Icon
              name="chevron-forward"
              size={24}
              color={COLORS_LIGHT.textColor}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
