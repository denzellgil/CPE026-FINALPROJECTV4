import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const About = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.about}
      locations={[0, 1]}
      colors={["#02b1cd", "#06090b"]}
    >
      <View style={styles.component5}>
        <View style={[styles.component5Child, styles.iconLayout1]} />
        <Image
          style={[styles.akarIconsarrowRight, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/akariconsarrowright.png")}
        />
        <Text style={[styles.about1, styles.about1Typo]}>About</Text>
        <Pressable
          style={[styles.akarIconsarrowRight1, styles.akarPosition]}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/akariconsarrowright2.png")}
          />
        </Pressable>
      </View>
      <Text style={[styles.theApplicationIs, styles.about1Typo]}>
        The application is used to classify the disease of a poultry depending
        on its symptoms. The user can use the application to check what type of
        disease their poultry has based on the symptoms it is showing. It also
        has a description of the disease that their poultry might have and a
        link directed to a web page to learn more about the disease and what are
        the measures to take.
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  about1Typo: {
    textAlign: "left",
    fontSize: FontSize.specialTextBig_size,
    position: "absolute",
  },
  akarPosition: {
    left: "7.24%",
    right: "85.02%",
    width: "7.73%",
    position: "absolute",
  },
  component5Child: {
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
    height: "27.83%",
    top: "59.13%",
    bottom: "13.04%",
    display: "none",
    left: "7.24%",
    right: "85.02%",
    width: "7.73%",
    position: "absolute",
  },
  about1: {
    width: "18.22%",
    top: "60%",
    left: "40.89%",
    lineHeight: 30,
    fontWeight: "500",
    fontFamily: FontFamily.typographyLevel,
    color: Color.colorGainsboro_100,
    display: "flex",
    alignItems: "center",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  akarIconsarrowRight1: {
    top: "61.13%",
    bottom: "10.09%",
    height: "28.78%",
  },
  component5: {
    top: 0,
    left: 0,
    width: 428,
    height: 115,
    position: "absolute",
  },
  theApplicationIs: {
    top: 165,
    left: 32,
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhite1,
    width: 365,
    height: 480,
  },
  about: {
    flex: 1,
    height: 926,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
});

export default About;
