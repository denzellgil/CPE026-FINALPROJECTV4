import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Component from "./Component";
import NASALDISCHARGE1 from "./NASALDISCHARGE1";
import { Border, Color } from "../GlobalStyles";

const NASALDISCHARGE = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.nasalDischarge}>
      <Component
        onAkarIconsarrowRightPress={() => navigation.navigate("Symptoms")}
        onHomePagePress={() => navigation.navigate("Home")}
      />
      <View style={styles.nasalDischargeInner}>
        <LinearGradient
          style={styles.frameChild}
          locations={[0, 1]}
          colors={["#ccd4dd", "#3656f3"]}
        />
      </View>
      <NASALDISCHARGE1
        nASALDISCHARGEPosition="absolute"
        nASALDISCHARGEWidth="107.48%"
        nASALDISCHARGEHeight="92.87%"
        nASALDISCHARGETop="12.85%"
        nASALDISCHARGERight="-3.97%"
        nASALDISCHARGEBottom="-5.72%"
        nASALDISCHARGELeft="-3.5%"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_10xl,
    backgroundColor: "transparent",
    position: "absolute",
    width: "100%",
  },
  nasalDischargeInner: {
    height: "0.59%",
    width: "27.2%",
    top: "98.16%",
    right: "36.36%",
    bottom: "1.24%",
    left: "36.45%",
    position: "absolute",
  },
  nasalDischarge: {
    backgroundColor: Color.colorDarkslategray,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
  },
});

export default NASALDISCHARGE;
