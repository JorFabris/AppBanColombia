import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { DEFAULT_SHADOW } from '../assets/Utils';
import { COLORS_LIGHT } from '../assets/Colors';
import { getText } from '../i18n/manageLocales';
import Fonts from '../assets/Fonts';
import FontSize from '../assets/FontSize';
import Constants from '../assets/Constants';

interface IProps {
  style?: ViewStyle;
  onChangeText: Function;
  hasText: boolean;
  icon: string;
}

const CTextInput = ({ style, onChangeText, icon }: IProps) => {
  return (
    <View
      style={{
        width: '100%',
        ...style,
      }}>
      <Text style={styles.label}>
        {getText(Constants.IDIOM).login.labelInput}
      </Text>
      <View style={styles.input}>
        {icon && (
          <Icon
            name={icon}
            size={24}
            color={COLORS_LIGHT.black_29}
            style={{ marginRight: 5 }}
          />
        )}
        <TextInput
          onChangeText={(text: string) => onChangeText(text)}
          placeholder={getText(Constants.IDIOM).login.placeholder}
          placeholderTextColor={COLORS_LIGHT.placeholderText}
          style={{ color: COLORS_LIGHT.textColor }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    ...DEFAULT_SHADOW,
    width: '100%',
    backgroundColor: COLORS_LIGHT.componentsColor,
    height: 56,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
  },
  label: {
    fontFamily: Fonts.MEDIUM,
    color: COLORS_LIGHT.textColor,
    fontSize: FontSize.eleven,
    marginBottom: 5,
  },
});

export default CTextInput;
