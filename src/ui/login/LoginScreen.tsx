import React, { useState } from 'react';
import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import FullLogo from '../../assets/images/full-logo.svg';
import Frame from '../../assets/images/Frame.svg';
import { getText } from '../../i18n/manageLocales';
import { Enumi18n } from '../../i18n/Interfacei18n';
import Fonts from '../../assets/Fonts';
import { COLORS_LIGHT } from '../../assets/Colors';
import FontSize from '../../assets/FontSize';
import CTextInput from '../../components/CTextInput';
import CButton from '../../components/CButton';
import BiometriLogin from '../../components/BiometricLogin';
import DynamicKey from '../../components/DynamicKey';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.screen}>
          <FullLogo />
          <Text style={styles.title}>{getText(Enumi18n.EN).login.title}</Text>
          <Text style={styles.subtitle}>
            {getText(Enumi18n.EN).login.subtitle}
          </Text>
          <CTextInput
            icon={'person-outline'}
            hasText={username.length > 0 ? true : false}
            onChangeText={setUsername}
            style={{ marginTop: 36, marginBottom: 12 }}
          />
          <CButton
            disabled={username.length > 0 ? false : true}
            onPressButton={() => {}}
            label={getText(Enumi18n.EN).login.btn}
          />
          <BiometriLogin />
          <View style={{ height: 150, marginTop: -100 }}>
            <Frame />
          </View>
          <View style={{ flex: 1 }} />
          <DynamicKey />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 25,
    backgroundColor: COLORS_LIGHT.screenColor,
  },
  title: {
    fontFamily: Fonts.BOLD,
    marginTop: 58,
    textAlign: 'justify',
    fontSize: FontSize.fontTitle,
    color: COLORS_LIGHT.textColor,
  },
  subtitle: {
    fontFamily: Fonts.REGULAR,
    marginTop: 11,
    fontSize: FontSize.fontSubTitle,
    color: COLORS_LIGHT.textColor,
  },
});

export default LoginScreen;
