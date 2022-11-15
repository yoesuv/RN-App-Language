import { StyleSheet, SafeAreaView, View, Text } from "react-native";

export default function HomeScreen() {
    return <SafeAreaView style={styles.container}>
        <View>
            <Text>Home Screen</Text>
        </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})