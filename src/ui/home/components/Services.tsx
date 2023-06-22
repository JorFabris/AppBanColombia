import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { getText } from '../../../i18n/manageLocales';
import Constants from '../../../assets/Constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS_LIGHT } from '../../../assets/Colors';
import Fonts from '../../../assets/Fonts';
import FontSize from '../../../assets/FontSize';

const Services = () => {
  const SERVICES = [
    {
      label: getText(Constants.IDIOM).home.services.items.QR.label,
      backgroundColor: COLORS_LIGHT.orange30,
      color: COLORS_LIGHT.orange,
      icon: 'qr-code-outline',
    },
    {
      label: getText(Constants.IDIOM).home.services.items.requets.label,
      backgroundColor: COLORS_LIGHT.green30,
      color: COLORS_LIGHT.greenService,
      icon: 'hand-right-outline',
    },
    {
      label: getText(Constants.IDIOM).home.services.items.explore.label,
      backgroundColor: COLORS_LIGHT.purple50,
      color: COLORS_LIGHT.purpleService,
      icon: 'flashlight-outline',
    },
  ];
  return (
    <View style={{ width: '89%' }}>
      <Text
        style={{
          fontFamily: Fonts.REGULAR,
          color: COLORS_LIGHT.textColor,
          fontSize: FontSize.fontTwentyTwo,
          marginHorizontal: 10,
          marginTop: 20,
        }}>
        {getText(Constants.IDIOM).home.services.title}
      </Text>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        {SERVICES.map((service, i) => {
          return (
            <TouchableOpacity
              key={`service-${i}`}
              activeOpacity={0.6}
              style={{
                height: 100,
                margin: 10,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                flex: 1,
                maxWidth: 100,
                borderRadius: 8,
                backgroundColor: service.backgroundColor,
              }}>
              <Icon name={service.icon} color={service.color} size={34} />
              <Text
                style={{
                  color: service.color,
                  fontFamily: Fonts.MEDIUM,
                  fontSize: FontSize.fontSubTitle,
                }}>
                {service.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Services;
