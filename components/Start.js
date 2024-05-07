import React, { memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Start = memo(() => {
  return (
    <LinearGradient
      style={styles.start}
      locations={[0, 1]}
      colors={["#20252d", "#015967"]}
    >
      <Image
        style={[styles.frameIcon, styles.framePosition]}
        contentFit="cover"
        source={require("../assets/frame.png")}
      />
      <View style={[styles.frame, styles.frameFlexBox]}>
        <View style={[styles.frame1, styles.frameFlexBox]}>
          <Image
            style={[styles.frameIcon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/frame1.png")}
          />
          <View style={[styles.frame2, styles.frameFlexBox]}>
            <Text style={styles.featherlyCare}>FEATHERLY CARE</Text>
          </View>
        </View>
        <Image
          style={[styles.logo1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/logo-1.png")}
        />
      </View>
    </LinearGradient>
  );
});

const styles = StyleSheet.create({
  framePosition: {
    top: -18,
    position: "absolute",
  },
  frameFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  iconLayout: {
    width: "100%",
    maxWidth: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  frameIcon: {
    left: -227,
    width: 808,
    height: 887,
    overflow: "hidden",
  },
  frameIcon1: {
    height: 573,
  },
  featherlyCare: {
    fontSize: FontSize.typographyLevel_size,
    lineHeight: 25,
    fontFamily: FontFamily.knewaveRegular,
    color: Color.colorBlack,
    textAlign: "center",
    transform: [
      {
        rotate: "-0.9deg",
      },
    ],
    alignSelf: "stretch",
  },
  frame2: {
    width: 146,
    justifyContent: "flex-end",
    marginTop: 40,
  },
  frame1: {
    alignSelf: "stretch",
  },
  logo1Icon: {
    height: 535,
    marginTop: -425,
  },
  frame: {
    left: -54,
    width: 536,
    top: -18,
    position: "absolute",
  },
  start: {
    width: 428,
    height: 926,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default Start;
