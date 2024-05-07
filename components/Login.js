import React, { memo } from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Login = memo(({ onClose }) => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.login}
      locations={[0, 1]}
      colors={["#20252d", "#015967"]}
    >
      <Pressable style={styles.frame}>
        <LinearGradient
          style={styles.frameInner}
          locations={[0, 1]}
          colors={["#446063", "rgba(204, 212, 221, 0)"]}
        >
          <View style={styles.frameParent}>
            <View style={styles.frame1}>
              <Text style={styles.login1}>WELCOME</Text>
            </View>
            <View style={styles.frame2}>
              <View style={styles.frame3}>
                <View style={styles.frame4}>
                  <View style={styles.frame5}>
                    <View style={styles.frame6}>
                      <Image
                        style={styles.userIcon}
                        contentFit="cover"
                        source={require("../assets/user1.png")}
                      />
                      <Text style={styles.username}>Username</Text>
                    </View>
                    <Image
                      style={styles.doneIcon}
                      contentFit="cover"
                      source={require("../assets/done3.png")}
                    />
                  </View>
                </View>
                <View style={styles.frame7}>
                  <Pressable
                    style={styles.frameChild}
                    onPress={() => navigation.navigate("Home")}
                  />
                </View>
              </View>
              <View style={styles.frame8}>
                <View style={styles.frame9}>
                  <View style={styles.frame10}>
                    <View style={styles.frame11}>
                      <Image
                        style={styles.userIcon}
                        contentFit="cover"
                        source={require("../assets/padlock2.png")}
                      />
                      <Text style={styles.password}>Password</Text>
                    </View>
                    <Image
                      style={styles.doneIcon1}
                      contentFit="cover"
                      source={require("../assets/done4.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </LinearGradient>
        <View style={styles.frame12}>
          <Pressable
            style={styles.forgotPassword}
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text style={styles.forgotPassword1}> Forgot Password</Text>
          </Pressable>
        </View>
        <View style={styles.loginWrapper}>
          <Text style={styles.login2}>LOGIN</Text>
        </View>
        <View style={styles.image20240409030038236Rem} />
      </Pressable>
      <View style={styles.frame13}>
        <Pressable
          style={styles.forgotPassword}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.text}>
            <Text style={styles.dontHaveAnContainer1}>
              <Text style={styles.dontHaveAnAccount}>
                <Text style={styles.dontHaveAn}>Don't have an account?</Text>
                <Text style={styles.text1}>{` `}</Text>
              </Text>
              <Text style={styles.signUp}>SIGN UP</Text>
            </Text>
          </Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
});

const styles = StyleSheet.create({
  login1: {
    position: "relative",
    fontSize: FontSize.specialTextBig_size,
    lineHeight: 30,
    fontWeight: "500",
    fontFamily: FontFamily.typographyLevel,
    color: Color.colorBlack,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 129,
    height: 35,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  frame1: {
    width: 170,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  userIcon: {
    position: "relative",
    width: 25,
    height: 27,
    overflow: "hidden",
  },
  username: {
    position: "relative",
    fontSize: FontSize.typographyLevel1_size,
    lineHeight: 33,
    fontFamily: FontFamily.typographyLevel1,
    color: Color.colorGray_500,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 114,
    height: 38,
    marginLeft: 7,
  },
  frame6: {
    width: 148,
    height: 38,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  doneIcon: {
    position: "relative",
    width: 25,
    height: 27,
    overflow: "hidden",
    marginLeft: 131,
  },
  frame5: {
    borderRadius: Border.br_30xl,
    borderStyle: "solid",
    borderColor: Color.colorGray_200,
    borderWidth: 4,
    width: 364,
    height: 75,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 22,
    paddingTop: 15,
    paddingBottom: 14,
  },
  frame4: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frameChild: {
    width: 356,
    height: 73,
    justifyContent: "center",
    alignItems: "center",
  },
  frame7: {
    width: 356,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 134,
  },
  frame3: {
    flex: 1,
    width: 356,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 0,
    zIndex: 0,
  },
  password: {
    position: "relative",
    fontSize: FontSize.typographyLevel1_size,
    lineHeight: 33,
    fontFamily: FontFamily.typographyLevel1,
    color: Color.colorGray_500,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 108,
    height: 38,
    marginLeft: 9,
  },
  frame11: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  doneIcon1: {
    position: "relative",
    width: 25,
    height: 27,
    overflow: "hidden",
    marginLeft: 135,
  },
  frame10: {
    borderRadius: Border.br_30xl,
    borderStyle: "solid",
    borderColor: Color.colorGray_200,
    borderWidth: 4,
    width: 364,
    height: 75,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingHorizontal: 22,
    paddingVertical: 15,
  },
  frame9: {
    width: 356,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frame8: {
    position: "absolute",
    top: 164,
    right: 0,
    width: 356,
    height: 105,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  frame2: {
    width: 357,
    height: 301,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
    marginTop: 23,
  },
  frameParent: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 356,
    height: 327,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frameInner: {
    shadowColor: "rgba(0, 0, 0, 0.75)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_31xl,
    width: 389,
    height: 355,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 0,
    paddingVertical: 17,
    backgroundColor: "transparent",
  },
  forgotPassword1: {
    fontSize: FontSize.typographyBody_size,
    letterSpacing: 0.3,
    lineHeight: 28,
    fontFamily: FontFamily.typographyLevel1,
    color: Color.colorBlack,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 155,
    height: 33,
  },
  forgotPassword: {
    position: "relative",
  },
  frame12: {
    width: 190,
    height: 33,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 27,
  },
  login2: {
    position: "relative",
    fontSize: FontSize.typographyLevel_size,
    lineHeight: 30,
    fontWeight: "500",
    fontFamily: FontFamily.typographyLevel,
    color: Color.colorWhite1,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 74,
    height: 39,
  },
  loginWrapper: {
    borderRadius: Border.br_14xl,
    backgroundColor: Color.colorGray_200,
    width: 351,
    height: 73,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 141,
    paddingVertical: 13,
    marginTop: 27,
  },
  image20240409030038236Rem: {
    width: 155,
    height: 463,
    marginLeft: 250,
    marginTop: 27,
  },
  frame: {
    width: 405,
    height: 688,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  dontHaveAn: {
    fontStyle: "italic",
    fontFamily: FontFamily.rubikItalic,
  },
  text1: {
    fontStyle: "italic",
    fontWeight: "700",
    fontFamily: FontFamily.rubikBoldItalic,
  },
  dontHaveAnAccount: {
    color: Color.colorBlack,
  },
  signUp: {
    textDecoration: "underline",
    fontWeight: "700",
    fontFamily: FontFamily.rubikBold,
    color: Color.colorDarkblue,
  },
  dontHaveAnContainer1: {
    width: "100%",
  },
  text: {
    fontSize: FontSize.typographyBody_size,
    letterSpacing: 0.3,
    lineHeight: 28,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    width: 288,
    height: 53,
  },
  frame13: {
    width: 340,
    height: 53,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  login: {
    position: "relative",
    width: 428,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingLeft: 18,
    paddingTop: 182,
    paddingRight: 5,
    paddingBottom: 56,
    maxWidth: "100%",
    maxHeight: "100%",
    backgroundColor: "transparent",
  },
});

export default Login;
