import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Pressable,
  Modal,
} from "react-native";

import AppButton from "../components/button";
import SizedBox from "../components/sized-box";
import { MODAL_BACKGROUND, THEME_COLOR } from "../data/colors";
import { APP_LANGUAGE } from "../data/constants";
import { useLanguage } from "../translations/language-context";
import { getLanguage, saveLanguage } from "../translations/language-store";

export default function HomeScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { translate, toggleLanguage } = useLanguage();

  const closeChangeLanguage = () => {
    setIsModalVisible(false);
  };

  const changeLanguage = () => {
    setIsModalVisible(true);
  };

  async function selectLanguage(language: APP_LANGUAGE) {
    setIsModalVisible(false);
    try {
      const current = await getLanguage();
      if (current !== language) {
        await saveLanguage(language);
        toggleLanguage(language);
      }
    } catch (e) {
      console.warn(e);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label}>{translate("information")}</Text>
        <SizedBox height={16} />
        <Text style={styles.heading}>{translate("settings")}</Text>
        <SizedBox height={4} />
        <View style={styles.hairLine} />
        <SizedBox height={8} />
        <View style={styles.layoutChange}>
          <Text style={styles.label}>{translate("selected_language")}</Text>
          <View style={styles.button}>
            <AppButton
              title={translate("change_language")}
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
            <Text style={styles.heading}>{translate("change_language")}</Text>
            <SizedBox height={10} />
            <View style={styles.hairLine} />
            <SizedBox height={2} />
            <Pressable
              onPress={() => {
                selectLanguage(APP_LANGUAGE.ENGLISH);
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
                selectLanguage(APP_LANGUAGE.INDONESIAN);
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
