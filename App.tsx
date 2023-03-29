import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme';

import { Dashboard } from './src/screens/Dashboard';
import { Register } from './src/screens/Register';
import { CategorySelect } from './src/screens/CategorySelect';
import { Text, View } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })
  
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  if (!fontsLoaded) {
    return ( 
      <View>
        <Text>Carregando fontes...</Text>
      </View>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      {/* <Dashboard /> */}
      <Register />
      {/* <CategorySelect /> */}
    </ThemeProvider>
  )
}

