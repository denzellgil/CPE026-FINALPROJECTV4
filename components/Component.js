import React, { memo } from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Component = memo(({ onAkarIconsarrowRightPress, onHomePagePress }) => {
  return (
    <View style={[styles.component4, styles.component4Position]}>
      <View style={[styles.component4Child, styles.iconLayout]} />
      <Pressable
        style={[styles.akarIconsarrowRight, styles.symptomsPosition]}
        onPress={onAkarIconsarrowRightPress}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/akariconsarrowright3.png")}
        />
      </Pressable>
      <Text style={[styles.symptoms, styles.symptomsPosition]}>Symptoms</Text>
      <Pressable style={styles.homePage} onPress={onHomePagePress}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/home-page.png")}
        />
      </Pressable>
    </View>
  );
});

const styles = StyleSheet.create({
  component4Position: {
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  symptomsPosition: {
    top: "59.13%",
    position: "absolute",
  },
  component4Child: {
    bottom: "0%",
    shadowColor: "rgba(5, 5, 5, 0.05)",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 60,
    elevation: 60,
    shadowOpacity: 1,
    backgroundColor: Color.colorGray_100,
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  icon: {
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  akarIconsarrowRight: {
    left: "7.24%",
    right: "85.02%",
    bottom: "13.04%",
    width: "7.73%",
    height: "27.84%",
  },
  symptoms: {
    height: "26.07%",
    width: "33.57%",
    left: "33.34%",
    fontSize: FontSize.specialTextBig_size,
    lineHeight: 30,
    fontWeight: "500",
    fontFamily: FontFamily.typographyLevel,
    color: Color.colorGainsboro_100,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  homePage: {
    left: "87.38%",
    top: "58.87%",
    right: "5.61%",
    bottom: "15.9%",
    width: "7.01%",
    height: "25.23%",
    position: "absolute",
  },
  component4: {
    height: "12.84%",
    bottom: "87.16%",
    width: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
  },
});

export default Component;
