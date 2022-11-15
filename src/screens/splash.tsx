import { StyleSheet, View, Text } from "react-native";
import { THEME_COLOR } from "../data/colors";

export default function SplashScreen() {
    return <View style={styles.container}>
        <Text style={styles.textSplash}>Welcome</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textSplash: {
      fontSize: 28,
      fontWeight: 'bold',
      color: THEME_COLOR
    }
  });