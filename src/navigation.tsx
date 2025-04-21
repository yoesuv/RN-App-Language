import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import React, { useEffect } from "react";

import { THEME_COLOR } from "./data/colors";
import HomeScreen from "./screens/home";
import { RootStackParamList } from "./screens/root-stack-params";
import SplashScreen from "./screens/splash";
import { i18n } from "./translations/translations";

const Stack = createNativeStackNavigator<RootStackParamList>();

const baseOptions: NativeStackNavigationOptions = {
  title: "RN Load More",
  headerStyle: {
    backgroundColor: THEME_COLOR,
  },
  headerTintColor: "white",
  headerTitleStyle: {
    fontWeight: "bold",
  },
  statusBarColor: THEME_COLOR,
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ ...baseOptions, title: i18n.t("app_name") }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const AppContainer = ({ currentLanguage }: { currentLanguage: string }) => {
  async function setupLanguage() {
    i18n.enableFallback = true;
    try {
      const current = currentLanguage;
      if (current !== null) {
        i18n.locale = current;
      } else {
        i18n.locale = "en";
      }
    } catch (e) {
      console.warn(e);
      i18n.locale = "en";
    }
  }

  useEffect(() => {
    setupLanguage();
  }, [currentLanguage]);

  return <AppNavigation />;
};

export default AppContainer;
