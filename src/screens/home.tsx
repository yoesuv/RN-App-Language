import React, { useState, useContext } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Pressable,
  Modal,
  DevSettings,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RNRestart from "react-native-restart";
import { LanguageContext } from "../translations/LanguageContext";

import AppButton from "../components/button";
import SizedBox from "../components/sized-box";
import { MODAL_BACKGROUND, THEME_COLOR } from "../data/colors";
import { i18n } from "../../src/translations/translations";
import { KEY_LANGUAGE } from "../data/constants";

export default function HomeScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const contextLanguage = useContext(LanguageContext);
  const { toggleLanguage } = contextLanguage;

  const closeChangeLanguage = () => {
    setIsModalVisible(false);
  };

  const changeLanguage = () => {
    setIsModalVisible(true);
  };

  async function selectLanguage(language: string) {
    setIsModalVisible(false);
    try {
      const current = await AsyncStorage.getItem(KEY_LANGUAGE);
      if (current !== language) {
        await AsyncStorage.setItem(KEY_LANGUAGE, language);
        toggleLanguage(language);
        if (__DEV__) {
          DevSettings.reload();
        } else {
          RNRestart.restart();
        }
      }
    } catch (e) {
      console.warn(e);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label}>{i18n.t("information")}</Text>
        <SizedBox height={16} />
        <Text style={styles.heading}>{i18n.t("settings")}</Text>
        <SizedBox height={4} />
        <View style={styles.hairLine} />
        <SizedBox height={8} />
        <View style={styles.layoutChange}>
          <Text style={styles.label}>{i18n.t("selected_language")}</Text>
          <View style={styles.button}>
            <AppButton
              title={i18n.t("change_language")}
              onPress={changeLanguage}
            />
          </View>
        </View>
      </View>

      <Modal
        visible={isModalVisible}
        onRequestClose={closeChangeLanguage}
        animationType="fade"
        transparent
      >
        <View style={styles.centerModal}>
          <View style={styles.containerModal}>
            <Text style={styles.heading}>{i18n.t("change_language")}</Text>
            <SizedBox height={10} />
            <View style={styles.hairLine} />
            <SizedBox height={2} />
            <Pressable
              onPress={() => {
                selectLanguage("en");
              }}
            >
              {({ pressed }) => (
                <Text
                  style={pressed ? styles.labelModalPressed : styles.labelModal}
                >
                  English
                </Text>
              )}
            </Pressable>
            <Pressable
              onPress={() => {
                selectLanguage("id");
              }}
            >
              {({ pressed }) => (
                <Text
                  style={pressed ? styles.labelModalPressed : styles.labelModal}
                >
                  Indonesia
                </Text>
              )}
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 16,
  },
  label: {
    fontSize: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  layoutChange: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  hairLine: {
    backgroundColor: "#E0E0E0",
    height: 1,
    alignSelf: "stretch",
  },
  button: {
    height: 50,
  },
  centerModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: MODAL_BACKGROUND,
  },
  containerModal: {
    width: 300,
    height: 160,
    backgroundColor: "white",
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
  },
});
