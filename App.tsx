import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationStack} from './src/components/navigationStack';
import {ThemeProvider, useThemeCustom} from './src/utils/ThemeProvider';

export function App() {
  const {colorsSchema} = useThemeCustom();

  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <NavigationStack />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
