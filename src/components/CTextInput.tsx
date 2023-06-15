import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { DEFAULT_SHADOW } from '../assets/Utils';
import { COLORS_LIGHT } from '../assets/Colors';
import { Enumi18n } from '../i18n/Interfacei18n';
import { getText } from '../i18n/manageLocales';
import Fonts from '../assets/Fonts';
import FontSize from '../assets/FontSize';

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
      <Text style={styles.label}>{getText(Enumi18n.EN).login.labelInput}</Text>
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
          placeholder={getText(Enumi18n.EN).login.placeholder}
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
    fontSize: FontSize.eleven,
    marginBottom: 5,
  },
});

export default CTextInput;
