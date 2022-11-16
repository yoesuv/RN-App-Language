import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, Pressable } from "react-native";
import Modal from "react-native-modal";

import AppButton from "../components/button";
import SizedBox from "../components/sized-box";
import { THEME_COLOR } from '../data/colors';
import { i18n } from '../../src/translations/translations';

export default function HomeScreen() {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const closeChangeLanguage = () => {
        setIsModalVisible(false)
    }

    const changeLanguage = () => {
        setIsModalVisible(true)
    }

    function selectLanguage(language: String) {
        console.log(`Home Screen # selected language ${language}`);
        setIsModalVisible(false)
    }

    return <SafeAreaView style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.label}>{i18n.t('information')}</Text>
            <SizedBox height={16} />
            <Text style={styles.heading}>{i18n.t('settings')}</Text>
            <SizedBox height={4} />
            <View style={styles.hairLine} />
            <SizedBox height={8} />
            <View style={styles.layoutChange}>
                <Text style={styles.label}>{i18n.t('selected_language')}</Text>
                <View style={styles.button}>
                    <AppButton title={i18n.t('change_language')} onPress={changeLanguage} />
                </View>
            </View>
        </View>

        <Modal
            isVisible={isModalVisible}
            animationIn='fadeIn'
            animationOut='fadeOut'
            useNativeDriver={true}
            onBackdropPress={closeChangeLanguage}
            onBackButtonPress={closeChangeLanguage}>
            <View style={styles.containerModal}>
                <Text style={styles.heading}>{i18n.t('change_language')}</Text>
                <SizedBox height={10} />
                <View style={styles.hairLine} />
                <SizedBox height={2} />
                <Pressable onPress={() => {
                    selectLanguage("en");
                }}>
                    {({ pressed }) => (
                        <Text style={pressed ? styles.labelModalPressed : styles.labelModal}>English</Text>
                    )}
                </Pressable>
                <Pressable onPress={() => {
                    selectLanguage("id");
                }}>
                    {({ pressed }) => (
                        <Text style={pressed ? styles.labelModalPressed : styles.labelModal}>Indonesia</Text>
                    )}
                </Pressable>
            </View>
        </Modal>

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
    },
    containerModal: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 24,
        borderRadius: 8,
    },
    labelModal: {
        fontSize: 16,
        paddingVertical: 8,
    },
    labelModalPressed: {
        fontSize: 16,
        paddingVertical: 8,
        color: THEME_COLOR,
    }
})