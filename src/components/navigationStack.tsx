import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {HomeScreen} from '../screens/HomeScreen';
import {SettingsScreen} from '../screens/SettingsScreen';

import {DiagnosticScreen} from '../screens/DiagnosticScreen';
import {ContactsScreen} from '../screens/ContactsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button, Image, View} from 'react-native';
import {useThemeCustom} from '../utils/ThemeProvider';

const Stack = createStackNavigator<MainParamList>();

export type MainParamList = {
  Home: undefined;
  Diagnostic: undefined;
  Contacts: undefined;
  Settings: undefined;
};

export const NavigationStack = () => {
  const {colorsSchema} = useThemeCustom();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={({navigation}) => ({
            headerTitle: () => null,
            headerLeft: () => (
              <View style={{paddingLeft: 20, paddingTop: 20}}>
                <Image
                  style={{width: 64, height: 64}}
                  source={require('../assets/images/LogoMin.png')}
                />
              </View>
            ),
            headerRight: () => (
              <Ionicons
                name="ios-settings"
                size={25}
                color="black"
                style={{paddingRight: 20}}
                onPress={() => navigation.navigate('Settings')}
              />
            ),
            headerShadowVisible: false,
          })}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Diagnostic"
          options={({}) => ({
            headerStyle: {
              backgroundColor: colorsSchema.background,
            },
            headerTitle: () => null,
            headerLeft: () => null,
            headerStatusBarHeight: 0,
            headerShadowVisible: false,
          })}
          component={DiagnosticScreen}
        />
        <Stack.Screen
          name="Contacts"
          options={({navigation}) => ({
            headerTitle: () => null,
            headerStyle: {
              backgroundColor: colorsSchema.background,
            },
            headerLeft: () => (
              <Ionicons
                name="ios-arrow-back"
                size={25}
                color="black"
                onPress={() => navigation.goBack()}
              />
            ),
            headerStatusBarHeight: 0,
            headerShadowVisible: false,
          })}
          component={ContactsScreen}
        />
        <Stack.Screen
          name="Settings"
          options={({navigation}) => ({
            headerStyle: {
              backgroundColor: colorsSchema.background,
            },
            headerTitle: () => null,
            headerLeft: () => (
              <Ionicons
                name="ios-arrow-back"
                size={25}
                color="black"
                onPress={() => navigation.goBack()}
              />
            ),
            headerStatusBarHeight: 44,
            headerShadowVisible: false,
          })}
          component={SettingsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
