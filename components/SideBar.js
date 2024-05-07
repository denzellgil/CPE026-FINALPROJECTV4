import React, { memo } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const SideBar = memo(({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.sidebar, styles.sidebarLayout]}>
      <Pressable
        style={[styles.about, styles.faqPosition]}
        onPress={() => navigation.navigate("About")}
      >
        <Text style={styles.about1}>About</Text>
      </Pressable>
      <Pressable
        style={[styles.faq, styles.faqPosition]}
        onPress={() => navigation.navigate("FAQ")}
      >
        <Text style={styles.about1}>FAQ</Text>
      </Pressable>
      <Pressable
        style={[styles.viewProfile, styles.faqPosition]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles.about1}>View Profile</Text>
      </Pressable>
      <Pressable
        style={[styles.logout, styles.faqPosition]}
        onPress={() => navigation.navigate("Start")}
      >
        <Text style={styles.about1}>Logout</Text>
      </Pressable>
      <View style={styles.component6}>
        <View style={styles.component6Child} />
        <Image
          style={[styles.akarIconsarrowRight, styles.sidebarLayout]}
          contentFit="cover"
          source={require("../assets/akariconsarrowright1.png")}
        />
        <Text style={[styles.user, styles.userTypo]}>User</Text>
        <Text style={[styles.examplegmailcom, styles.userTypo]}>
          example@gmail.com
        </Text>
        <Image
          style={[styles.component6Item, styles.sidebarLayout]}
          contentFit="cover"
          source={require("../assets/group-18407.png")}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  sidebarLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  faqPosition: {
    left: 39,
    position: "absolute",
  },
  userTypo: {
    left: "8.18%",
    textAlign: "left",
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.typographyLevel,
    fontWeight: "500",
    lineHeight: 32,
    fontSize: FontSize.typographyLevel1_size,
    position: "absolute",
  },
  about1: {
    display: "flex",
    alignItems: "center",
    width: 257,
    height: 49,
    textAlign: "left",
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.typographyLevel,
    fontWeight: "500",
    lineHeight: 32,
    fontSize: FontSize.typographyLevel1_size,
  },
  about: {
    top: 384,
  },
  faq: {
    top: 335,
  },
  viewProfile: {
    top: 286,
  },
  logout: {
    top: 433,
  },
  component6Child: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    shadowColor: "rgba(5, 5, 5, 0.05)",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 60,
    elevation: 60,
    shadowOpacity: 1,
    backgroundColor: Color.colorGray_100,
    position: "absolute",
  },
  akarIconsarrowRight: {
    height: "27.81%",
    width: "7.73%",
    top: "59.13%",
    right: "85.02%",
    bottom: "13.06%",
    left: "7.24%",
    display: "none",
    position: "absolute",
  },
  user: {
    top: "70.19%",
  },
  examplegmailcom: {
    top: "82.26%",
  },
  component6Item: {
    height: "43.02%",
    width: "27.1%",
    top: "23.02%",
    right: "65.19%",
    bottom: "33.96%",
    left: "7.71%",
    position: "absolute",
  },
  component6: {
    top: 0,
    left: 0,
    width: 428,
    height: 265,
    position: "absolute",
  },
  sidebar: {
    backgroundColor: Color.colorDarkslategray,
    width: 312,
    height: 926,
  },
});

export default SideBar;
