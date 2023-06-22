import React from 'react';
import { Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { DEFAULT_SHADOW } from '../../../assets/Utils';
import { COLORS_LIGHT } from '../../../assets/Colors';
import Fonts from '../../../assets/Fonts';
import FontSize from '../../../assets/FontSize';

interface IProp {
  label: String;
  icon: any;
  style?: ViewStyle;
}

const Item = ({ label, icon, style }: IProp) => {
  return (
    <TouchableOpacity
      activeOpacity={0.89}
      style={{
        ...style,
        height: 60,
        width: '88%',
        backgroundColor: COLORS_LIGHT.componentsColor,
        borderRadius: 8,
        alignItems: 'center',
        ...DEFAULT_SHADOW,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 10,
        }}>
        {icon}
        <Text
          style={{
            fontFamily: Fonts.MEDIUM,
            color: COLORS_LIGHT.textColor,
            fontSize: FontSize.fontBigMedium,
          }}>
          {label}
        </Text>
      </View>
      <Icon
        name="chevron-forward"
        size={24}
        style={{ marginRight: 10 }}
        color={COLORS_LIGHT.textColor}
      />
    </TouchableOpacity>
  );
};

export default Item;
