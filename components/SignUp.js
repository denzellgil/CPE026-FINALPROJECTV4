import React, { useState, useCallback, memo } from "react";
import { Pressable, Text, StyleSheet, View, Modal } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import Login from "./Login";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const SignUp = memo(() => {
  const [rectangleContainer2Visible, setRectangleContainer2Visible] =
    useState(false);

  const openRectangleContainer2 = useCallback(() => {
    setRectangleContainer2Visible(true);
  }, []);

  const closeRectangleContainer2 = useCallback(() => {
    setRectangleContainer2Visible(false);
  }, []);

  return (
    <>
      <LinearGradient
        style={styles.signup}
        locations={[0, 1]}
        colors={["#20252d", "#015967"]}
      >
        <LinearGradient
          style={styles.wrapper}
          locations={[0, 1]}
          colors={["#446063", "rgba(204, 212, 221, 0)"]}
        >
          <Pressable style={styles.pressable}>
            <View style={styles.frameParent}>
              <Pressable
                style={styles.frameWrapper}
                onPress={openRectangleContainer2}
              >
                <View
                  style={[styles.frameContainer, styles.signUpWrapperPosition]}
                >
                  <View
                    style={[styles.signUpWrapper, styles.signUpWrapperPosition]}
                  >
                    <Text style={[styles.signUp, styles.signUpFlexBox]}>
                      SIGN UP
                    </Text>
                  </View>
                </View>
              </Pressable>
              <Text style={[styles.createANew, styles.signUpFlexBox]}>
                Create a new account
              </Text>
              <View style={[styles.frame, styles.frameLayout]}>
                <View style={styles.frameChild} />
                <Text style={styles.username}>Username</Text>
                <Image
                  style={[styles.userIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/user.png")}
                />
                <Image
                  style={[styles.doneIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/done.png")}
                />
              </View>
              <View style={[styles.frame1, styles.frameLayout]}>
                <View style={styles.frameChild} />
                <Text style={[styles.password, styles.passwordPosition]}>
                  Password
                </Text>
                <Image
                  style={[styles.padlockIcon, styles.iconPosition1]}
                  contentFit="cover"
                  source={require("../assets/padlock.png")}
                />
                <Image
                  style={[styles.doneIcon1, styles.iconPosition1]}
                  contentFit="cover"
                  source={require("../assets/done1.png")}
                />
              </View>
              <View style={[styles.frame2, styles.frameLayout]}>
                <View style={styles.frameChild} />
                <Text style={[styles.rePassword, styles.passwordPosition]}>
                  Re-Password
                </Text>
                <Image
                  style={[styles.padlockIcon1, styles.iconPosition]}
                  contentFit="cover"
                  source={require("../assets/padlock1.png")}
                />
                <Image
                  style={[styles.doneIcon2, styles.iconPosition]}
                  contentFit="cover"
                  source={require("../assets/done2.png")}
                />
              </View>
              <View style={[styles.frame3, styles.frameLayout]}>
                <View style={styles.frameChild} />
                <Text style={[styles.email, styles.passwordPosition]}>
                  Email
                </Text>
                <Image
                  style={[styles.clarityemailLineIcon, styles.iconPosition1]}
                  contentFit="cover"
                  source={require("../assets/clarityemailline.png")}
                />
                <Image
                  style={[
                    styles.antDesigneyeInvisibleOutliIcon,
                    styles.iconLayout,
                  ]}
                  contentFit="cover"
                  source={require("../assets/antdesigneyeinvisibleoutlined.png")}
                />
              </View>
            </View>
          </Pressable>
        </LinearGradient>
      </LinearGradient>

      <Modal
        animationType="fade"
        transparent
        visible={rectangleContainer2Visible}
      >
        <View style={styles.rectangleContainer2Overlay}>
          <Pressable
            style={styles.rectangleContainer2Bg}
            onPress={closeRectangleContainer2}
          />
          <Login onClose={closeRectangleContainer2} />
        </View>
      </Modal>
    </>
  );
});

const styles = StyleSheet.create({
  signUpWrapperPosition: {
    left: "0%",
    right: "0%",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  signUpFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  frameLayout: {
    height: 65,
    width: 339,
    left: 0,
    borderRadius: Border.br_30xl,
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    height: 26,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  passwordPosition: {
    left: "18.28%",
    color: Color.colorGray_500,
    fontFamily: FontFamily.typographyLevel1,
    lineHeight: 33,
    fontSize: FontSize.typographyLevel1_size,
    top: "22.45%",
    height: "56.97%",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  iconPosition1: {
    top: 21,
    height: 26,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    top: 18,
    height: 26,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleContainer2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  rectangleContainer2Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  signUp: {
    height: "43.34%",
    width: "25.36%",
    top: "28.79%",
    left: "37.45%",
    fontSize: FontSize.typographyLevel_size,
    lineHeight: 25,
    fontWeight: "500",
    fontFamily: FontFamily.typographyLevel,
    color: Color.colorWhite1,
  },
  signUpWrapper: {
    borderRadius: Border.br_14xl,
    backgroundColor: Color.colorBlack,
    top: "0%",
    bottom: "0%",
  },
  frameContainer: {
    top: "0.62%",
    bottom: "-0.62%",
  },
  frameWrapper: {
    height: "13.9%",
    width: "99.41%",
    top: "86.1%",
    left: "0.59%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  createANew: {
    height: "9.04%",
    width: "78.57%",
    left: "18.47%",
    fontSize: FontSize.specialTextBig_size,
    lineHeight: 38,
    fontWeight: "700",
    fontFamily: FontFamily.rubikBold,
    color: Color.colorBlack,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    top: "0%",
  },
  frameChild: {
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 4,
    borderRadius: Border.br_30xl,
    top: "0%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  username: {
    width: "32.03%",
    left: "18.61%",
    color: Color.colorGray_500,
    fontFamily: FontFamily.typographyLevel1,
    lineHeight: 33,
    fontSize: FontSize.typographyLevel1_size,
    top: "22.45%",
    height: "56.97%",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  userIcon: {
    left: 31,
    top: 24,
    height: 26,
    width: 24,
  },
  doneIcon: {
    left: 291,
    top: 24,
    height: 26,
    width: 24,
  },
  frame: {
    top: 53,
  },
  password: {
    width: "30.49%",
  },
  padlockIcon: {
    left: 30,
  },
  doneIcon1: {
    left: 291,
  },
  frame1: {
    top: 140,
  },
  rePassword: {
    width: "41.76%",
  },
  padlockIcon1: {
    left: 30,
  },
  doneIcon2: {
    left: 291,
  },
  frame2: {
    top: 227,
  },
  email: {
    width: "17.07%",
  },
  clarityemailLineIcon: {
    left: 32,
  },
  antDesigneyeInvisibleOutliIcon: {
    top: 15,
    left: 292,
  },
  frame3: {
    top: 313,
  },
  frameParent: {
    top: 26,
    left: 19,
    width: 341,
    height: 465,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  pressable: {
    borderRadius: Border.br_31xl,
    height: "100%",
    width: "100%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: "transparent",
  },
  wrapper: {
    left: 22,
    top: 170,
    width: 385,
    height: 508,
    position: "absolute",
  },
  signup: {
    width: 428,
    height: 926,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default SignUp;
