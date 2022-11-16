import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, Pressable } from "react-native";
import Modal from "react-native-modal";
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize';

import AppButton from "../components/button";
import SizedBox from "../components/sized-box";
import { THEME_COLOR } from '../data/colors';

export default function HomeScreen() {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const changeLanguage = () => {
        setIsModalVisible(true)
    }

    const closeChangeLanguage = () => {
        setIsModalVisible(false)
    }

    return <SafeAreaView style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.label}>This app is available in english and indonesia language, change language settings below.</Text>
            <SizedBox height={16} />
            <Text style={styles.heading}>Settings</Text>
            <SizedBox height={4} />
            <View style={styles.hairLine} />
            <SizedBox height={8} />
            <View style={styles.layoutChange}>
                <Text style={styles.label}>English</Text>
                <View style={styles.button}>
                    <AppButton title={"Change Language"} onPress={changeLanguage} />
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
                <Text style={styles.heading}>Change Language</Text>
                <SizedBox height={10} />
                <View style={styles.hairLine} />
                <SizedBox height={2} />
                <Pressable onPress={closeChangeLanguage}>
                    {({ pressed }) => (
                        <Text style={pressed ? styles.labelModalPressed : styles.labelModal}>English</Text>
                    )}
                </Pressable>
                <Pressable onPress={closeChangeLanguage}>
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