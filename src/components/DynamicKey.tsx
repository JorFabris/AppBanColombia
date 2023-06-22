import React, { useEffect, useState } from 'react';
import { Animated, Text, TouchableOpacity } from 'react-native';
import { COLORS_LIGHT } from '../assets/Colors';
import { DEFAULT_SHADOW } from '../assets/Utils';
import Icon from 'react-native-vector-icons/Ionicons';
import Fonts from '../assets/Fonts';
import FontSize from '../assets/FontSize';
import { View } from 'react-native';
import { getText } from '../i18n/manageLocales';
import Constants from '../assets/Constants';

const DynamicKey = () => {
  const DURATION = 60000;
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const [code, setCode] = useState('');

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 128,
      duration: DURATION,
      useNativeDriver: false,
    }).start();
  }, [animation]);

  useEffect(() => {
    const digitos = [];
    const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < 6; i++) {
      const ind = Math.random() * 9;
      digitos.push(String(numArray[Number(ind.toFixed())]));
    }
    setCode(digitos.join(''));
  }, [animation]);

  useEffect(() => {
    setTimeout(() => {
      setAnimation(new Animated.Value(0));
    }, DURATION);
  }, [animation]);

  return (
    <TouchableOpacity
      style={{
        width: 128,
        height: 56,
        backgroundColor: COLORS_LIGHT.componentsColor,
        borderRadius: 5,
        ...DEFAULT_SHADOW,
      }}
      activeOpacity={0.88}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
        }}>
        <Icon name="lock-closed" size={25} color={COLORS_LIGHT.textColor} />
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text
            style={{
              fontFamily: Fonts.REGULAR,
              fontSize: FontSize.ten,
              color: COLORS_LIGHT.textColor,
            }}>
            {getText(Constants.IDIOM).login.dynamicKey}
          </Text>
          <Text
            style={{
              fontFamily: Fonts.BOLD,
              fontSize: FontSize.fontBigMedium,
              color: COLORS_LIGHT.textColor,
            }}>
            {code.slice(0, 3)} {code.slice(3, 6)}
          </Text>
        </View>
      </View>
      <Animated.View
        style={{
          width: animation,
          height: 3,
          marginTop: -3,
          backgroundColor: COLORS_LIGHT.purple,
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
        }}
      />
    </TouchableOpacity>
  );
};

export default DynamicKey;
