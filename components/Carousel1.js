import React, { memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ActiveNo from "./ActiveNo";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Carousel1 = memo(() => {
  const navigation = useNavigation();

  return (
    <View style={styles.carousel}>
      <View style={[styles.symptomsParent, styles.pageIndicatorFlexBox]}>
        <Pressable
          style={styles.symptoms}
          onPress={() => navigation.navigate("NASALDISCHARGE")}
        >
          <Image
            style={styles.symptomsChild}
            contentFit="cover"
            source={require("../assets/rectangle-1010.png")}
          />
          <Text style={styles.nasalDischarge}>NASAL DISCHARGE</Text>
        </Pressable>
        <ActiveNo
          rectangle1010={require("../assets/rectangle-10101.png")}
          activeNoMarginLeft={22}
          onSymptomsPress={() => navigation.navigate("SWOLLENCOMB")}
        />
        <ActiveNo
          rectangle1010={require("../assets/rectangle-10102.png")}
          activeNoMarginLeft={22}
          onSymptomsPress={() => navigation.navigate("SWOLLENFEET")}
        />
        <ActiveNo
          rectangle1010={require("../assets/rectangle-10103.png")}
          activeNoMarginLeft={22}
          onSymptomsPress={() => navigation.navigate("SWOLLENEYES")}
        />
        <ActiveNo
          rectangle1010={require("../assets/rectangle-10104.png")}
          activeNoMarginLeft={22}
          onSymptomsPress={() => navigation.navigate("SNEEZING")}
        />
        <ActiveNo
          rectangle1010={require("../assets/rectangle-10105.png")}
          activeNoMarginLeft={22}
          onSymptomsPress={() => navigation.navigate("DIARRHEA")}
        />
        <ActiveNo
          rectangle1010={require("../assets/rectangle-10106.png")}
          activeNoMarginLeft={22}
          onSymptomsPress={() => navigation.navigate("ATAXIA")}
        />
      </View>
      <View style={[styles.pageIndicator, styles.pageIndicatorFlexBox]}>
        <View style={[styles.dot, styles.dotLayout]} />
        <View style={[styles.dot1, styles.dotLayout]} />
        <View style={[styles.dot1, styles.dotLayout]} />
        <View style={[styles.dot1, styles.dotLayout]} />
        <View style={[styles.dot1, styles.dotLayout]} />
        <View style={[styles.dot1, styles.dotLayout]} />
        <View style={[styles.dot1, styles.dotLayout]} />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  pageIndicatorFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  dotLayout: {
    height: 10,
    overflow: "hidden",
    borderRadius: Border.br_31xl,
  },
  symptomsChild: {
    height: "75%",
    width: "89.29%",
    top: "12.5%",
    right: "5.24%",
    bottom: "12.5%",
    left: "5.48%",
    borderRadius: Border.br_xl,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  nasalDischarge: {
    top: "90.25%",
    left: "23.57%",
    fontSize: FontSize.specialTextBig_size,
    lineHeight: 30,
    fontWeight: "500",
    fontFamily: FontFamily.typographyLevel,
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  symptoms: {
    backgroundColor: Color.colorGray_300,
    height: 400,
    overflow: "hidden",
    width: 420,
    borderRadius: Border.br_31xl,
  },
  symptomsParent: {
    top: 0,
    left: -173,
    width: 2682,
  },
  dot: {
    backgroundColor: Color.colorCadetblue,
    width: 18,
  },
  dot1: {
    backgroundColor: Color.colorGainsboro_100,
    width: 10,
    marginLeft: 4,
  },
  pageIndicator: {
    top: 437,
    left: 0,
    backgroundColor: Color.colorGray_400,
    height: 40,
    paddingHorizontal: Padding.p_23xl,
    paddingVertical: Padding.p_11xl,
    width: 420,
  },
  carousel: {
    height: "51.51%",
    width: "98.13%",
    top: "24.19%",
    right: "3.5%",
    bottom: "24.3%",
    left: "-1.64%",
    position: "absolute",
  },
});

export default Carousel1;
