import React, { memo } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const ForgotPassword = memo(() => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.forgotpassword}
      locations={[0, 1]}
      colors={["#20252d", "#015967"]}
    >
      <Pressable style={[styles.rectangleParent, styles.groupChildLayout]}>
        <LinearGradient
          style={[styles.groupChild, styles.groupChildLayout]}
          locations={[0, 1]}
          colors={["#446063", "rgba(204, 212, 221, 0)"]}
        />
        <View style={styles.forgotPasswordParent}>
          <Text style={[styles.forgotPassword, styles.emailFlexBox]}>
            Forgot Password
          </Text>
          <Pressable
            style={[styles.frameWrapper, styles.groupItemPosition]}
            onPress={() => navigation.navigate("OTPVerfication")}
          >
            <View style={styles.frameChildPosition}>
              <View style={[styles.frameChild, styles.frameChildPosition]} />
            </View>
          </Pressable>
          <Text style={[styles.continue, styles.emailFlexBox]}>Continue</Text>
          <View style={[styles.groupItem, styles.groupItemPosition]} />
          <Text style={[styles.email, styles.emailFlexBox]}>Email</Text>
          <Image
            style={[styles.clarityemailLineIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/clarityemailline1.png")}
          />
          <Image
            style={[styles.antDesigneyeInvisibleOutliIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/antdesigneyeinvisibleoutlined1.png")}
          />
          <Text
            style={[styles.enterYourEmail, styles.enterYourEmailFlexBox]}
          >{`Enter your email address 
below to reset your password`}</Text>
        </View>
      </Pressable>
      <Text style={[styles.dontHaveAnContainer, styles.enterYourEmailFlexBox]}>
        <Text style={styles.dontHaveAnContainer1}>
          <Text style={styles.dontHaveAnAccount}>
            <Text style={styles.dontHaveAn}>Don't have an account?</Text>
            <Text style={styles.text}>{` `}</Text>
          </Text>
          <Text style={[styles.signUp, styles.signUpTypo]}>SIGN UP</Text>
        </Text>
      </Text>
    </LinearGradient>
  );
});

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 354,
    width: 385,
    position: "absolute",
  },
  emailFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  groupItemPosition: {
    left: "0%",
    right: "0%",
    height: "23.12%",
    width: "100%",
    position: "absolute",
  },
  frameChildPosition: {
    borderRadius: Border.br_14xl,
    height: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "37.9%",
    top: "52.54%",
    width: "7.31%",
    height: "9.56%",
    position: "absolute",
    overflow: "hidden",
  },
  enterYourEmailFlexBox: {
    textAlign: "center",
    lineHeight: 28,
    letterSpacing: 0.3,
    fontSize: FontSize.typographyBody_size,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  signUpTypo: {
    fontFamily: FontFamily.rubikBold,
    fontWeight: "700",
  },
  groupChild: {
    top: 0,
    left: 0,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_31xl,
    backgroundColor: "transparent",
  },
  forgotPassword: {
    height: "11.81%",
    width: "65.47%",
    left: "23.3%",
    fontSize: FontSize.specialTextBig_size,
    color: Color.colorTextHeading,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    fontFamily: FontFamily.rubikBold,
    fontWeight: "700",
    lineHeight: 30,
    display: "flex",
    textAlign: "left",
    top: "0%",
  },
  frameChild: {
    backgroundColor: Color.colorBlack,
  },
  frameWrapper: {
    top: "76.88%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    height: "23.12%",
  },
  continue: {
    height: "12.17%",
    width: "27.13%",
    top: "82.32%",
    left: "36.57%",
    fontSize: FontSize.typographyLevel_size,
    fontWeight: "500",
    fontFamily: FontFamily.typographyLevel,
    color: Color.colorWhite1,
    lineHeight: 30,
    display: "flex",
    textAlign: "left",
  },
  groupItem: {
    top: "45.78%",
    bottom: "31.1%",
    borderRadius: Border.br_30xl,
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderWidth: 4,
    left: "0%",
    right: "0%",
    height: "23.12%",
  },
  email: {
    height: "13.17%",
    width: "17.07%",
    top: "50.93%",
    left: "18.9%",
    fontSize: FontSize.typographyLevel1_size,
    lineHeight: 33,
    color: Color.colorGray_500,
    fontFamily: FontFamily.typographyLevel1,
  },
  clarityemailLineIcon: {
    right: "85.08%",
    left: "7.61%",
  },
  antDesigneyeInvisibleOutliIcon: {
    right: "8.23%",
    left: "84.46%",
  },
  enterYourEmail: {
    height: "22.33%",
    width: "73.16%",
    top: "15.75%",
    left: "15.04%",
    color: Color.colorGainsboro_100,
    justifyContent: "center",
    fontFamily: FontFamily.typographyLevel1,
  },
  forgotPasswordParent: {
    height: "78.93%",
    width: "88.08%",
    top: "12.43%",
    right: "6.73%",
    bottom: "8.64%",
    left: "5.19%",
    position: "absolute",
  },
  rectangleParent: {
    top: 286,
    left: 21,
  },
  dontHaveAn: {
    fontFamily: FontFamily.rubikItalic,
    fontStyle: "italic",
  },
  text: {
    fontFamily: FontFamily.rubikBoldItalic,
    fontStyle: "italic",
    fontWeight: "700",
  },
  dontHaveAnAccount: {
    color: Color.colorBlack,
  },
  signUp: {
    textDecoration: "underline",
    color: Color.colorDarkblue,
  },
  dontHaveAnContainer1: {
    width: "100%",
  },
  dontHaveAnContainer: {
    height: "3.24%",
    width: "67.29%",
    top: "92.01%",
    left: "16.36%",
  },
  forgotpassword: {
    width: 428,
    height: 926,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default ForgotPassword;
