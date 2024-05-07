import * as React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Component from "./Component";
import Carousel1 from "./Carousel1";
import { Border, Color } from "../GlobalStyles";

const Symptoms = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.symptoms}>
      <Component
        onAkarIconsarrowRightPress={() => navigation.navigate("Home")}
        onHomePagePress={() => navigation.navigate("Home")}
      />
      <View style={styles.symptomsInner}>
        <LinearGradient
          style={styles.frameChild}
          locations={[0, 1]}
          colors={["#ccd4dd", "#3656f3"]}
        />
      </View>
      <Carousel1 />
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
  symptomsInner: {
    height: "0.59%",
    width: "27.2%",
    top: "98.16%",
    right: "36.36%",
    bottom: "1.24%",
    left: "36.45%",
    position: "absolute",
  },
  symptoms: {
    backgroundColor: Color.colorDarkslategray,
    flex: 1,
    height: 926,
    width: "100%",
  },
});

export default Symptoms;
