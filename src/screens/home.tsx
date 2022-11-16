import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import AppButton from "../components/button";
import SizedBox from "../components/sized-box";

export default function HomeScreen() {
    return <SafeAreaView style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.label}>This App is available in english and indonesia language, change language settings below.</Text>
            <SizedBox height={16} />
            <Text style={styles.heading}>Settings</Text>
            <SizedBox height={4} />
            <View style={styles.hairLine} />
            <SizedBox height={8} />
            <View style={styles.layoutChange}>
                <Text style={styles.label}>English</Text>
                <View style={styles.button}>
                    <AppButton title={"Change Language"} onPress={() => {}} />
                </View>
            </View>
        </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 16,
    },
    label: {
        fontSize: 16,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    layoutChange: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
    },
    hairLine: {
        backgroundColor: '#E0E0E0',
        height: 1,
        alignSelf: 'stretch', 
    },
    button: {
        height: 45,
    }
})