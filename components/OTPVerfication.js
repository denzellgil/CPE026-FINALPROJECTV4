import React, { memo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const OTPVerfication = memo(() => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.otpverfication}
      locations={[0, 1]}
      colors={["#20252d", "#015967"]}
    >
      <View style={styles.rectangleParent}>
        <LinearGradient
          style={styles.groupChild}
          locations={[0, 1]}
          colors={["#446063", "rgba(204, 212, 221, 0)"]}
        />
        <View style={styles.otpVerificationParent}>
          <Text style={[styles.otpVerification, styles.continueFlexBox]}>
            OTP Verification
          </Text>
          <Pressable
            style={styles.frameWrapper}
            onPress={() => navigation.navigate("Login")}
          >
            <View style={styles.frameChildPosition}>
              <View style={[styles.frameChild, styles.frameChildPosition]} />
            </View>
          </Pressable>
          <Text style={[styles.continue, styles.continueFlexBox]}>
            Continue
          </Text>
          <Text style={[styles.weHaveSent, styles.continueFlexBox]}>
            We have sent the verification code to your email address
          </Text>
          <View style={styles.rectangleGroup}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <View style={[styles.groupInner, styles.groupLayout]} />
            <View style={[styles.rectangleView, styles.groupLayout]} />
            <View style={[styles.groupChild1, styles.groupLayout]} />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
});

const styles = StyleSheet.create({
  continueFlexBox: {
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  frameChildPosition: {
    left: "0%",
    right: "0%",
    width: "100%",
    height: "100%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  groupLayout: {
    width: 75,
    borderWidth: 2,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_xl,
    height: 71,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_31xl,
    left: 0,
    top: 0,
    height: 354,
    width: 385,
    position: "absolute",
    backgroundColor: "transparent",
  },
  otpVerification: {
    height: "11.27%",
    width: "57.23%",
    left: "21.24%",
    fontSize: FontSize.specialTextBig_size,
    fontWeight: "700",
    fontFamily: FontFamily.rubikBold,
    color: Color.colorTextHeading,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    textAlign: "left",
    lineHeight: 30,
    display: "flex",
    top: "0%",
  },
  frameChild: {
    borderRadius: Border.br_14xl,
    backgroundColor: Color.colorBlack,
  },
  frameWrapper: {
    height: "21.79%",
    width: "95.79%",
    top: "78.21%",
    right: "2.23%",
    left: "1.98%",
    bottom: "0%",
    position: "absolute",
  },
  continue: {
    height: "11.47%",
    width: "27.12%",
    top: "83.33%",
    left: "36.44%",
    fontSize: FontSize.typographyLevel_size,
    fontWeight: "500",
    fontFamily: FontFamily.typographyLevel,
    color: Color.colorWhite1,
    textAlign: "left",
    lineHeight: 30,
    display: "flex",
  },
  weHaveSent: {
    height: "21.05%",
    width: "70.08%",
    top: "15.05%",
    left: "14.83%",
    fontSize: FontSize.typographyBody_size,
    letterSpacing: 0.3,
    lineHeight: 28,
    fontFamily: FontFamily.typographyLevel1,
    color: Color.colorGainsboro_100,
    textAlign: "center",
    justifyContent: "center",
  },
  groupItem: {
    left: 0,
  },
  groupInner: {
    left: 93,
  },
  rectangleView: {
    left: 186,
  },
  groupChild1: {
    left: 279,
  },
  rectangleGroup: {
    top: 127,
    width: 354,
    height: 71,
    left: 0,
    position: "absolute",
  },
  otpVerificationParent: {
    height: "83.73%",
    width: "91.95%",
    top: "11.86%",
    right: "4.68%",
    bottom: "4.41%",
    left: "3.38%",
    position: "absolute",
  },
  rectangleParent: {
    top: 286,
    left: 21,
    height: 354,
    width: 385,
    position: "absolute",
  },
  otpverfication: {
    width: 428,
    height: 926,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
});

export default OTPVerfication;
