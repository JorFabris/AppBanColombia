import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS_LIGHT } from '../assets/Colors';
import { View, Text, TouchableOpacity } from 'react-native';
import { getText } from '../i18n/manageLocales';
import Fonts from '../assets/Fonts';
import FontSize from '../assets/FontSize';
import Constants from '../assets/Constants';

const BiometriLogin = () => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        style={{
          height: 70,
          width: 70,
          borderRadius: 100,
          marginTop: 50,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: COLORS_LIGHT.componentsColor,
        }}>
        <Icon
          name="finger-print-outline"
          color={COLORS_LIGHT.textColor}
          size={35}
        />
      </TouchableOpacity>
      <Text
        style={{
          marginTop: 10,
          fontFamily: Fonts.REGULAR,
          fontSize: FontSize.fontBigMin,
        }}>
        {getText(Constants.IDIOM).login.biometrics.fingerprint}
      </Text>
    </View>
  );
};

export default BiometriLogin;
