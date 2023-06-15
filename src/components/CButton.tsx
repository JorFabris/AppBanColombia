import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { COLORS_LIGHT } from '../assets/Colors';
import { DEFAULT_SHADOW } from '../assets/Utils';
import FontSize from '../assets/FontSize';
import Fonts from '../assets/Fonts';

interface IProps {
  style?: ViewStyle;
  onPressButton: Function;
  label: string;
  disabled: boolean;
}

const CButton = ({ label, onPressButton, disabled }: IProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.btn,
        {
          backgroundColor: disabled
            ? COLORS_LIGHT.disabled
            : COLORS_LIGHT.mainColor,
        },
      ]}
      onPress={() => onPressButton()}>
      <Text
        style={{
          fontSize: FontSize.fontBigMedium,
          fontFamily: Fonts.MEDIUM,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    height: 56,
    ...DEFAULT_SHADOW,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CButton;
