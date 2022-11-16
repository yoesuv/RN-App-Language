import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { THEME_COLOR } from './src/data/colors';
import HomeScreen from './src/screens/home';

import { RootStackParamList } from './src/screens/root-stack-params';
import SplashScreen from './src/screens/splash';
import { i18n } from './src/translations/translations';

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

  i18n.enableFallback = true;
  i18n.locale = "en";

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Splash' component={SplashScreen} options={{headerShown: false}} />
        <Stack.Screen name='Home' component={HomeScreen} options={{...baseOptions, title: i18n.t('app_name')}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
