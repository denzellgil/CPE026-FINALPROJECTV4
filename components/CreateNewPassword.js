import React, { memo } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const CreateNewPassword = memo(() => {
  return (
    <LinearGradient
      style={styles.createnewpassword}
      locations={[0, 1]}
      colors={["#20252d", "#015967"]}
    >
      <Pressable style={styles.rectangleParent}>
        <LinearGradient
          style={[styles.groupChild, styles.childFramePosition]}
          locations={[0, 1]}
          colors={["#446063", "rgba(204, 212, 221, 0)"]}
        />
        <View style={styles.createNewPasswordParent}>
          <Text style={[styles.createNewPassword, styles.passwordFlexBox]}>
            Create New Password
          </Text>
          <View style={[styles.frameWrapper, styles.childFramePosition]}>
            <View style={[styles.rectangleWrapper, styles.childFramePosition]}>
              <View style={[styles.frameChild, styles.childFramePosition]} />
            </View>
          </View>
          <Text style={[styles.resetPassword, styles.passwordFlexBox]}>
            Reset Password
          </Text>
          <View style={[styles.groupItem, styles.groupBorder]} />
          <View style={[styles.groupInner, styles.groupBorder]} />
          <View style={[styles.rectangleView, styles.groupBorder]} />
          <Text style={[styles.confirmPassword, styles.passwordTypo]}>
            Confirm Password
          </Text>
          <Text style={[styles.newPassword, styles.passwordTypo]}>
            New Password
          </Text>
          <Text style={[styles.oldPassword, styles.passwordTypo]}>
            Old Password
          </Text>
          <Image
            style={[
              styles.antDesigneyeInvisibleOutliIcon,
              styles.antIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/antdesigneyeinvisibleoutlined2.png")}
          />
          <Image
            style={[
              styles.antDesigneyeInvisibleOutliIcon1,
              styles.antIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/antdesigneyeinvisibleoutlined3.png")}
          />
          <Image
            style={[
              styles.antDesigneyeInvisibleOutliIcon2,
              styles.antIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/antdesigneyeinvisibleoutlined2.png")}
          />
          <Text
            style={[styles.yourNewPassword, styles.yourNewPasswordFlexBox]}
          >{`Your new password must be 
different from previous used password`}</Text>
        </View>
      </Pressable>
      <Text style={[styles.dontHaveAnContainer, styles.yourNewPasswordFlexBox]}>
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
  childFramePosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  passwordFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    lineHeight: 30,
    height: "7.62%",
    position: "absolute",
  },
  groupBorder: {
    borderWidth: 4,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_30xl,
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  passwordTypo: {
    color: Color.colorGray_500,
    lineHeight: 33,
    fontSize: FontSize.typographyLevel1_size,
    left: "7.67%",
    fontFamily: FontFamily.typographyLevel1,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  antIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "84.07%",
    right: "8.26%",
    width: "7.67%",
    position: "absolute",
    overflow: "hidden",
  },
  yourNewPasswordFlexBox: {
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
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_31xl,
    top: "0%",
    height: "100%",
    bottom: "0%",
    right: "0%",
    backgroundColor: "transparent",
  },
  createNewPassword: {
    width: "78.47%",
    left: "10.91%",
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
    top: "0%",
  },
  frameChild: {
    borderRadius: Border.br_14xl,
    backgroundColor: Color.colorBlack,
    top: "0%",
    height: "100%",
    bottom: "0%",
    right: "0%",
  },
  rectangleWrapper: {
    top: "0%",
    height: "100%",
    bottom: "0%",
    right: "0%",
  },
  frameWrapper: {
    top: "85.65%",
    height: "14.35%",
  },
  resetPassword: {
    width: "46.9%",
    top: "89.01%",
    left: "26.25%",
    fontSize: FontSize.typographyLevel_size,
    fontWeight: "500",
    fontFamily: FontFamily.typographyLevel,
    color: Color.colorWhite1,
  },
  groupItem: {
    top: "66.14%",
    bottom: "19.28%",
    height: "14.57%",
    borderWidth: 4,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_30xl,
  },
  groupInner: {
    top: "46.64%",
    bottom: "39.01%",
    height: "14.35%",
  },
  rectangleView: {
    top: "27.13%",
    bottom: "58.3%",
    height: "14.57%",
    borderWidth: 4,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_30xl,
  },
  confirmPassword: {
    width: "56.93%",
    top: "69.28%",
    height: "8.52%",
    lineHeight: 33,
    fontSize: FontSize.typographyLevel1_size,
    left: "7.67%",
  },
  newPassword: {
    height: "8.3%",
    width: "46.02%",
    top: "49.78%",
  },
  oldPassword: {
    width: "42.48%",
    top: "30.27%",
    height: "8.52%",
    lineHeight: 33,
    fontSize: FontSize.typographyLevel1_size,
    left: "7.67%",
  },
  antDesigneyeInvisibleOutliIcon: {
    top: "70.4%",
    bottom: "23.54%",
    height: "6.05%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "84.07%",
    right: "8.26%",
    width: "7.67%",
  },
  antDesigneyeInvisibleOutliIcon1: {
    height: "5.83%",
    top: "50.9%",
    bottom: "43.27%",
  },
  antDesigneyeInvisibleOutliIcon2: {
    top: "31.39%",
    bottom: "62.56%",
    height: "6.05%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "84.07%",
    right: "8.26%",
    width: "7.67%",
  },
  yourNewPassword: {
    height: "14.13%",
    width: "96.76%",
    top: "10.31%",
    left: "1.47%",
    color: Color.colorGainsboro_100,
    justifyContent: "center",
    fontFamily: FontFamily.typographyLevel1,
    textAlign: "center",
    lineHeight: 28,
    letterSpacing: 0.3,
    fontSize: FontSize.typographyBody_size,
  },
  createNewPasswordParent: {
    height: "86.6%",
    width: "86.48%",
    top: "9.32%",
    right: "5.61%",
    bottom: "4.08%",
    left: "7.91%",
    position: "absolute",
  },
  rectangleParent: {
    height: "55.62%",
    width: "91.59%",
    top: "22.25%",
    right: "4.21%",
    bottom: "22.14%",
    left: "4.21%",
    position: "absolute",
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
    top: "92.33%",
    left: "16.36%",
  },
  createnewpassword: {
    width: 428,
    height: 926,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default CreateNewPassword;
