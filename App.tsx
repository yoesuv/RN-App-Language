import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { THEME_COLOR } from './src/data/colors';
import HomeScreen from './src/screens/home';
import { RootStackParamList } from './src/screens/root-stack-params';
import SplashScreen from './src/screens/splash';
import { i18n } from './src/translations/translations';
import { KEY_LANGUAGE } from './src/data/constants';

const Stack = createNativeStackNavigator<RootStackParamList>();

const baseOptions: NativeStackNavigationOptions = {
  title: "RN Load More",
  headerStyle: {
    backgroundColor: THEME_COLOR
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  statusBarColor: THEME_COLOR,
};

export default function App() {

  useEffect(() => {
    setupLanguage();
  }, []);

  async function setupLanguage() {
    try {
      const current = await AsyncStorage.getItem(KEY_LANGUAGE);
      i18n.enableFallback = true;
      if (current !== null) {
        i18n.locale = current;
      } else {
        i18n.locale = "en";
      }
    } catch (e) {
      i18n.enableFallback = true;
      i18n.locale = "en";
    }
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Splash' component={SplashScreen} options={{headerShown: false}} />
        <Stack.Screen name='Home' component={HomeScreen} options={{...baseOptions, title: i18n.t('app_name')}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
