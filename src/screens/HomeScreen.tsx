import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {MainParamList} from '../components/navigationStack';
import {StackNavigationProp} from '@react-navigation/stack';
import {useThemeCustom} from '../utils/ThemeProvider';
import {Heading1View} from '../components/typography/headings';
import {BodyView} from '../components/typography/bodyText';
import {ButtonSource} from '../components/buttons/buttonSource';

type DiagnosticViewProps = {
  navigation: StackNavigationProp<MainParamList, 'Diagnostic'>;
};

export const HomeScreen = ({navigation}: DiagnosticViewProps) => {
  const {colorsSchema} = useThemeCustom();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/bg.png')}
        resizeMode="cover"
        imageStyle={{start: 0, width: '100%', flex: 1}}>
        <Heading1View
          text={'Welcome'}
          color={colorsSchema.text}
          alignment="left"
        />
        <BodyView
          text="I am your guide, let me introduce you the LullaBedTM approach what is
        based on uniqueness of the lullaby effect, setting it apart from
        meditation or any other music guided relaxation program."
          color={colorsSchema.text}
          alignment="left"
        />

        <BodyView
          text="To fully individualize the LullaBedTM App, you need to get through six
        diagnostic steps, and we`ll immediately create your personal lullaby to
        give you back your balance."
          color={colorsSchema.text}
          alignment="left"
        />

        {/* <TouchableOpacity
        style={{...styles.buttons, backgroundColor: colorsSchema.secondary}}
        onPress={() => navigation.navigate('Diagnostic')}>
        <BodyView
          text="Let's start!"
          alignment="left"
          color={colorsSchema.text}
        />
      </TouchableOpacity> */}
        <ButtonSource
          label="Let's start"
          color={colorsSchema.primary}
          background={colorsSchema.secondary}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: 200,
    width: '100%',
    flex: 1,
    borderColor: 'red',
    borderWidth: 4,
  },
});
