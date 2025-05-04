import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import React from "react";

import { THEME_COLOR } from "./data/colors";
import HomeScreen from "./screens/home";
import { RootStackParamList } from "./screens/root-stack-params";
import SplashScreen from "./screens/splash";
import { useLanguage } from "./translations/language-context";

const Stack = createNativeStackNavigator<RootStackParamList>();

const baseOptions: NativeStackNavigationOptions = {
  title: "RN App Language",
  headerStyle: {
    backgroundColor: THEME_COLOR,
  },
  headerTintColor: "white",
  headerTitleStyle: {
    fontWeight: "bold",
  },
  statusBarColor: THEME_COLOR,
};

export const AppNavigation = () => {
  const { translate } = useLanguage();
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
          options={{ ...baseOptions, title: translate("app_name") }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
